// ===================== DATA =====================
// The LAST photo in each chapter's `photos` array is never shown in the gallery.
// It stays hidden until the chapter's own challenge is solved.
const stations = [
  {
    date: "17.–18. August 2026",
    title: "Familienurlaub mit Familie Lösch in Horn",
    intro: "Die große Herausforderung: Einen Vollblutsteirer sanft an das niederösterreichische Flachland gewöhnen. Testgelände: Horn, mit Familie Lösch. Robsi hat mitprotokolliert.",
    photos: [
      { src: "assets/images/s1-1.jpg", cap: "Supermotiviert wurde das noch ungewohnte Flachland gleich bei der ersten Reisepause begutachtet." },
      { src: "assets/images/s1-2.jpg", cap: "Zimmerinspektion durch Meisterkritiker und Chefinspektor Moitzi höchstpersönlich – sogar die Unterlagen wurden kontrolliert. <b>Das Pentagon im Waschbecken und die Bibeln im Schrank</b> deuteten stark auf Dämonenbefall hin. Punkteabzug." },
      { src: "assets/images/s1-3.jpg", cap: "Weiterreise zum Stausee, mit voller Begeisterung von beiden Seiten..." },
      { src: "assets/images/s1-4.jpg", cap: "Spaß und Sport am See. Einfach... toll." }
    ],
    challenge: { type: "puzzle", hint: "Setz das letzte Foto zusammen, um es freizuschalten." }
  },
  {
    date: "Datum unbekannt (August - Jänner), Beweislage eindeutig",
    title: "Irgendwelche Blödeleien dazwischen",
    intro: "In den Akten klafft eine Lücke. Was in dieser Zeit wirklich passiert ist, bleibt unklar – aber zwei Selfies als Beweismittel wurden sichergestellt.",
    photos: [
      { src: "assets/images/s2-1.jpg", cap: "Aua?" },
      { src: "assets/images/s2-2.jpg", cap: "Exhibit B. Nur Blödsinn." }
    ],
    challenge: { type: "curtain", hint: "Zieh den Vorhang zur Seite, um das letzte Foto freizulegen." }
  },
  {
    date: "22. Dezember 2026",
    title: "Geheiligt sei das Göremobil",
    intro: "Eine spirituelle Begegnung zwischen Tier und Blech, dokumentiert für die Nachwelt.",
    photos: [
      { src: "assets/images/s3-1.jpg", cap: "Lilly und Molly (†, sehr vermisst) bewundern andächtig das <b>unglaublich megatolle und supergeile Göremobil</b>." }
    ],
    challenge: { type: "scratch", hint: "Rubbel die Katzen frei, um weiterzublättern." }
  },
  {
    date: "3.–6. Jänner 2026",
    title: "Prag-Invasion mit der ganzen Bande",
    intro: "Mega-Start ins neue Jahr, gemeinsam mit Freunden im wunderschönen Prag: Sightseeing, fragwürdige Museumsbesuche und „coole“ Clubmomente. Robsi meint: hier muss das Bild einfach wirken.",
    photos: [
      { src: "assets/images/s4-1.jpg", cap: "Gesichtsausdrücke, die keiner Erklärung bedürfen." },
      { src: "assets/images/s4-2.jpg", cap: "Die ganze Bande, hoch über Prag. Sightseeing mit Stil." },
      { src: "assets/images/s4-3.jpg", cap: "Einmal süß sein vor der Kirche. Amen..." },
      { src: "assets/images/s4-4.jpg", cap: "Süß was das?" },
      { src: "assets/images/s4-5.jpg", cap: "Karlsbrücke, Depeche Mode Cover nachmachen oder so hehe" },
      { src: "assets/images/s4-6.jpg", cap: "Is des richtig editiert? Kein Plan..." },
      { src: "assets/images/s4-7.jpg", cap: "Kalt aber unser Liebe zu Bier häkt uns warm. (Oder is as doch unsere Liebe?) ;)" },
      { src: "assets/images/s4-8.jpg", cap: "„Cooler“ Clubbesuch, wortwörtlich." }
    ],
    challenge: { type: "bubble", hint: "Zerplatze die Blasen, um das letzte Foto freizulegen." }
  },
  {
    date: "1. Februar 2026",
    title: "Feuerwehrball, die Dritte?",
    intro: "Ahhhh, der Feuerwehrball. Auf ein Neues. Schön getanzt, sich nach der Aufregung bei der Polonaise wieder gefangen – und dabei, ihr Geizhälse, mal wieder gratis Eintritt plus Essen und Getränke erschnorrt. Aber immerhin: lustig und schön.",
    photos: [
      { src: "assets/images/s5-1.jpg", cap: "Ein anmutiger Handkuss." },
      { src: "assets/images/s5-2.jpg", cap: "Da Rest woa a gonz ok..." },
      { src: "assets/video/ball.mp4", video: true, cap: "Und tantzt haben wir a ganz gut :)" },
      { src: "assets/images/s5-3.jpg", cap: "Da Beweis für den erschnorrten Gratis-Abend." }
    ],
    challenge: { type: "slider", hint: "Zieh den Regler auf, um das letzte Foto freizulegen." }
  },
  {
    date: "13.–15. Februar",
    title: "Skiurlaub in Kranjska Gora",
    intro: "Nachdem meine Entwicklerin dich in eurem ersten gemeinsamen Jahr wieder zum Skifahren gebracht hat, habt ihr euch diesmal gleich auf einen Skiurlaub mit Freunden für ein Wochenende eingelassen... mutig. Aber es hat sich gelohnt. Angeblich wurden auch Fotos nur von euch beiden unter einem schönen Torbogen gemacht – meine Entwicklerin konnte mir diese aber aus irgendeinem Grund nicht zur Verfügung stellen. Verdächtig.",
    photos: [
      { src: "assets/images/s6-1.jpg", cap: "Retro-Neon-Anzüge im Nebel. Geschmack is bekanntlich Verhandlungssache." },
      { src: "assets/images/s6-2.jpg", cap: "Hoch über den Bergen mit wer was wie viel Bier schon intus...." }
    ],
    challenge: {
      type: "quiz",
      question: "Was hat Lizi in diesem Urlaub fast das Leben gekostet?",
      options: [
        { text: "Ein tragischer Sturz im tiefen Schnee", correct: false  },
        { text: "Die pralle Sonne auf den Bergen Sloweniens und Italiens", correct: false },
        { text: "Jan's bestialische Raclette-Käse Anus Ausdünstungen ", correct: true }
      ],
      hint: "Beantworte die Frage richtig, um weiter zu machen."
    }
  },
  {
    date: "18. Juli 2026",
    title: "Area53 Frühschoppen mit der Gitti",
    intro: "Von März bis Juli war es dann ruhig... kein einziges Foto in den Akten. Es war eine stressige Zeit und ab und zu für euch beide schwer, aber ihr habt das super gemeistert und werdet noch viel mehr zusammen bewältigen können.",
    photos: [
      { src: "assets/images/s7-1.jpg", cap: "Backstage bei da Gitti höchstpersönlich. Wir san so premium hehe" }
    ],
    challenge: { type: "hearts", count: 16, final: true, hint: "Sammle 16 Herzen, um den Brief freizuschalten." }
  }
];

// which challenge types hide the chapter's last photo until solved
const HIDES_PHOTO = { puzzle:true, scratch:true, curtain:true, bubble:true, slider:true, quiz:false, hearts:false };

// ===================== STATE =====================
let unlockedIndex = 0;
const completed = new Array(stations.length).fill(false);
let currentChapterIndex = null;

// ===================== BASIC SCREEN SHOW (no animation) =====================
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0, behavior:'instant'});
}

// ===================== ALBUM COVER OPEN =====================
document.getElementById('btn-start').addEventListener('click', () => {
  const fade = document.getElementById('white-fade');
  fade.classList.add('show');
  setTimeout(() => {
    renderMap();
    showScreen('screen-map');
    requestAnimationFrame(() => fade.classList.remove('show'));
  }, 480);
});

document.getElementById('btn-restart').addEventListener('click', () => {
  unlockedIndex = 0;
  completed.fill(false);
  const fade = document.getElementById('white-fade');
  fade.classList.add('show');
  setTimeout(() => {
    showScreen('screen-landing');
    requestAnimationFrame(() => fade.classList.remove('show'));
  }, 480);
});

// ===================== PAGE FLIP NAVIGATION =====================
function flipNavigate(hideId, showId, direction, midCallback){
  const hideEl = document.getElementById(hideId);
  const showEl = document.getElementById(showId);
  const outClass = direction > 0 ? 'flip-out' : 'flip-out-back';
  const inClass = direction > 0 ? 'flip-in' : 'flip-in-back';

  hideEl.classList.add(outClass);
  setTimeout(() => {
    hideEl.classList.remove('active', outClass);
    showEl.classList.add('active', inClass);
    if(midCallback) midCallback();
    showEl.scrollTop = 0;
    window.scrollTo({top:0, behavior:'instant'});
    setTimeout(() => showEl.classList.remove(inClass), 320);
  }, 300);
}

document.getElementById('btn-back').addEventListener('click', () => {
  flipNavigate('screen-chapter', 'screen-map', -1, renderMap);
});

// ===================== MAP (post-it list) =====================
function renderMap(revealIndex){
  document.getElementById('progress-count').textContent = completed.filter(Boolean).length;
  document.getElementById('progress-total').textContent = stations.length;

  const container = document.getElementById('nodes-container');
  container.innerHTML = '';

  stations.forEach((st, i) => {
    const postit = document.createElement('div');
    const isLocked = i > unlockedIndex;
    const isDone = completed[i];

    postit.className = 'postit' + (isLocked ? ' locked' : '');

    postit.innerHTML = `
      ${isLocked ? '<span class="pt-lock">🔒</span>' : ''}
      ${isDone ? '<span class="pt-check">✓</span>' : ''}
      <div class="pt-title">${isLocked ? '???' : st.title}</div>
      <span class="pt-date">${isLocked ? 'noch verschlossen' : st.date}</span>
    `;

    postit.addEventListener('click', () => {
      if(isLocked){
        postit.classList.remove('shake'); void postit.offsetWidth; postit.classList.add('shake');
        return;
      }
      flipNavigate('screen-map', 'screen-chapter', 1, () => renderChapter(i));
    });

    container.appendChild(postit);
  });

  if(typeof revealIndex === 'number' && container.children[revealIndex]){
    const el = container.children[revealIndex];
    el.scrollIntoView({behavior:'smooth', block:'center'});
    setTimeout(() => {
      el.classList.add('just-unlocked');
      setTimeout(() => el.classList.remove('just-unlocked'), 900);
    }, 250);
  }
}

// ===================== CHAPTER (photo + challenge page) =====================
function renderChapter(i){
  const st = stations[i];
  currentChapterIndex = i;

  document.getElementById('chapter-date').textContent = st.date;
  document.getElementById('chapter-title').textContent = st.title;
  document.getElementById('chapter-intro').textContent = st.intro;

  const hidesPhoto = st.challenge && HIDES_PHOTO[st.challenge.type];
  const hiddenPhoto = hidesPhoto ? st.photos[st.photos.length - 1] : null;
  const visiblePhotos = (completed[i] || !hidesPhoto) ? st.photos : st.photos.slice(0, -1);

  const gallery = document.getElementById('chapter-gallery');
  gallery.innerHTML = '';

  visiblePhotos.forEach((p, idx) => {
    const block = document.createElement('div');
    block.className = 'memory-block ' + (idx % 2 === 0 ? 'tilt-l' : 'tilt-r');
    const mediaHtml = p.video
        ? `<video src="${p.src}" controls playsinline></video>`
        : `<img src="${p.src}" alt="" loading="lazy">`;
    block.innerHTML = `
      <div class="polaroid">
        <span class="tape left"></span><span class="tape right"></span>
        <div class="polaroid-photo-wrap">${mediaHtml}</div>
        <div class="polaroid-caption-space"><span>♥</span></div>
      </div>
      <div class="sticky-note">${p.cap}</div>
    `;
    gallery.appendChild(block);
  });

  const zone = document.getElementById('challenge-zone');
  const hintEl = document.getElementById('challenge-hint-text');
  const stage = document.getElementById('challenge-stage');
  const btn = document.getElementById('btn-collect');
  stage.innerHTML = '';
  zone.querySelectorAll('.challenge-note').forEach(el => el.remove());

  if(completed[i]){
    zone.style.display = 'none';
    btn.style.display = 'block';
    btn.textContent = '← zurück zur Übersicht';
    btn.onclick = () => flipNavigate('screen-chapter', 'screen-map', -1, () => renderMap());
    return;
  }

  const ch = st.challenge;
  if(!ch){
    zone.style.display = 'none';
    btn.style.display = 'block';
    btn.textContent = 'Weiter →';
    btn.onclick = () => flipNavigate('screen-chapter', 'screen-map', -1, () => renderMap());
    return;
  }

  zone.style.display = 'block';
  hintEl.textContent = ch.hint;
  btn.style.display = 'none';
  btn.textContent = ch.final ? 'Brief lesen →' : 'Ab zur nächsten Erinnerung →';

  const onComplete = () => { btn.style.display = 'block'; launchConfetti(); };

  switch(ch.type){
    case 'puzzle':  buildPuzzle(hiddenPhoto.src, stage, onComplete); break;
    case 'scratch': buildScratch(hiddenPhoto.src, stage, onComplete); break;
    case 'curtain': buildCurtain(hiddenPhoto.src, stage, onComplete); break;
    case 'bubble':  buildBubble(hiddenPhoto.src, stage, onComplete); break;
    case 'slider':  buildSlider(hiddenPhoto.src, stage, onComplete); break;
    case 'quiz':    buildQuiz(ch, stage, onComplete); break;
    case 'hearts':  buildHearts(ch.count || 16, stage, onComplete); break;
  }

  // caption for the hidden photo is shown right away, underneath the challenge
  // (only relevant for challenge types that actually hide a photo)
  if(hiddenPhoto){
    const noteBlock = document.createElement('div');
    noteBlock.className = 'memory-block tilt-r challenge-note';
    noteBlock.innerHTML = `<div class="sticky-note">${hiddenPhoto.cap}</div>`;
    stage.insertAdjacentElement('afterend', noteBlock);
  }

  btn.onclick = () => {
    completed[i] = true;
    if(ch.final){
      flipNavigate('screen-chapter', 'screen-final', 1, () => launchConfetti());
    } else {
      unlockedIndex = Math.max(unlockedIndex, i + 1);
      flipNavigate('screen-chapter', 'screen-map', -1, () => renderMap(i + 1));
    }
  };
}

// ===================== CHALLENGE: SCRATCH CARD =====================
function buildScratch(photoSrc, container, onComplete){
  container.innerHTML = `
    <div class="scratch-wrap">
      <img src="${photoSrc}" alt="">
      <canvas></canvas>
    </div>
    <p class="scratch-hint">✨ Mit dem Finger über das Bild rubbeln ✨</p>
    <p class="scratch-progress"><span id="scratch-pct">0%</span> freigerubbelt</p>
  `;
  const wrap = container.querySelector('.scratch-wrap');
  const canvas = wrap.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  let done = false;

  function paintCover(){
    canvas.width = wrap.clientWidth;
    canvas.height = wrap.clientHeight;
    ctx.globalCompositeOperation = 'source-over';
    const grad = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    grad.addColorStop(0,'#ff9fc0');
    grad.addColorStop(1,'#ffd23c');
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'rgba(255,255,255,.95)';
    ctx.font = "700 18px Fredoka, sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText('❤ RUBBEL LOS ❤', canvas.width/2, canvas.height/2);
    ctx.globalCompositeOperation = 'destination-out';
  }
  paintCover();

  const gridSize = 16;
  const cells = new Array(gridSize*gridSize).fill(false);
  let cleared = 0;

  function scratchAt(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI*2);
    ctx.fill();
    const gx = Math.floor(x/canvas.width*gridSize);
    const gy = Math.floor(y/canvas.height*gridSize);
    for(let dx=-1; dx<=1; dx++){
      for(let dy=-1; dy<=1; dy++){
        const nx=gx+dx, ny=gy+dy;
        if(nx>=0 && nx<gridSize && ny>=0 && ny<gridSize){
          const idx = ny*gridSize+nx;
          if(!cells[idx]){ cells[idx]=true; cleared++; }
        }
      }
    }
    const pct = Math.min(100, Math.round(cleared/(gridSize*gridSize)*100));
    const pctEl = document.getElementById('scratch-pct');
    if(pctEl) pctEl.textContent = pct + '%';
    if(pct >= 55 && !done){
      done = true;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      if(pctEl) pctEl.textContent = '100%';
      onComplete();
    }
  }

  function getPos(e){
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  let drawing = false;
  canvas.addEventListener('pointerdown', e => { drawing = true; const p=getPos(e); scratchAt(p.x,p.y); });
  canvas.addEventListener('pointermove', e => { if(drawing){ const p=getPos(e); scratchAt(p.x,p.y); } });
  window.addEventListener('pointerup', () => drawing = false);
}

// ===================== CHALLENGE: SLIDING PUZZLE =====================
function buildPuzzle(photoSrc, container, onComplete){
  container.innerHTML = `
    <div class="puzzle-wrap" id="puzzle-wrap"></div>
    <p class="puzzle-hint">👆 Tippe ein Teil neben der Lücke an, um es zu verschieben</p>
    <p class="puzzle-solved-msg" id="puzzle-msg"></p>
    <button class="skip-btn" id="skip-puzzle-btn">Challenge überspringen</button>
  `;
  const wrap = document.getElementById('puzzle-wrap');
  let solved = false;
  const size = 3;
  let tiles = [0,1,2,3,4,5,6,7,8];
  let blank = 8;

  function getNeighbors(idx){
    const r = Math.floor(idx/size), c = idx%size;
    const n = [];
    if(r>0) n.push(idx-size);
    if(r<size-1) n.push(idx+size);
    if(c>0) n.push(idx-1);
    if(c<size-1) n.push(idx+1);
    return n;
  }

  for(let i=0;i<150;i++){
    const neighbors = getNeighbors(blank);
    const swapWith = neighbors[Math.floor(Math.random()*neighbors.length)];
    [tiles[blank], tiles[swapWith]] = [tiles[swapWith], tiles[blank]];
    blank = swapWith;
  }

  function render(){
    wrap.innerHTML = '';
    tiles.forEach((tileId, cellIdx) => {
      const div = document.createElement('div');
      if(tileId === 8){
        div.className = 'puzzle-tile blank';
      } else {
        div.className = 'puzzle-tile';
        const col = tileId % size, row = Math.floor(tileId/size);
        div.style.backgroundImage = `url(${photoSrc})`;
        div.style.backgroundSize = `${size*100}% ${size*100}%`;
        div.style.backgroundPosition = `${col*50}% ${row*50}%`;
      }
      div.addEventListener('click', () => onTileClick(cellIdx));
      wrap.appendChild(div);
    });
  }

  function onTileClick(cellIdx){
    if(solved) return;
    const neighbors = getNeighbors(blank);
    if(!neighbors.includes(cellIdx)) return;
    [tiles[blank], tiles[cellIdx]] = [tiles[cellIdx], tiles[blank]];
    blank = cellIdx;
    render();
    if(tiles.every((v,idx) => v === idx)) finish();
  }

  function finish(){
    if(solved) return;
    solved = true;
    document.getElementById('puzzle-msg').textContent = '✓ Gelöst!';
    const skipBtn = document.getElementById('skip-puzzle-btn');
    if(skipBtn) skipBtn.remove();
    onComplete();
  }

  document.getElementById('skip-puzzle-btn').addEventListener('click', () => {
    tiles = tiles.map((_, idx) => idx);
    blank = 8;
    render();
    document.getElementById('puzzle-msg').textContent = 'Übersprungen – hier ist dein Bild:';
    finish();
  });

  render();
}

// ===================== CHALLENGE: CURTAIN REVEAL =====================
function buildCurtain(photoSrc, container, onComplete){
  container.innerHTML = `
    <div class="curtain-wrap">
      <img src="${photoSrc}" alt="">
      <div class="curtain-panel left"></div>
      <div class="curtain-panel right"></div>
      <div class="curtain-handle">↔</div>
    </div>
    <p class="scratch-hint">✨ Zieh den Vorhang mit dem Finger zur Seite ✨</p>
  `;
  const wrap = container.querySelector('.curtain-wrap');
  const left = wrap.querySelector('.curtain-panel.left');
  const right = wrap.querySelector('.curtain-panel.right');
  const handle = wrap.querySelector('.curtain-handle');
  let done = false;
  let dragging = false;
  let startX = 0;

  function setOpen(pct){
    pct = Math.max(0, Math.min(100, pct));
    left.style.transform = `translateX(${-pct}%)`;
    right.style.transform = `translateX(${pct}%)`;
    handle.style.opacity = 1 - pct/60;
  }

  function finish(){
    if(done) return;
    done = true;
    setOpen(100);
    onComplete();
  }

  wrap.addEventListener('pointerdown', e => {
    if(done) return;
    dragging = true;
    startX = e.clientX;
  });
  window.addEventListener('pointermove', e => {
    if(!dragging || done) return;
    const dx = e.clientX - startX;
    const pct = Math.abs(dx) / (wrap.clientWidth/2) * 100;
    setOpen(pct);
    if(pct >= 78) finish();
  });
  window.addEventListener('pointerup', () => {
    if(dragging && !done) setOpen(0);
    dragging = false;
  });
}

// ===================== CHALLENGE: BUBBLE POP =====================
function buildBubble(photoSrc, container, onComplete){
  container.innerHTML = `
    <div class="bubble-wrap">
      <img src="${photoSrc}" alt="">
      <div class="bubble-grid" id="bubble-grid"></div>
    </div>
    <p class="scratch-hint">✨ Zerplatze die Blasen mit dem Finger ✨</p>
  `;
  const grid = container.querySelector('#bubble-grid');
  const cols = 4, rows = 3;
  const total = cols*rows;
  let popped = 0;
  let done = false;
  const bubbleEls = [];

  for(let idx=0; idx<total; idx++){
    const b = document.createElement('div');
    b.className = 'bubble';
    b.textContent = ['💗','⭐','✨','💫'][idx % 4];
    b.addEventListener('pointerdown', () => popOne(idx));
    grid.appendChild(b);
    bubbleEls.push(b);
  }

  function popOne(idx){
    if(done || bubbleEls[idx].classList.contains('popped')) return;
    bubbleEls[idx].classList.add('popped');
    popped++;
    if(popped/total >= 0.7 && !done) finish();
  }

  function finish(){
    done = true;
    bubbleEls.forEach(b => b.classList.add('popped'));
    onComplete();
  }
}

// ===================== CHALLENGE: SLIDER REVEAL =====================
function buildSlider(photoSrc, container, onComplete){
  container.innerHTML = `
    <div class="slider-wrap">
      <img src="${photoSrc}" alt="">
      <div class="slider-cover" id="slider-cover">
        <div class="slider-handle" id="slider-handle">➜</div>
      </div>
    </div>
    <p class="scratch-hint">✨ Zieh den Regler mit dem Finger nach rechts ✨</p>
  `;
  const wrap = container.querySelector('.slider-wrap');
  const cover = container.querySelector('#slider-cover');
  const handle = container.querySelector('#slider-handle');
  let done = false;
  let dragging = false;

  function setWidth(px){
    const max = wrap.clientWidth;
    px = Math.max(0, Math.min(max, px));
    cover.style.width = px + 'px';
    if(px <= max*0.15 && !done){
      done = true;
      cover.style.width = '0px';
      onComplete();
    }
  }

  function xFromEvent(e){
    const rect = wrap.getBoundingClientRect();
    return e.clientX - rect.left;
  }

  handle.addEventListener('pointerdown', () => { if(!done) dragging = true; });
  window.addEventListener('pointermove', e => {
    if(!dragging || done) return;
    setWidth(xFromEvent(e));
  });
  window.addEventListener('pointerup', () => dragging = false);

  setWidth(wrap.clientWidth);
}

// ===================== CHALLENGE: QUIZ =====================
function buildQuiz(ch, container, onComplete){
  container.innerHTML = `
    <p class="quiz-question">${ch.question}</p>
    <div class="quiz-options" id="quiz-options"></div>
    <p class="quiz-feedback" id="quiz-feedback"></p>
  `;
  const optWrap = container.querySelector('#quiz-options');
  const feedback = container.querySelector('#quiz-feedback');
  let answered = false;

  ch.options.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'quiz-btn';
    b.textContent = opt.text;
    b.addEventListener('click', () => {
      if(answered) return;
      if(opt.correct){
        answered = true;
        b.classList.add('correct');
        feedback.textContent = '✓ Richtig!';
        feedback.className = 'quiz-feedback correct';
        onComplete();
      } else {
        b.classList.remove('wrong');
        void b.offsetWidth;
        b.classList.add('wrong');
        feedback.textContent = 'Nicht ganz – versuch\'s nochmal!';
        feedback.className = 'quiz-feedback wrong';
      }
    });
    optWrap.appendChild(b);
  });
}

// ===================== CHALLENGE: HEARTS TAP (final) =====================
function buildHearts(count, container, onComplete){
  container.innerHTML = `
    <div class="hearts-wrap">
      <button class="hearts-btn" id="hearts-btn">♥</button>
      <p class="hearts-count"><span id="hearts-num">0</span> / ${count} Herzen</p>
    </div>
  `;
  let n = 0;
  let done = false;
  const btn = container.querySelector('#hearts-btn');
  const numEl = container.querySelector('#hearts-num');

  btn.addEventListener('click', () => {
    if(done) return;
    n++;
    numEl.textContent = n;
    spawnFloatingHeart(btn);
    btn.animate([{transform:'scale(1)'},{transform:'scale(1.25)'},{transform:'scale(1)'}], {duration:220});
    if(n >= count){
      done = true;
      onComplete();
    }
  });
}

function spawnFloatingHeart(btn){
  const rect = btn.getBoundingClientRect();
  const heart = document.createElement('div');
  heart.textContent = '♥';
  heart.style.position = 'fixed';
  heart.style.left = (rect.left + rect.width/2 - 10) + 'px';
  heart.style.top = (rect.top) + 'px';
  heart.style.fontSize = '20px';
  heart.style.color = ['#ff2d78','#ffc93c','#ff4d5e'][Math.floor(Math.random()*3)];
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = 60;
  document.body.appendChild(heart);
  const drift = (Math.random()-0.5)*80;
  heart.animate([
    { transform:'translate(0,0)', opacity:1 },
    { transform:`translate(${drift}px,-120px)`, opacity:0 }
  ], { duration:800, easing:'ease-out' }).onfinish = () => heart.remove();
}

// ===================== CONFETTI =====================
function launchConfetti(){
  const layer = document.getElementById('confetti-layer');
  const colors = ['#ff2d78','#ffc93c','#ff4d5e','#fff'];
  for(let i=0;i<60;i++){
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const size = 6 + Math.random()*8;
    piece.style.width = size+'px';
    piece.style.height = (size*0.4)+'px';
    piece.style.left = Math.random()*100+'vw';
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    const startRot = Math.random()*360;
    layer.appendChild(piece);
    const duration = 2200 + Math.random()*1800;
    const drift = (Math.random()-0.5)*200;
    piece.animate([
      { transform: `rotate(${startRot}deg) translate(0,0)`, opacity:1 },
      { transform: `rotate(${startRot+540}deg) translate(${drift}px, 100vh)`, opacity:0.9 }
    ], { duration, easing:'ease-in', fill:'forwards' });
    setTimeout(() => piece.remove(), duration+200);
  }
}

// init
showScreen('screen-landing');