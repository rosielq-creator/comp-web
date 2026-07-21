const page = document.body.dataset.page;
const isProfile = page === "profile";

const translations = {
  en: {
    tagline: "Next-Generation AI Talents",
    home: "Home",
    talents: "Talents",
    homeLineOne: "The new faces",
    homeLineTwo: "of imagination.",
    homeManifesto: "An independent roster of AI talents built for fashion, culture and the next visual era.",
    meetTalents: "Meet the talents",
    account: "Account",
    password: "Password",
    enter: "Enter GTAI",
    soundNote: "Sound experience begins after entry",
    invalidLogin: "Account or password is incorrect.",
    marioLine: "Soft-luxury city life through a photographer's eye.",
    noahLine: "Contemporary style with an understated cinematic edge.",
    ooonaLine: "Soft-focus beauty, wellness and a playful digital spirit.",
    placeholderLine: "Official visual pending approval.",
    viewProfile: "View Profile",
    comingSoon: "Profile in progress",
    marioRole: "AI Talent · Photographer · Lifestyle Creator",
    discover: "Discover profile",
    introduction: "Introduction",
    marioHeadline: "A life in motion,<br><em>framed with intention.</em>",
    marioBio: "Mario is a Chinese lifestyle creator and independent photographer. His world moves between city streets, sport, travel and the quiet details of everyday life—always warm, clean and naturally composed.",
    base: "Base",
    height: "Height",
    focus: "Focus",
    platforms: "Platforms",
    socialData: "Social data",
    signalHeadline: "Audience signal,<br><em>made legible.</em>",
    sampleNote: "Prototype data — not live metrics",
    followers: "Followers",
    engagement: "Engagement",
    audience: "Top audience",
    growth: "90D growth",
    pendingSync: "Pending sync",
    selectedWork: "Selected work",
    portfolioHeadline: "Selected frames<br><em>& collaborations.</em>",
    booking: "Booking inquiry",
    workTogether: "Let's build<br><em>what comes next.</em>",
    inquiryCopy: "Tell us about your campaign, timeline and intended collaboration. This prototype simulates submission only.",
    contactName: "Contact name",
    company: "Company / Brand",
    collaborationType: "Collaboration type",
    budget: "Budget range",
    timeline: "Timeline",
    briefLink: "Cloud brief link",
    projectBrief: "Project brief",
    consent: "By submitting, you agree that your information may be used for business contact.",
    sendInquiry: "Send inquiry",
    inquirySent: "Prototype received. No real message was sent."
  },
  zh: {
    tagline: "新世代 AI 藝人",
    home: "首頁",
    talents: "藝人",
    homeLineOne: "想像力的",
    homeLineTwo: "全新面孔。",
    homeManifesto: "一組面向時尚、文化與下一個視覺時代的獨立 AI 藝人陣容。",
    meetTalents: "探索藝人陣容",
    account: "帳號",
    password: "密碼",
    enter: "進入 GTAI",
    soundNote: "進入後啟動有聲體驗",
    invalidLogin: "帳號或密碼不正確。",
    marioLine: "以攝影師視角記錄輕奢城市生活。",
    noahLine: "低調電影感中的當代時尚表達。",
    ooonaLine: "柔焦美學、健康生活與俏皮數位氣質。",
    placeholderLine: "正式視覺仍待確認。",
    viewProfile: "查看檔案",
    comingSoon: "檔案製作中",
    marioRole: "AI 藝人 · 攝影師 · 生活風格創作者",
    discover: "探索藝人檔案",
    introduction: "個人簡介",
    marioHeadline: "生活持續流動，<br><em>每一幕都有意義。</em>",
    marioBio: "Mario 是中國生活風格創作者與獨立攝影師。他的世界穿梭於城市、運動、旅行與日常細節之間；畫面始終溫暖、乾淨而自然。",
    base: "常駐地",
    height: "身高",
    focus: "內容領域",
    platforms: "平台",
    socialData: "社交數據",
    signalHeadline: "讓受眾訊號，<br><em>變得清晰可讀。</em>",
    sampleNote: "原型資料 — 非即時數據",
    followers: "粉絲數",
    engagement: "互動率",
    audience: "主要受眾",
    growth: "90 日增長",
    pendingSync: "等待同步",
    selectedWork: "精選作品",
    portfolioHeadline: "精選影像<br><em>與合作項目。</em>",
    booking: "商務詢盤",
    workTogether: "一起創造<br><em>下一個可能。</em>",
    inquiryCopy: "告訴我們你的企劃、時程與合作方式。本原型僅模擬提交流程。",
    contactName: "聯絡人姓名",
    company: "公司／品牌",
    collaborationType: "合作類型",
    budget: "預算範圍",
    timeline: "合作時程",
    briefLink: "雲端 Brief 連結",
    projectBrief: "項目說明",
    consent: "提交即代表你同意資料可用於商務聯絡。",
    sendInquiry: "發送詢盤",
    inquirySent: "原型已接收，未實際發送訊息。"
  }
};

const richTextKeys = new Set(["marioHeadline", "signalHeadline", "portfolioHeadline", "workTogether"]);
let language = localStorage.getItem("gtai-language") || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");

function applyLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[language][key];
    if (!value) return;
    if (richTextKeys.has(key)) element.innerHTML = value;
    else element.textContent = value;
  });
  const languageButton = document.querySelector("#langToggle");
  if (languageButton) languageButton.textContent = language === "en" ? "繁" : "EN";
  localStorage.setItem("gtai-language", language);
  updateSoundUI();
}

document.querySelector("#langToggle")?.addEventListener("click", () => {
  language = language === "en" ? "zh" : "en";
  applyLanguage();
});

/* Original procedural ambient loops for the prototype. */
const soundTracks = [
  { name: "CRYSTAL STATIC", notes: [65.41, 98, 130.81], speed: .035 },
  { name: "WHITE SIGNAL", notes: [73.42, 110, 146.83], speed: .028 },
  { name: "GLASS MEMORY", notes: [55, 82.41, 123.47], speed: .042 }
];
let audioContext;
let masterGain;
let soundNodes = [];
let soundOn = sessionStorage.getItem("gtai-sound") !== "off";
let trackIndex = Number(sessionStorage.getItem("gtai-track"));
if (!Number.isInteger(trackIndex) || trackIndex < 0 || trackIndex >= soundTracks.length) {
  trackIndex = Math.floor(Math.random() * soundTracks.length);
  sessionStorage.setItem("gtai-track", String(trackIndex));
}

function startAmbient() {
  if (!soundOn) return;
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioContext.createGain();
    masterGain.gain.value = 0.026;
    masterGain.connect(audioContext.destination);
    const track = soundTracks[trackIndex];
    track.notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      const lfo = audioContext.createOscillator();
      const lfoGain = audioContext.createGain();
      oscillator.type = index === 0 ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      gain.gain.value = index === 0 ? .42 : .18;
      filter.type = "lowpass";
      filter.frequency.value = 650 + index * 260;
      lfo.frequency.value = track.speed * (index + 1);
      lfoGain.gain.value = 3 + index * 2;
      lfo.connect(lfoGain).connect(oscillator.detune);
      oscillator.connect(filter).connect(gain).connect(masterGain);
      oscillator.start();
      lfo.start();
      soundNodes.push(oscillator, gain, filter, lfo, lfoGain);
    });
  }
  audioContext.resume();
  if (masterGain) masterGain.gain.setTargetAtTime(.026, audioContext.currentTime, .45);
  updateSoundUI();
}

function stopAmbient() {
  if (masterGain && audioContext) masterGain.gain.setTargetAtTime(0, audioContext.currentTime, .18);
  updateSoundUI();
}

function updateSoundUI() {
  const button = document.querySelector("#soundToggle");
  const label = document.querySelector("#soundLabel");
  if (!button || !label) return;
  button.classList.toggle("is-muted", !soundOn);
  button.setAttribute("aria-label", soundOn ? "Mute sound" : "Play sound");
  label.textContent = soundOn ? "SOUND ON" : "SOUND OFF";
  const trackLabel = document.querySelector("#trackLabel");
  if (trackLabel) trackLabel.textContent = `TRACK 0${trackIndex + 1} / ${soundTracks[trackIndex].name}`;
}

document.querySelector("#soundToggle")?.addEventListener("click", () => {
  soundOn = !soundOn;
  sessionStorage.setItem("gtai-sound", soundOn ? "on" : "off");
  if (soundOn) startAmbient(); else stopAmbient();
});

/* Prototype gate. This is intentionally client-side and not production security. */
const gate = document.querySelector("#gate");
const siteShell = document.querySelector("#siteShell");
const unlocked = sessionStorage.getItem("gtai-preview") === "unlocked";
let crystalStarted = false;

function revealSite() {
  if (!gate || !siteShell) return;
  gate.classList.add("is-leaving");
  siteShell.removeAttribute("inert");
  startAmbient();
  scheduleCrystal();
  window.setTimeout(() => gate.remove(), 950);
}

if (page === "home") {
  if (unlocked) revealSite();
  document.querySelector("#gateForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const account = document.querySelector("#account").value.trim();
    const password = document.querySelector("#password").value;
    if (account.toUpperCase() === "GTAI" && password === "GTAI2026!") {
      sessionStorage.setItem("gtai-preview", "unlocked");
      revealSite();
    } else {
      const error = document.querySelector("#gateError");
      error.textContent = translations[language].invalidLogin;
      document.querySelector("#password").select();
    }
  });
} else if (!unlocked) {
  window.location.replace("index.html");
} else if (soundOn) {
  const resumeOnce = () => { startAmbient(); document.removeEventListener("pointerdown", resumeOnce); };
  document.addEventListener("pointerdown", resumeOnce, { once: true });
}

/* Magazine page carousel. */
const panels = [...document.querySelectorAll(".talent-panel")];
let currentPanel = 0;
let changing = false;

function hydratePanel(panel) {
  panel?.querySelectorAll("img[data-src]").forEach((image) => {
    image.src = image.dataset.src;
    image.removeAttribute("data-src");
  });
}

const homeExperience = document.querySelector("#homeExperience");
const talentStage = document.querySelector("#talentStage");
const homeNav = document.querySelector("#homeNav");
const talentsNav = document.querySelector("#talentsNav");

function showView(view) {
  const showingTalents = view === "talents";
  homeExperience?.classList.toggle("is-hidden", showingTalents);
  talentStage?.classList.toggle("is-visible", showingTalents);
  homeExperience?.setAttribute("aria-hidden", String(showingTalents));
  talentStage?.setAttribute("aria-hidden", String(!showingTalents));
  if (showingTalents) {
    talentStage?.removeAttribute("inert");
    hydratePanel(panels[currentPanel]);
    window.setTimeout(() => hydratePanel(panels[(currentPanel + 1) % panels.length]), 500);
  } else {
    talentStage?.setAttribute("inert", "");
  }
  homeNav?.classList.toggle("is-active", !showingTalents);
  talentsNav?.classList.toggle("is-active", showingTalents);
}

document.querySelector("#rosterEntry")?.addEventListener("click", () => showView("talents"));
homeNav?.addEventListener("click", () => showView("home"));
talentsNav?.addEventListener("click", () => showView("talents"));

function showPanel(nextIndex, direction) {
  if (!panels.length || changing || nextIndex === currentPanel) return;
  changing = true;
  const oldPanel = panels[currentPanel];
  const nextPanel = panels[nextIndex];
  hydratePanel(nextPanel);
  oldPanel.classList.add(direction > 0 ? "is-exiting-next" : "is-exiting-prev");
  oldPanel.classList.remove("is-active");
  oldPanel.setAttribute("aria-hidden", "true");
  nextPanel.classList.add("is-active");
  nextPanel.removeAttribute("aria-hidden");
  document.querySelector("#currentNumber").textContent = String(nextIndex + 1).padStart(2, "0");
  window.setTimeout(() => {
    oldPanel.classList.remove("is-exiting-next", "is-exiting-prev");
    currentPanel = nextIndex;
    changing = false;
    window.setTimeout(() => hydratePanel(panels[(currentPanel + direction + panels.length) % panels.length]), 250);
  }, 540);
}

document.querySelector("#nextTalent")?.addEventListener("click", () => showPanel((currentPanel + 1) % panels.length, 1));
document.querySelector("#prevTalent")?.addEventListener("click", () => showPanel((currentPanel - 1 + panels.length) % panels.length, -1));
if (panels.length) {
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") showPanel((currentPanel + 1) % panels.length, 1);
    if (event.key === "ArrowLeft") showPanel((currentPanel - 1 + panels.length) % panels.length, -1);
  });
}

/* Mario gallery. */
const shots = [...document.querySelectorAll(".profile-shot")];
let currentShot = 0;
function showShot(index) {
  if (!shots.length) return;
  shots[currentShot].classList.remove("is-active");
  currentShot = (index + shots.length) % shots.length;
  shots[currentShot].classList.add("is-active");
  document.querySelector("#shotCount").textContent = `${String(currentShot + 1).padStart(2, "0")} / ${String(shots.length).padStart(2, "0")}`;
}
document.querySelector("#nextShot")?.addEventListener("click", () => showShot(currentShot + 1));
document.querySelector("#prevShot")?.addEventListener("click", () => showShot(currentShot - 1));

document.querySelector("#inquiryForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.querySelector("#formStatus");
  const button = event.currentTarget.querySelector("button[type='submit']");
  button.disabled = true;
  status.textContent = "TRANSMITTING…";
  window.setTimeout(() => {
    status.textContent = translations[language].inquirySent;
    button.disabled = false;
    event.currentTarget.reset();
  }, 650);
});

/* Liquid-crystal brand sculpture. CSS glass fragments remain as fallback. */
function scheduleCrystal() {
  if (crystalStarted || isProfile || window.matchMedia("(max-width: 900px)").matches) return;
  if (navigator.connection?.saveData || (navigator.deviceMemory && navigator.deviceMemory < 4)) return;
  crystalStarted = true;
  const launch = () => initCrystal();
  if ("requestIdleCallback" in window) window.requestIdleCallback(launch, { timeout: 1800 });
  else window.setTimeout(launch, 900);
}

async function initCrystal() {
  const canvas = document.querySelector("#crystalCanvas");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  try {
    const THREE = await import("https://unpkg.com/three@0.170.0/build/three.module.js");
    const compact = window.matchMedia("(max-width: 900px)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
    camera.position.set(0, 0, compact ? 6.8 : 5.4);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !compact, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1 : 1.25));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const geometry = new THREE.TorusKnotGeometry(compact ? 1.22 : 1.48, compact ? .37 : .44, compact ? 72 : 112, compact ? 10 : 16, 2, 3);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xeaf4ff,
      roughness: .08,
      metalness: .02,
      transmission: .9,
      thickness: 1.15,
      ior: 1.35,
      clearcoat: 1,
      clearcoatRoughness: .08,
      transparent: true,
      opacity: .88,
      iridescence: .35,
      iridescenceIOR: 1.3
    });
    const crystal = new THREE.Mesh(geometry, material);
    crystal.rotation.set(.4, -.2, .24);
    crystal.position.set(compact ? .35 : .2, compact ? .35 : .05, 0);
    scene.add(crystal);

    const wire = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x315dff, wireframe: true, transparent: true, opacity: .055 }));
    wire.scale.setScalar(1.018);
    crystal.add(wire);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x91a7d0, 2.4));
    const key = new THREE.DirectionalLight(0xffffff, 5);
    key.position.set(3, 5, 4);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x315dff, 4);
    rim.position.set(-4, 1, -2);
    scene.add(rim);

    function resize() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });
    let frame;
    let lastFrame = 0;
    const clock = new THREE.Clock();
    function render(timestamp = 0) {
      frame = requestAnimationFrame(render);
      if (document.hidden || homeExperience?.classList.contains("is-hidden") || timestamp - lastFrame < 33) return;
      lastFrame = timestamp;
      const elapsed = clock.getElapsedTime();
      crystal.rotation.y = elapsed * .065;
      crystal.rotation.x = .4 + Math.sin(elapsed * .21) * .12;
      crystal.rotation.z = .24 + Math.cos(elapsed * .16) * .08;
      crystal.position.y = (compact ? .35 : .05) + Math.sin(elapsed * .28) * .08;
      renderer.render(scene, camera);
    }
    render();
    window.addEventListener("pagehide", () => cancelAnimationFrame(frame), { once: true });
  } catch (error) {
    console.warn("GTAI crystal fallback active", error);
  }
}

applyLanguage();
updateSoundUI();
if (page === "home" && unlocked) scheduleCrystal();
