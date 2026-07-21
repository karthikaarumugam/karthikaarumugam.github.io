// Smooth scroll + active section + simple custom cursor
// Exported as an ES module so it can be imported and invoked safely from React.
export function initInteraction() {
  if (!('querySelector' in document)) return;

  // smooth scroll for internal links
  const onClick = function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const top = el.getBoundingClientRect().top + window.scrollY - 280;
      if (prefersReduced) {
        window.scrollTo(0, top);
      } else {
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  document.addEventListener('click', onClick, false);

  // active section observer
  const sections = Array.from(document.querySelectorAll('section[id]'));
  let observer = null;
  if (sections.length) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = document.querySelector('.site-nav a[href="#' + id + '"]');
        if (link) link.classList.toggle('active', entry.isIntersecting);
      });
    }, { root: null, threshold: 0.48 });

    sections.forEach((s) => observer.observe(s));
  }

  // custom cursor behavior disabled
  let cursor = null;

  // keyboard: show focus ring for keyboard users only
  const onMouseDown = () => { document.documentElement.classList.add('using-mouse'); };
  const onKeyDown = (e) => { if (e.key === 'Tab') { document.documentElement.classList.remove('using-mouse'); } };
  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('keydown', onKeyDown);

  // expose cleanup to allow deinit if needed
  return function cleanup() {
    document.removeEventListener('click', onClick, false);
    if (observer) observer.disconnect();
    if (cursor) {
      document.body.removeChild(cursor);
    }
    window.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('keydown', onKeyDown);
  };
}
