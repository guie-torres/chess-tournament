// main.js - mobile hamburger menu only.

// Tell the CSS that JavaScript is running. The menu is only hidden on phones
// when this class exists, so without JS the links are still visible.
document.documentElement.classList.add('js');

const toggle = document.querySelector('.nav-toggle'); // the hamburger button
const nav = document.querySelector('#site-nav');      // the list of links

if (toggle && nav) {
  // Open or close the menu and keep the button's accessibility info in sync.
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  // Clicking the button flips the menu.
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));

  // Pressing Escape closes the menu and returns focus to the button.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Clicking a link closes the menu.
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
}
