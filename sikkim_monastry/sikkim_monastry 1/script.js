// -----------------------------
// Content (edit here to add more)
// -----------------------------
const MONASTERIES = [
  {
    name: 'Rumtek Monastery',
    region: 'East Sikkim • Gangtok',
    lineage: ['Kagyu', 'Tibetan'],
    // Public Street View & Map links (open externally)
    view360: 'https://maps.app.goo.gl/9iYh1nfsjWfUJZAG6?g_st=aw',
    map: 'https://maps.app.goo.gl/srA3nU3J7N4zH1nq7',
    image: 'rumtek-monastery.jpeg',
    blurb: `<p>Perched on a quiet hilltop, overlooking the lush valleys of Sikkim, Rumtek Monastery is more than just a spiritual center — it’s a journey into Tibetan tradition, history, and culture.</p>
          <p>Originally founded in 1734 by Wangchuk Dorje, the 9th Karmapa, with the royal patronage of the Chogyals of Sikkim, the monastery has long been the principal seat of the Kagyu school of Tibetan Buddhism. For centuries, it stood as a symbol of peace and prayer — until time and neglect left it in ruins.</p>
          <p>The revival of Rumtek began in the 1950s, when His Holiness the 16th Gyalwa Karmapa, Rangjung Rigpe Dorje, visited the site during a pilgrimage. After escaping Tibet in 1959, he eventually chose Rumtek as his new seat. With support from the 11th Chogyal of Sikkim, Tashi Namgyal, who donated 74 acres of land, and encouragement from India’s Prime Minister Jawaharlal Nehru, the monastery’s restoration became a community effort — with locals contributing labor, food, and clothing.</p>
          <p>After four years of construction, Rumtek Monastery was completed in traditional Tibetan style. On the joyful occasion of Losar (Tibetan New Year) in 1966, the Karmapa inaugurated the stunning Dharma Chakra Centre, which today stands as the spiritual heart of the monastery.</p>
          <p>Inside, visitors will find not just vibrant murals and sacred shrines, but also rare Buddhist treasures: ancient relics, statues, and the priceless 108-volume canon of the Buddha’s teachings, carried from Tibet by the 16th Karmapa himself.</p>
          <h4>🌸 Why Visit?</h4>
          <ul>
            <li>To experience the grandeur of Tibetan architecture in the Himalayas.</li>
            <li>To witness spiritual rituals and chants that echo centuries of tradition.</li>
            <li>To enjoy the serene surroundings, panoramic views, and the calming presence of monks at prayer.</li>
          </ul>
          <p>Rumtek is not just a monastery — it’s a living museum of Buddhist culture, a place where history and spirituality come alive.</p>`,
  },
  {
    name: 'Pemayangtse Monastery',
    region: 'West Sikkim • Pelling',
    lineage: ['Nyingma', 'Tibetan'],
    view360: 'https://maps.app.goo.gl/DxeNbE2CFB3pi2kS6?g_st=aw',
    map: 'https://www.google.com/maps/@27.3042603,88.3015366,3a,63.3y,321.85h,106.16t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICE7IqDxQE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HaFgQCWFbvQJAxa_5ZjrhRDjRuB2KFJEqipxJPkOED8i4zojjQIWCVcv5tXdHgeIJm-EQkHq7PPatPF8f-JUfhsCKMTXMFeLC2Icz_OIKbbI5s1p4XiltuPYT3-yzllLEegfoJdyQ%3Dw900-h600-k-no-pi-16.159999999999997-ya321.85-ro0-fo100!7i5660!8i2830?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D',
    image: 'pemayangtse-monastery.jpeg',
    blurb: ``,
  },
  {
    name: 'Tashiding Monastery',
    region: 'West Sikkim • Near Yuksom',
    lineage: ['Nyingma'],
    view360: 'https://maps.app.goo.gl/ZTY1cwHUroh1DfcR9?g_st=ac',
    map: 'https://maps.app.goo.gl/1a2bC3d4E5fGh6i7',
    image: 'tashiding-monastery.jpg',
    blurb: `
          <h4>Overview</h4>
          <p>Tashiding sits on a hill between the <em>Rathong</em> and <em>Rangeet</em> rivers near Yuksom and is a major <em>Nyingma</em> center.</p>
          <h4>History</h4>
          <p>Founded in the 17th century by <strong>Ngadak Sempa Chempo</strong>, a disciple of Lhatsun Chenpo, Tashiding became renowned for its
          sacred <em>chortens</em> and blessings. The site is closely linked to the early royal history of Sikkim.</p>
          <h4>What to See</h4>
          <ul>
            <li><strong>Chorten Thongwa Rangdol</strong>—believed to purify the faithful who simply behold it.</li>
            <li>White chortens, prayer flags, and hillside views across forested valleys.</li>
          </ul>
          <h4>Festivals</h4>
          <p>The famed <strong>Bhumchu</strong> festival—opening of the sacred vase—traditionally draws thousands seeking divination
          and blessings for the year ahead.</p>
        `,
  },
  {
    name: 'Enchey Monastery',
    region: 'East Sikkim • Gangtok',
    lineage: ['Nyingma'],
    view360: 'https://maps.app.goo.gl/XxAW3Q7jEm6AiWRL6?g_st=ac',
    map: 'https://maps.app.goo.gl/dxF2j8Jr6t1yq3Xn7',
    image: 'enchey-monastery.jpeg',
    blurb: `
          <h4>Overview</h4>
          <p>Set on a gentle ridge above <strong>Pelling</strong>, Pemayangtse (meaning “Perfect Sublime Lotus”) is one of Sikkim’s oldest
          and most revered <em>Nyingma</em> monasteries.</p>
          <h4>History</h4>
          <p>Tradition links the foundation to <strong>Lhatsün Namkha Jikmé</strong> (Lhatsun Chenpo), a 17th‑century lama who played a key role
          in the consecration of Sikkim’s first Chogyal at nearby <em>Norbugang</em>. The present complex evolved through later
          additions and restorations after earthquakes.</p>
          <h4>What to See</h4>
          <ul>
            <li>The famed <strong>seven‑tiered wooden model</strong> of <em>Zangdok Palri</em> (Guru Rinpoche’s celestial abode), a masterpiece of
            monastic craftsmanship.</li>
            <li>Ancient murals, statues of Padmasambhava and lineage lamas, and a tranquil prayer hall.</li>
          </ul>
          <h4>Festivals</h4>
          <p>Masked <em>Cham</em> dances are performed during the Tibetan New Year period, drawing devotees from across West Sikkim.</p>
        `,
  },
  {
    name: 'Ralang Monastery',
    region: 'South Sikkim • Ravangla',
    lineage: ['Kagyu'],
    view360: 'https://maps.app.goo.gl/pJpfw5a6CTViyNgx5?g_st=ac',
    map: 'https://maps.app.goo.gl/wg1v7Vj2KQp8hG1b8',
    image: 'ralang-monastery.jpg',
    blurb: `
          <h4>Overview</h4>
          <p>Ralang (near <strong>Ravangla</strong>) is an important seat of the <em>Kagyu</em> tradition. The area includes the older complex
          and the newer, larger monastery.</p>
          <h4>History</h4>
          <p>Tradition associates the site with visits by the <strong>Karmapas</strong>. The newer monastery was built in recent decades to
          accommodate growing monastic and visitor activities.</p>
          <h4>What to See</h4>
          <ul>
            <li>Spacious prayer halls with elaborate thangka‑style murals and statues.</li>
            <li>Sunset views across South Sikkim’s hills and tea‑covered slopes.</li>
          </ul>
          <h4>Festivals</h4>
          <p><em>Kagyed</em> and <em>Pang Lhabsol</em> festivities feature energetic Cham dances accompanied by horns and drums.</p>
        `,
  },
  {
    name: 'Phodong Monastery',
    region: 'North Sikkim • Phodong',
    lineage: ['Kagyu'],
    view360: 'https://maps.app.goo.gl/chNWhLQHh8TLHjCg9?g_st=ac',
    map: 'https://maps.app.goo.gl/Jm3T2Kz9DgY8eL8n8',
    image: 'phodong-monastery.jpeg',
    blurb: `
          <h4>Overview</h4>
          <p>Phodong, in North Sikkim, is a prominent <em>Kagyu</em> monastery with a peaceful setting and vibrant mural art.</p>
          <h4>History</h4>
          <p>The monastery’s origins trace to the early 18th century under the patronage of the Sikkimese kings, with later
          rebuilding after earthquake damage.</p>
          <h4>What to See</h4>
          <ul>
            <li>Bright wall paintings, statues of Buddhas and Bodhisattvas, and an intimate assembly hall.</li>
            <li>Nearby hiking routes with views of the surrounding valleys and villages.</li>
          </ul>
          <h4>Festivals</h4>
          <p>Seasonal <em>Cham</em> dances enliven the courtyard with masked performers and ritual music.</p>
        `,
  }
];

// -----------------------------
// Helpers
// -----------------------------
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

// Generate SVG placeholder with monastery name
function placeholderSVG(title) {
  const t = encodeURIComponent(title);
  const svg = `<?xml version='1.0'?>\
        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1600\" height=\"1000\">\
          <defs>\
            <linearGradient id=\"g\" x1=\"0\" y=\"0\" x2=\"1\" y2=\"1\">\
              <stop offset=\"0%\" stop-color=\"#e76e3c\"/>\
              <stop offset=\"100%\" stop-color=\"#c73f3f\"/>\
            </linearGradient>\
          </defs>\
          <rect width=\"100%\" height=\"100%\" fill=\"#0e1320\"/>\
          <circle cx=\"350\" cy=\"700\" r=\"320\" fill=\"url(#g)\" opacity=\"0.85\"/>\
          <rect x=\"520\" y=\"520\" width=\"540\" height=\"200\" rx=\"22\" fill=\"#ffd166\" opacity=\".16\"/>\
          <text x=\"50%\" y=\"58%\" font-family=\"ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto\" font-size=\"72\" fill=\"#ffffff\" text-anchor=\"middle\">${t}</text>\
        </svg>`;
  return `url("data:image/svg+xml;utf8,${svg}")`;
}

// Favorites in localStorage
const FKEY = 'm360:favs';
const favs = new Set(JSON.parse(localStorage.getItem(FKEY) || '[]'));
const saveFavs = () => localStorage.setItem(FKEY, JSON.stringify([...favs]));

// Render cards
const grid = $('#grid');
const cardTpl = $('#cardTpl').content;

function render(list) {
  grid.innerHTML = '';
  list.forEach((m, idx) => {
    const node = document.importNode(cardTpl, true);
    const card = node.querySelector('.monk-card');
    card.dataset.name = m.name.toLowerCase();
    card.dataset.region = m.region.toLowerCase();
    card.dataset.lineage = m.lineage.join(',').toLowerCase();

    const media = node.querySelector('.media');
    media.style.backgroundImage = m.image ?
      `linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.65)), url(${m.image})` :
      `linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.65)), ${placeholderSVG(m.name)}`;
    media.style.backgroundSize = 'cover';
    media.style.backgroundPosition = 'center';

    const nm = node.querySelector('.nm');
    nm.textContent = m.name;
    node.querySelector('.muted').textContent = m.region;

    const cr = node.querySelector('.chip-row');
    m.lineage.forEach(l => {
      const span = document.createElement('span');
      span.className = 'chip';
      span.textContent = l;
      cr.appendChild(span);
    });

    const views = node.querySelector('[data-views]');
    views.href = m.view360; views.setAttribute('aria-label', `Open 360 for ${m.name}`);
    const map = node.querySelector('[data-map]');
    map.href = m.map;

    // More modal
    node.querySelector('[data-more]').addEventListener('click', () => openDetails(m));

    // Favorite
    const favBtn = node.querySelector('.fav');
    const id = m.name;
    const setVisual = () => favBtn.style.color = favs.has(id) ? 'var(--accent)' : '#fff';
    setVisual();
    favBtn.addEventListener('click', (e) => { e.stopPropagation(); favs.has(id) ? favs.delete(id) : favs.add(id); saveFavs(); setVisual(); });

    grid.appendChild(node);
  })
}

function openDetails(m) {
  const dlg = document.createElement('dialog');
  dlg.innerHTML = `
        <div class="modal-head">
          <strong>${m.name}</strong>
          <button class="btn ghost" data-close>Close</button>
        </div>
        <div class="modal-body">
          <p style="margin-top:0; color: var(--muted)">${m.region} • Lineage: ${m.lineage.join(', ')}</p>
          <p>${m.blurb}</p>
          <div class="actions">
            <a class="btn" target="_blank" rel="noopener" href="${m.view360}">Open 360°</a>
            <a class="btn ghost" target="_blank" rel="noopener" href="${m.map}">Open in Maps</a>
          </div>
        </div>`;
  document.body.appendChild(dlg);
  dlg.showModal();
  dlg.querySelector('[data-close]').addEventListener('click', () => { dlg.close(); dlg.remove(); });
  dlg.addEventListener('click', (e) => { if (e.target === dlg) { dlg.close(); dlg.remove(); } });
}

// Search & filter
$('#search').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  const all = $$('.monk-card', grid);
  all.forEach(card => {
    const hay = `${card.dataset.name} ${card.dataset.region} ${card.dataset.lineage}`;
    card.style.display = hay.includes(q) ? '' : 'none';
  })
});

// Favorites filter
$('#showFavs').addEventListener('click', () => {
  const list = MONASTERIES.filter(m => favs.has(m.name));
  render(list.length ? list : MONASTERIES);
});

// About modal
const aboutModal = $('#aboutModal');
$('#aboutBtn').addEventListener('click', () => aboutModal.showModal());
aboutModal.querySelector('[data-close]').addEventListener('click', () => aboutModal.close());

// Theme toggle (light/dark)
const themeBtn = $('#themeToggler');
const THEMES = { DARK: 'dark', LIGHT: 'light' };
const tKey = 'm360:theme';
function setTheme(t) { document.documentElement.dataset.theme = t; localStorage.setItem(tKey, t); }
function applyTheme() {
  const t = localStorage.getItem(tKey) || THEMES.DARK;
  setTheme(t);
  // optional: tweak variables when light
  if (t === THEMES.LIGHT) {
    document.documentElement.style.setProperty('--bg', '#f6f7fb');
    document.documentElement.style.setProperty('--panel', '#ffffff');
    document.documentElement.style.setProperty('--text', '#0e1320');
    document.documentElement.style.setProperty('--muted', '#4b5466');
  } else {
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--panel');
    document.documentElement.style.removeProperty('--text');
    document.documentElement.style.removeProperty('--muted');
  }
}
themeBtn.addEventListener('click', () => { const now = (localStorage.getItem(tKey) || THEMES.DARK) === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK; setTheme(now); applyTheme(); });

// Boot
render(MONASTERIES);
applyTheme();

// Accessibility helpers (keyboard focus outline only when tabbing)
function handleFirstTab(e) { if (e.key === 'Tab') { document.body.classList.add('user-is-tabbing'); window.removeEventListener('keydown', handleFirstTab); } }
window.addEventListener('keydown', handleFirstTab);
