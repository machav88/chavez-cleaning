/**
 * Quote form behaviour: accessible validation, optional service preselect
 * (?service=deep-cleaning) and a transport adapter (demo | endpoint).
 */
type Mode = 'demo' | 'endpoint';

const MSG = {
  required: 'This field is required.',
  email: 'Enter a valid email address, like name@example.com.',
  phone: 'Enter a 10-digit US phone number.',
  consent: 'Please check this box so we can reply.',
  sending: 'Sending…',
};

const track = (event: string, params: Record<string, unknown> = {}) => {
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
  if (typeof w.gtag === 'function') w.gtag('event', event, params);
  else if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event, ...params });
};

function fieldLabel(el: HTMLElement): string {
  if (el.dataset.label) return el.dataset.label;
  const id = el.id;
  const lab = id ? document.querySelector<HTMLLabelElement>(`label[for="${id}"]`) : el.closest('label');
  return (lab?.textContent || el.getAttribute('name') || '').replace('*', '').replace(/See our.*$/, '').trim();
}

function validate(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string {
  const v = (el as HTMLInputElement).type === 'checkbox' ? ((el as HTMLInputElement).checked ? 'yes' : '') : el.value.trim();
  if (el.required && !v) return (el as HTMLInputElement).type === 'checkbox' ? MSG.consent : MSG.required;
  if (!v) return '';
  if (el.dataset.validate === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return MSG.email;
  if (el.dataset.validate === 'phone') {
    const digits = v.replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '');
    if (digits.length !== 10) return MSG.phone;
  }
  return '';
}

function setError(el: HTMLElement, msg: string) {
  const errId = el.getAttribute('aria-describedby')?.split(' ').find((x) => x.endsWith('-err'));
  const err = errId ? document.getElementById(errId) : null;
  if (msg) el.setAttribute('aria-invalid', 'true');
  else el.removeAttribute('aria-invalid');
  if (err) err.textContent = msg;
}

function init(form: HTMLFormElement) {
  const mode = (form.dataset.mode || 'demo') as Mode;
  const wrap = form.parentElement!;
  const summary = form.querySelector<HTMLElement>('.errors')!;
  const result = wrap.querySelector<HTMLElement>('[data-result]')!;
  const button = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
  const fields = Array.from(form.querySelectorAll<HTMLInputElement>('input[required], select[required], input[data-validate]'));

  // Preselect service from the URL (?service=slug)
  const pre = new URLSearchParams(location.search).get('service');
  const select = form.querySelector<HTMLSelectElement>('select[name=service]');
  if (pre && select && [...select.options].some((o) => o.value === pre)) select.value = pre;

  let started = false;
  form.addEventListener('input', () => {
    if (!started) { started = true; track('form_start', { form: 'quote' }); }
  });
  fields.forEach((el) =>
    el.addEventListener('blur', () => {
      if (el.getAttribute('aria-invalid') === 'true' || el.value) setError(el, validate(el));
    }),
  );

  const show = (state: 'demo' | 'success' | 'fail') => {
    result.hidden = false;
    result.querySelectorAll<HTMLElement>('[data-state]').forEach((s) => (s.hidden = s.dataset.state !== state));
    result.focus();
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const problems = fields.map((el) => ({ el, msg: validate(el) })).filter((p) => p.msg);
    fields.forEach((el) => setError(el, validate(el)));
    const list = summary.querySelector('ul')!;
    list.innerHTML = '';
    if (problems.length) {
      problems.forEach(({ el, msg }) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${el.id}`;
        a.textContent = `${fieldLabel(el)}: ${msg}`;
        a.addEventListener('click', (ev) => { ev.preventDefault(); el.focus(); });
        li.append(a);
        list.append(li);
      });
      summary.hidden = false;
      summary.focus();
      track('form_error', { form: 'quote', count: problems.length });
      return;
    }
    summary.hidden = true;

    // Honeypot: silently stop bots.
    const hp = form.querySelector<HTMLInputElement>('input[name=company]');
    if (hp && hp.value) return;

    const data = new FormData(form);
    if (mode === 'demo') {
      form.hidden = true;
      show('demo');
      track('form_submit_demo', { form: 'quote', service: data.get('service') });
      return;
    }

    const label = button.querySelector('.label')!;
    const original = label.textContent;
    button.disabled = true;
    label.textContent = MSG.sending;
    try {
      let res: Response;
      const endpoint = form.dataset.endpoint;
      if (!endpoint) throw new Error('Missing PUBLIC_FORM_ENDPOINT');
      res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.hidden = true;
      show('success');
      track('generate_lead', { form: 'quote', service: data.get('service') });
    } catch {
      show('fail');
      track('form_fail', { form: 'quote' });
    } finally {
      button.disabled = false;
      label.textContent = original;
    }
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-quote-form]').forEach(init);

// Click tracking for contact links (no-op unless analytics is configured).
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (a) track(a.dataset.track!, { location: location.pathname });
});
