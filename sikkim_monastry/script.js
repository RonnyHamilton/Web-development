// Hamburger dropdown toggle for mobile nav
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navDropdown = document.getElementById('navDropdown');
  if (navToggle && navDropdown) {
    navToggle.addEventListener('click', function() {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navDropdown.classList.toggle('open');
    });
  }
});
// Hamburger dropdown toggle for mobile nav
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navDropdown = document.getElementById('navDropdown');
  if (navToggle && navDropdown) {
    navToggle.addEventListener('click', function() {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navDropdown.classList.toggle('open');
    });
  }
});
// Hamburger menu toggle for mobile nav
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('open');
    });
  }
});
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
  map: 'https://maps.app.goo.gl/s6wFBCbeTY4oUUoF6',
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
  map: 'https://maps.app.goo.gl/eLZFGEDtW8jFJ7ne7',
    image: 'pemayangtse-monastery.jpeg',
    blurb: ``,
  },
  {
    name: 'Tashiding Monastery',
    region: 'West Sikkim • Near Yuksom',
    lineage: ['Nyingma'],
    view360: 'https://maps.app.goo.gl/ZTY1cwHUroh1DfcR9?g_st=ac',
  map: 'https://maps.app.goo.gl/AyfYGsXqP1YP4CNf7?g_st=aw',
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
  map: 'https://maps.app.goo.gl/FmG63j33B1ePmf629',
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
  map: 'https://maps.app.goo.gl/CTuSX3ovT6hXkssh9',
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
          <div style="margin-top:1.2rem;">
            <div class="narration-wrapper">
              <button id="narrativePlayBtn" class="btn ghost" style="border-color:var(--accent);color:var(--accent);">🔊 Listen</button>
              <div class="narration-controls" style="display:none; gap:0.6rem;">
                <button id="narrativePauseBtn" class="btn ghost" style="border-color:#ffd166;color:#ffd166;">⏸️ Pause</button>
                <button id="narrativeStopBtn" class="btn ghost" style="border-color:#c73f3f;color:#c73f3f;">⏹️ Stop</button>
              </div>
            </div>
          </div>
          <div class="actions" style="margin-top:1.2rem;">
            <a class="btn" target="_blank" rel="noopener" href="${m.view360}">Open 360°</a>
            <a class="btn ghost" target="_blank" rel="noopener" href="${m.map}">Open in Maps</a>
          </div>
        </div>`;
  document.body.appendChild(dlg);
  dlg.showModal();
  dlg.querySelector('[data-close]').addEventListener('click', () => {
    dlg.close();
    dlg.remove();
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
  });
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) {
      dlg.close();
      dlg.remove();
      if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
    }
  });
        
        // TTS controls: Play, Pause, Stop (English only)
        let utterance = null;
        const synth = window.speechSynthesis;
        const playBtn = dlg.querySelector('#narrativePlayBtn');
        const pauseBtn = dlg.querySelector('#narrativePauseBtn');
        const stopBtn = dlg.querySelector('#narrativeStopBtn');
        playBtn.addEventListener('click', () => {
          if (synth.speaking) {
            // Already speaking, resume if paused
            if (synth.paused) synth.resume();
            return;
          }
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = m.blurb;
          let text = tempDiv.textContent.trim();
          utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'en';
          // Use best English voice
          let voices = synth.getVoices();
          let enVoice = voices.find(v => v.lang.startsWith('en'));
          if (enVoice) utterance.voice = enVoice;
          synth.speak(utterance);
        });
        pauseBtn.addEventListener('click', () => {
          if (synth.speaking) {
            if (synth.paused) {
              synth.resume();
              pauseBtn.textContent = '⏸️ Pause';
            } else {
              synth.pause();
              pauseBtn.textContent = '▶️ Resume';
            }
          }
        });
        // Listen for pause/resume events to update button text
        window.speechSynthesis.addEventListener('pause', () => {
          pauseBtn.textContent = '▶️ Resume';
        });
        window.speechSynthesis.addEventListener('resume', () => {
          pauseBtn.textContent = '⏸️ Pause';
        });
        stopBtn.addEventListener('click', () => {
          if (synth.speaking) synth.cancel();
        });
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
// Boot
render(MONASTERIES);

// Narration functionality
function setupNarration(playBtn, text) {
  const controls = document.createElement('div');
  controls.className = 'narration-controls';
  controls.style.display = 'none';
  
  const pauseBtn = document.createElement('button');
  pauseBtn.className = 'btn ghost';
  pauseBtn.textContent = '⏸️ Pause';
  
  const stopBtn = document.createElement('button');
  stopBtn.className = 'btn ghost';
  stopBtn.style.borderColor = '#c73f3f';
  stopBtn.style.color = '#c73f3f';
  stopBtn.textContent = '⏹️ Stop';
  
  controls.appendChild(pauseBtn);
  controls.appendChild(stopBtn);
  playBtn.parentNode.insertBefore(controls, playBtn.nextSibling);

  let isPlaying = false;
  let utterance = null;

  playBtn.addEventListener('click', () => {
    if (!window.speechSynthesis) {
      alert('Speech synthesis not supported in your browser.');
      return;
    }

    if (isPlaying && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      return;
    }

    // Stop any existing narration
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en';

    // Use best English voice
    let voices = window.speechSynthesis.getVoices();
    let enVoice = voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;

    // Show controls when playing starts
    utterance.onstart = () => {
      isPlaying = true;
      controls.style.display = 'flex';
      playBtn.style.display = 'none';
    };

    // Hide controls when finished
    utterance.onend = () => {
      isPlaying = false;
      controls.style.display = 'none';
      playBtn.style.display = 'inline-flex';
    };

    window.speechSynthesis.speak(utterance);
  });

  pauseBtn.addEventListener('click', () => {
    if (window.speechSynthesis.speaking) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        pauseBtn.textContent = '⏸️ Pause';
      } else {
        window.speechSynthesis.pause();
        pauseBtn.textContent = '▶️ Resume';
      }
    }
  });

  stopBtn.addEventListener('click', () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      controls.style.display = 'none';
      playBtn.style.display = 'inline-flex';
    }
  });
}

// Initialize narration for all manuscript buttons
document.querySelectorAll('.manuscript-narrate').forEach(btn => {
  setupNarration(btn, btn.dataset.text);
});

// Accessibility helpers (keyboard focus outline only when tabbing)
function handleFirstTab(e) { if (e.key === 'Tab') { document.body.classList.add('user-is-tabbing'); window.removeEventListener('keydown', handleFirstTab); } }
window.addEventListener('keydown', handleFirstTab);
// Text-to-Speech functionality with voice selection, language detection, and preferences storage
window.addEventListener('load', () => {
  const synth = window.speechSynthesis;
  const speakBtn = document.getElementById('speakBtn');
  const voiceSelect = document.getElementById('voiceSelect');
  const historyText = document.getElementById('historyText');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });

    // Try to auto-select saved voice or user's browser language
    const savedIndex = localStorage.getItem('preferredVoice');
    if (savedIndex !== null && voices[savedIndex]) {
      voiceSelect.value = savedIndex;
    } else {
      const userLang = navigator.language || 'en-US';
      const defaultVoice = voices.find(v => v.lang.startsWith(userLang));
      if (defaultVoice) {
        voiceSelect.value = voices.indexOf(defaultVoice);
      }
    }
  }

  // Initial population
  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakBtn.addEventListener('click', () => {
    if (!synth) {
      alert('Speech synthesis not supported in this browser.');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(historyText.textContent);
    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      localStorage.setItem('preferredVoice', voiceSelect.value); // Save selection
    }
    synth.speak(utterance);
  });

  // Handle manuscript narration buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('manuscript-narrate')) {
      const text = e.target.dataset.text;
      if (!synth) {
        alert('Speech synthesis not supported in this browser.');
        return;
      }
      
      // Stop any current narration
      if (synth.speaking) {
        synth.cancel();
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en';
      // Use best English voice
      let voices = synth.getVoices();
      let enVoice = voices.find(v => v.lang.startsWith('en'));
      if (enVoice) utterance.voice = enVoice;
      
      // Update button text while speaking
      const btn = e.target;
      const originalText = btn.textContent;
      btn.textContent = '⏸️ Pause';
      
      utterance.onend = () => {
        btn.textContent = originalText;
      };
      
      utterance.onpause = () => {
        btn.textContent = '▶️ Resume';
      };
      
      utterance.onresume = () => {
        btn.textContent = '⏸️ Pause';
      };
      
      btn.onclick = () => {
        if (synth.speaking && !synth.paused) {
          synth.pause();
        } else if (synth.paused) {
          synth.resume();
        }
      };
      
      synth.speak(utterance);
    }
  });
});
