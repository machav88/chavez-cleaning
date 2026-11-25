# Redirecciones 301: web vieja (WordPress) → web nueva (Cloudflare)

Reglas activas en `public/_redirects` (Cloudflare Workers static assets / Pages usan el mismo formato).

## Inventario de la web vieja (23-nov-2026)
- Sitemap Yoast (`/sitemap_index.xml`): `/`, `/terms-conditions/`, `/join-the-team/`, `/city/`, `/home-2/`, `/welcome-to-cloudways/`, `/author/muchisimo/`, `/category/uncategorized/`, `/elementor-hf/*`. Archivo: `../web vieja/urls-viejas.txt`.
- 21 páginas de zona en `/area/<ciudad>-tx/` (responden 200 y tienen title SEO propio). Archivo: `../web vieja/paginas-zonas.txt`.
- **Enlaces rotos de la web vieja:** el menú y el footer enlazaban a `/KvZaKCaLoCvRiaU/area/...` (404) y `/privacy-policy/` (404). En la web nueva también se redirigen esas URLs, por si alguien las tiene enlazadas.

## Mapa (cada URL a su equivalente más cercano)
| Vieja | Nueva |
|---|---|
| /area/dallas-tx/ | /service-areas/dallas/ |
| /area/uptown-dallas-tx/ | /services/house-cleaning/uptown/ |
| /area/downtown-dallas-tx/ | /services/office-cleaning/downtown-dallas/ |
| /area/deep-ellum-tx/ | /services/move-in-move-out-cleaning/deep-ellum/ |
| /area/oak-lawn-tx/, /area/katy-trails-tx/, /area/santa-fe-trails-tx/ | /service-areas/dallas/ |
| /area/highland-park-tx/ | /services/house-cleaning/highland-park/ |
| /area/university-park-tx/ | /service-areas/park-cities/ |
| /area/* (suburbios) | /service-areas/ |
| /terms-conditions/ | /privacy-policy/ |
| /join-the-team/, /author/* | /about/ |
| /city/ | /service-areas/ |
| /home-2/, /welcome-to-cloudways/, /elementor-hf/*, /feed/ | / |
| sitemaps viejos | /sitemap-index.xml |

## El día del cambio de DNS
1. Comprobar en vivo: `curl -s -o NUL -w "%{http_code} %{redirect_url}" https://chavezhousecleaning.com/area/uptown-dallas-tx/` → `301 …/services/house-cleaning/uptown/`.
2. robots.txt, sitemap-index.xml y llms.txt → 200.
3. Search Console: enviar `https://chavezhousecleaning.com/sitemap-index.xml` y pedir indexación de la home, /services/office-cleaning/, /services/house-cleaning/ y las 3 de office × barrio.
