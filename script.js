// ===================== DATA =====================
const stations = [
  {
    date: "17.–18. August 2026",
    title: "Familienurlaub mit Familie Lösch in Horn",
    intro: "Auftrag: einen Stadtjungen sanft an das niederösterreichische Flachland gewöhnen. Testgelände: Horn, mit Familie Lösch. Robsi hat mitprotokolliert.",
    photos: [
      { src: "assets/images/s1-1.jpg", cap: "Supermotiviert wurde das für dich noch ungewohnte Flachland gleich bei der ersten Reisepause begutachtet. <b>Eingewöhnung Stufe 1.</b>" },
      { src: "assets/images/s1-2.jpg", cap: "Zimmerinspektion durch Meisterkritiker und Chefinspektor Jan höchstpersönlich – sogar die Unterlagen wurden kontrolliert. <b>Das Pentagon im Waschbecken und die Bibeln im Schrank</b> deuteten stark auf Dämonenbefall hin. Punkteabzug." },
      { src: "assets/images/s1-3.jpg", cap: "Weiterreise zum Stausee, mit voller Begeisterung von beiden Seiten. Glaubt Robsi zumindest." },
      { src: "assets/images/s1-4.jpg", cap: "Spaß und Sport am See. Einfach... toll. <b>Robsi hätte hier applaudiert, hat aber keine Arme.</b>" }
    ],
    challenge: { type: "scratch", photo: "assets/images/s1-4.jpg", hint: "Rubbel das letzte Urlaubsfoto frei, um die nächste Erinnerung zu öffnen." }
  },
  {
    date: "Datum unbekannt, Beweislage eindeutig",
    title: "Irgendwelche Blödeleien dazwischen",
    intro: "In den Akten klafft eine Lücke. Was in dieser Zeit wirklich passiert ist, bleibt unklar – aber zwei Selfies als Beweismittel wurden sichergestellt.",
    photos: [
      { src: "assets/images/s2-1.jpg", cap: "Was danach passiert ist? Keine Ahnung. Aber Blödsinn war offenbar im Spiel – sonst gäbe es <b>dieses schöne Selfie</b> nicht." },
      { src: "assets/images/s2-2.jpg", cap: "Exhibit B. Ebenfalls Blödsinn. Ebenfalls schön." }
    ],
    challenge: { type: "puzzle", photo: "assets/images/s2-2.jpg", hint: "Setz das Selfie wieder zusammen, um die nächste Erinnerung freizuschalten." }
  },
  {
    date: "22. Dezember 2026",
    title: "Katzen lieben das heilige Göremobil",
    intro: "Eine spirituelle Begegnung zwischen Tier und Blech, dokumentiert für die Nachwelt.",
    photos: [
      { src: "assets/images/s3-1.jpg", cap: "Lilly und Molly (†, sehr vermisst) bewundern andächtig das <b>unglaublich megatolle und supergeile Göremobil</b>. Ein Moment, der einfach festgehalten werden musste." }
    ],
    challenge: { type: "scratch", photo: "assets/images/s3-1.jpg", hint: "Rubbel die Katzen frei, um weiterzublättern." }
  },
  {
    date: "3.–6. Jänner 2026",
    title: "Prag-Invasion mit der ganzen Bande",
    intro: "Mega-Start ins neue Jahr, gemeinsam mit Freunden im wunderschönen Prag: Sightseeing, fragwürdige Museumsbesuche und „coole“ Clubmomente. Robsi meint: hier muss das Bild einfach wirken.",
    photos: [
      { src: "assets/images/s4-1.jpg", cap: "Gesichtsausdrücke, die keiner Erklärung bedürfen." },
      { src: "assets/images/s4-2.jpg", cap: "Die ganze Bande, hoch über Prag. Sightseeing mit Stil." },
      { src: "assets/images/s4-3.jpg", cap: "Fragwürdiger Museumsbesuch? Nein – nur ehrfürchtiges Staunen vor sehr viel Stein." },
      { src: "assets/images/s4-4.jpg", cap: "Kurz kuscheln vorm Kirchenportal. Auch Gotik kann romantisch sein." },
      { src: "assets/images/s4-5.jpg", cap: "Karlsbrücke, Sonnenuntergang, große Gefühle." },
      { src: "assets/images/s4-6.jpg", cap: "Derselbe Moment, jetzt mit künstlerischem Anspruch. <b>Bearbeitung: nicht von Robsi.</b>" },
      { src: "assets/images/s4-7.jpg", cap: "„Cooler“ Clubbesuch, wortwörtlich: eine ganze Bar aus Eis." },
      { src: "assets/images/s4-8.jpg", cap: "Overall-Umhang-Look. Kein Preis der Welt war zu hoch für dieses Foto." }
    ],
    challenge: { type: "puzzle", photo: "assets/images/s4-8.jpg", hint: "Setz das Eisbar-Foto zusammen, um weiterzublättern." }
  },
  {
    date: "1. Februar 2026",
    title: "Feuerwehrball, die Dritte",
    intro: "Ahhhh, der Feuerwehrball. Auf ein Neues. Schön getanzt, sich nach der Aufregung bei der Polonaise wieder gefangen – und dabei, ihr Geizhälse, mal wieder gratis Eintritt plus Essen und Getränke erschnorrt. Aber immerhin: lustig und schön.",
    photos: [
      { src: "assets/images/s5-1.jpg", cap: "Schön getanzt bei der Polonaise – trotz der Aufregung vorher." },
      { src: "assets/images/s5-2.jpg", cap: "Zweite Runde, gleiche Anmut. Behauptet zumindest Robsi." },
      { src: "assets/images/s5-3.jpg", cap: "Der Beweis für den erschnorrten Gratis-Abend: Red Carpet, Bier, gute Laune." },
      { src: "assets/video/ball.mp4", video: true, cap: "Bewegtbild-Beweis der Polonaise, für alle, die es nicht glauben." }
    ],
    challenge: { type: "scratch", photo: "assets/images/s5-3.jpg", hint: "Rubbel das Red-Carpet-Foto frei, um weiterzublättern." }
  },
  {
    date: "13.–15. Februar",
    title: "Skiurlaub in Kranjska Gora",
    intro: "Nachdem meine Entwicklerin dich in eurem ersten gemeinsamen Jahr wieder zum Skifahren gebracht hat, habt ihr euch diesmal gleich auf einen Skiurlaub mit Freunden für ein Wochenende eingelassen... mutig. Aber es hat sich gelohnt. Angeblich wurden auch Fotos nur von euch beiden unter einem schönen Torbogen gemacht – meine Entwicklerin konnte mir diese aber aus irgendeinem Grund nicht zur Verfügung stellen. Verdächtig.",
    photos: [
      { src: "assets/images/s6-1.jpg", cap: "Die ganze Bande hoch über Kranjska Gora – Gondel, Gipfel, gute Laune." },
      { src: "assets/images/s6-2.jpg", cap: "Retro-Neon-Anzüge im Nebel. Geschmack ist bekanntlich Verhandlungssache, Stimmung war trotzdem top." }
    ],
    challenge: { type: "puzzle", photo: "assets/images/s6-2.jpg", hint: "Setz die Neon-Ski-Gang zusammen, um die letzte Erinnerung zu öffnen." }
  },
  {
    date: "18. Juli 2026",
    title: "Area53 Frühschoppen mit der Gitti",
    intro: "Von März bis Juli war es dann ruhig... kein einziges Foto in den Akten. Es war eine stressige Zeit und ab und zu für euch beide schwer, aber ihr habt das super gemeistert und werdet noch viel mehr zusammen bewältigen können.",
    photos: [
      { src: "assets/images/s7-1.jpg", cap: "Backstage bei Area53, mit der Gitti höchstpersönlich – Gipsarm hin oder her, der große Auftritt im Roten musste sein." }
    ],
    challenge: null // last memory → leads into final scratch reveal instead
  }
];

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
    if(midCallback) midCallback();
    showEl.classList.add('active', inClass);
    window.scrollTo({top:0, behavior:'instant'});
    setTimeout(() => showEl.classList.remove(inClass), 320);
  }, 300);
}

document.getElementById('btn-back').addEventListener('click', () => {
  flipNavigate('screen-chapter', 'screen-map', -1, renderMap);
});

// ===================== MAP (post-it list) =====================
function renderMap(){
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
}

// ===================== CHAPTER (photo page) =====================
function renderChapter(i){
  const st = stations[i];
  currentChapterIndex = i;

  document.getElementById('chapter-date').textContent = st.date;
  document.getElementById('chapter-title').textContent = st.title;
  document.getElementById('chapter-intro').textContent = st.intro;

  const gallery = document.getElementById('chapter-gallery');
  gallery.innerHTML = '';

  st.photos.forEach((p, idx) => {
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

  const btn = document.getElementById('btn-collect');
  btn.textContent = completed[i] ? '← zurück zur Übersicht' : (st.challenge ? 'Weiter zur Challenge →' : 'Weiter →');
}

document.getElementById('btn-collect').addEventListener('click', () => {
  const i = currentChapterIndex;
  if(i === null) return;

  if(completed[i]){
    flipNavigate('screen-chapter', 'screen-map', -1, renderMap);
    return;
  }

  if(stations[i].challenge){
    flipNavigate('screen-chapter', 'screen-challenge', 1, () => openChallenge(i));
  } else {
    flipNavigate('screen-chapter', 'screen-challenge', 1, () => openFinalChallenge());
  }
});

// ===================== CHALLENGE =====================
function openChallenge(i){
  const ch = stations[i].challenge;
  document.getElementById('challenge-title').textContent = 'Freischalt-Challenge';
  document.getElementById('challenge-hint').textContent = ch.hint;

  const stage = document.getElementById('challenge-stage');
  const btn = document.getElementById('btn-challenge-continue');
  btn.textContent = 'Nächste Erinnerung öffnen →';
  btn.style.display = 'none';
  stage.innerHTML = '';

  const onComplete = () => { btn.style.display = 'block'; launchConfetti(); };

  if(ch.type === 'scratch') buildScratch(ch.photo, stage, onComplete);
  else buildPuzzle(ch.photo, stage, onComplete);

  btn.onclick = () => {
    completed[i] = true;
    unlockedIndex = Math.max(unlockedIndex, i + 1);
    flipNavigate('screen-challenge', 'screen-map', -1, renderMap);
  };
}

function openFinalChallenge(){
  document.getElementById('challenge-title').textContent = 'Die letzte Überraschung';
  document.getElementById('challenge-hint').textContent = 'Rubbel frei, bevor der Brief kommt.';

  const stage = document.getElementById('challenge-stage');
  const btn = document.getElementById('btn-challenge-continue');
  btn.textContent = 'Brief lesen →';
  btn.style.display = 'none';
  stage.innerHTML = '';

  buildScratch('assets/images/s7-1.jpg', stage, () => { btn.style.display = 'block'; launchConfetti(); });

  btn.onclick = () => {
    completed[stations.length - 1] = true;
    flipNavigate('screen-challenge', 'screen-final', 1, () => launchConfetti());
  };
}

// ===================== SCRATCH CARD =====================
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

// ===================== SLIDING PUZZLE =====================
function buildPuzzle(photoSrc, container, onComplete){
  container.innerHTML = `
    <div class="puzzle-wrap" id="puzzle-wrap"></div>
    <p class="puzzle-hint">👆 Tippe ein Teil neben der Lücke an, um es zu verschieben</p>
    <p class="puzzle-solved-msg" id="puzzle-msg"></p>
  `;
  const wrap = document.getElementById('puzzle-wrap');
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
    const neighbors = getNeighbors(blank);
    if(!neighbors.includes(cellIdx)) return;
    [tiles[blank], tiles[cellIdx]] = [tiles[cellIdx], tiles[blank]];
    blank = cellIdx;
    render();
    if(tiles.every((v,idx) => v === idx)){
      document.getElementById('puzzle-msg').textContent = '✓ Gelöst!';
      onComplete();
    }
  }

  render();
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
