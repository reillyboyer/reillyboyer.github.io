// Theme toggle, current year, and contact form submission via Formspree.
(function() {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const key = 'pref-theme';
  const setTheme = (t) => root.setAttribute('data-theme', t);
  const saved = localStorage.getItem(key);
  setTheme(saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  toggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next); localStorage.setItem(key, next);
  });

  // Contact form
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  // Replace with your Formspree endpoint: https://formspree.io/f/{your_id}
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xxxxxxxx'; // TODO: replace

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Sending…';

      // If no Formspree endpoint is set, fallback to mailto
      if (FORMSPREE_ENDPOINT.endsWith('xxxxxxxx')) {
        const fd = new FormData(form);
        const subject = encodeURIComponent('Message from your website');
        const body = encodeURIComponent(
          `Name: ${fd.get('name') || ''}\nEmail: ${fd.get('email') || ''}\n\n${fd.get('message') || ''}`
        );
        window.location.href = `mailto:rtb2744@gmail.com?subject=${subject}&body=${body}`;
        status.textContent = 'Opening your email app…';
        form.reset();
        return;
      }

      try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const resp = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData // Formspree accepts multipart/form-data
        });

        if (resp.ok) {
          status.textContent = 'Thanks! Your message was sent.';
          form.reset();
        } else {
          const out = await resp.json().catch(() => ({}));
          throw new Error(out?.error || 'Form submission failed.');
        }
      } catch (err) {
        console.error(err);
        status.textContent = 'Sorry — something went wrong. You can also email me directly: rtb2744@gmail.com';
      }
    });
  }
})();