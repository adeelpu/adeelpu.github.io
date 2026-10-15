/* adeelpu.github.io — small helpers (no dependencies) */
(function () {
  // ---- Mobile menu ----
  var btn = document.querySelector('.menu-btn');
  var links = document.getElementById('nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---- Old tab links (adeelpu.github.io/#tab-...) keep working ----
  var oldTabs = {
    '#tab-pubs': 'publications.html',
    '#tab-data': 'data.html',
    '#tab-conf': 'talks.html#conferences',
    '#tab-talks': 'talks.html#invited-talks',
    '#tab-tworkshops': 'talks.html#training-workshops',
    '#tab-activities': 'talks.html#activities'
  };
  if (document.body.dataset.page === 'home' && oldTabs[location.hash]) {
    location.replace(oldTabs[location.hash]);
    return;
  }

  // ---- Filterable lists (publications, news) ----
  var list = document.querySelector('[data-filter-list]');
  if (!list) return;
  var chips = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'));
  var search = document.getElementById('filter-search');
  var count = document.getElementById('result-count');
  var empty = document.getElementById('filter-empty');
  var items = Array.prototype.slice.call(list.querySelectorAll('[data-type]'));
  var groups = Array.prototype.slice.call(list.querySelectorAll('[data-group]'));
  var noun = list.getAttribute('data-noun') || 'items';
  var current = 'all';

  items.forEach(function (el) {
    el._text = (el.textContent || '').toLowerCase().replace(/\s+/g, ' ');
  });

  function apply() {
    var q = search ? search.value.trim().toLowerCase() : '';
    var shown = 0;
    items.forEach(function (el) {
      var okType = current === 'all' || el.getAttribute('data-type') === current;
      var okText = !q || el._text.indexOf(q) !== -1;
      var on = okType && okText;
      el.hidden = !on;
      if (on) shown++;
    });
    groups.forEach(function (g) {
      g.hidden = !g.querySelector('[data-type]:not([hidden])');
    });
    if (count) count.textContent = 'Showing ' + shown + ' of ' + items.length + ' ' + noun;
    if (empty) empty.hidden = shown !== 0;
  }

  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      current = c.getAttribute('data-filter');
      chips.forEach(function (o) { o.setAttribute('aria-pressed', o === c ? 'true' : 'false'); });
      apply();
    });
  });
  if (search) search.addEventListener('input', apply);

  // allow publications.html?type=journal
  var m = location.search.match(/[?&]type=([a-z]+)/);
  if (m) {
    var target = chips.filter(function (c) { return c.getAttribute('data-filter') === m[1]; })[0];
    if (target) target.click();
  }
  apply();
})();
