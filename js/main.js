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

// Treatments page: show only the selected specialty (from the URL hash)
const treatments = document.querySelectorAll('.treat');
const chips = document.querySelectorAll('.chips a');

if (treatments.length) {
  const showTreatment = () => {
    const id = location.hash.slice(1);
    const selected = [...treatments].find((t) => t.id === id) || treatments[0];

    treatments.forEach((t) => { t.hidden = t !== selected; });
    chips.forEach((chip) => {
      const active = chip.hash === `#${selected.id}`;
      chip.classList.toggle('is-active', active);
      if (active) chip.setAttribute('aria-current', 'true');
      else chip.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
  };

  showTreatment();
  window.addEventListener('hashchange', showTreatment);
}

// Current year in footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
