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

  // custom cursor (desktop only)
  const prefersFine = window.matchMedia('(pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cursor = null;
  if (prefersFine && !reduced) {
    cursor = document.createElement('div');
    cursor.className = 'site-cursor';
    Object.assign(cursor.style, {
      position: 'fixed', width: '12px', height: '12px', borderRadius: '50%', pointerEvents: 'none',
      background: 'rgba(15,98,254,0.95)', transform: 'translate(-50%,-50%)', zIndex: 9999, transition: 'transform 120ms linear'
    });
    document.body.appendChild(cursor);
    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', onMove);

    // enlarge over interactive elements
    const onOver = (e) => {
      const el = e.target;
      if (el.closest('a,button,[role="button"],.card,.btn')) {
        cursor.style.transform = 'translate(-50%,-50%) scale(2.6)';
        cursor.style.background = 'rgba(15,62,254,0.95)';
      } else {
        cursor.style.transform = 'translate(-50%,-50%) scale(1)';
        cursor.style.background = 'rgba(15,98,254,0.95)';
      }
    };
    document.addEventListener('mouseover', onOver);

    // return cleanup function data inside closure for later use
  }

  // keyboard: show focus ring for keyboard users only
  let mouseUsed = false;
  const onMouseDown = () => { mouseUsed = true; document.documentElement.classList.add('using-mouse'); };
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
