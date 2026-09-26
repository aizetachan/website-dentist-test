// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  // Close menu after choosing a link
  nav.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    })
  );
}

// Load Google Maps only on click (no third-party cookies before consent)
const map = document.querySelector('.map');
const mapButton = map?.querySelector('.map__load');

if (map && mapButton) {
  mapButton.addEventListener('click', () => {
    const query = encodeURIComponent(map.dataset.address);
    map.innerHTML = `<iframe src="https://www.google.com/maps?q=${query}&output=embed"
      title="Mapa de ubicación de la clínica" loading="lazy" allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  });
}

// Current year in footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
