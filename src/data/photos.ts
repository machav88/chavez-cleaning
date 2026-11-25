/**
 * Curated photo library. Every file in src/assets/photos was selected from
 * the previous Chavez House Cleaning website (6 real job photos + 7 licensed
 * stock images it already used), resized and stripped of EXIF/GPS metadata.
 * See docs/ASSET-MANIFEST.md for sources and reasons.
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.jpg', { eager: true });

export const photos = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace('.jpg', ''), mod.default]),
) as Record<PhotoSlug, ImageMetadata>;

export type PhotoSlug =
  // Real Chavez House Cleaning jobs (from the previous site)
  | 'maria-sunroom'
  | 'sunroom-sofa-rug'
  | 'team-living-room'
  | 'kitchen-navy-range'
  | 'kitchen-quartz-counter'
  | 'living-room-hardwood'
  // Licensed stock already used on the previous site
  | 'new-construction-drywall'
  | 'living-room-flowers'
  | 'office-open-plan'
  | 'bathroom-modern'
  | 'open-living-kitchen'
  | 'loft-living-room'
  | 'empty-apartment'
  // Pexels (free license): spaces, no people
  | 'bg-living-white' | 'bg-living-wood' | 'bg-kitchen-bright' | 'bg-office-reception' | 'bg-office-atrium' | 'bg-bedroom-light'
  | 'space-empty-sunlit' | 'space-kitchen-windows' | 'space-bath-glass' | 'space-office-lobby' | 'space-historic-porch' | 'space-bedroom-neutral'
  | 'dallas-bridge' | 'dallas-skyline' | 'west-end-street' | 'downtown-avenue';

/** Real job photos. Only these may be described as "our work". */
export const realPhotos: PhotoSlug[] = ['maria-sunroom', 'sunroom-sofa-rug', 'team-living-room', 'kitchen-navy-range', 'kitchen-quartz-counter', 'living-room-hardwood'];
