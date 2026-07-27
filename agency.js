const artists = [
  {
    name: "Mario",
    role: "Lifestyle · Fashion · Sport",
    image: "assets/featured/mario-commercial-v4.webp",
    href: "mario.html",
    alt: "Mario, GTAI featured AI lifestyle and sport artist",
    position: "center center"
  },
  {
    name: "Noah",
    role: "Film · Fashion · Culture",
    image: "assets/featured/noah-commercial-v1.webp",
    href: "noah.html",
    alt: "Noah, GTAI featured AI film and fashion artist",
    position: "center 28%"
  },
  {
    name: "Ooona",
    role: "Beauty · Wellness · Digital Spirit",
    image: "assets/featured/ooona-commercial-v1.webp",
    href: "ooona.html",
    alt: "Ooona, GTAI featured AI beauty and wellness artist",
    position: "center center"
  },
  {
    name: "Amber",
    role: "Music · Fashion · Creative Culture",
    image: "assets/featured/amber-commercial-v1.webp",
    href: "amber.html",
    alt: "Amber, GTAI featured AI music and fashion artist",
    position: "center 30%"
  },
  {
    name: "Maya",
    role: "Art · Architecture · High Fashion",
    image: "assets/featured/maya-commercial-v1.webp",
    href: "maya.html",
    alt: "Maya, GTAI featured AI art and high fashion artist",
    position: "center 24%"
  }
];

const copy = {
  en: {
    navArtists: "Artists", navWork: "Work", navServices: "Services", navAbout: "About", navContact: "Contact",
    heroEyebrow: "Independent AI artist agency · Hong Kong",
    heroLineOne: "AI artists.", heroLineTwo: "Built for brands.",
    heroIntro: "Distinct digital personalities, original worlds and production built to move at the speed of culture.",
    exploreProfile: "Explore profile", viewRoster: "View full roster", featuredArtists: "Featured artists · 2026", scrollToWork: "Selected work",
    workTitleOne: "Selected work,", workTitleTwo: "made to be seen.",
    workIntro: "Film and image production for hospitality, entertainment and retail brands across Asia.",
    fullProduction: "Full video & image production by GTAI",
    servicesTitleOne: "One team.", servicesTitleTwo: "New creative systems.",
    servicesIntro: "We unite character, direction, production and technology around the needs of each brand.",
    serviceVideo: "Concept, creative direction and AI-powered film production for campaigns and branded stories.",
    serviceHuman: "Distinct virtual personalities built for long-term brand worlds, content and audience connection.",
    serviceSocial: "Scalable creative systems for brand launches, social channels and always-on content.",
    labsCopy: "Experimental interactive experiences, agents and custom prototypes developed with selected partners.",
    discussExperiment: "Discuss an experiment",
    aboutTitleOne: "Characters are the", aboutTitleTwo: "new creative infrastructure.",
    aboutCopyOne: "GTAI is a Hong Kong AI artist agency and production studio. We develop ownable digital personalities and the visual systems that let them perform across channels, markets and formats.",
    aboutCopyTwo: "Our work combines human creative direction with AI-native production—from a single campaign film to an artist built for years of storytelling.",
    meetRoster: "Meet the roster", processCharacter: "Identity, voice and world", processDirection: "Concept and art direction",
    processProduction: "Film, image and social", processContinuity: "Consistent, scalable output",
    contactTitleOne: "Bring us the brief.", contactTitleTwo: "We’ll build the world.",
    contactIntro: "Tell us what you need. You can inquire about any service—selecting an artist is optional.",
    formName: "Your name *", formCompany: "Company / brand *", formTimeline: "Target launch", formServices: "What can we help with? *",
    formBrief: "Project brief *", formBriefPlaceholder: "Objectives, audience, deliverables, budget and timing.",
    formNote: "WhatsApp delivery will be connected in the next phase. This preview stores no data.",
    sendInquiry: "Send inquiry", formSelectService: "Select at least one service.", formSuccess: "Thank you. The inquiry flow is ready; WhatsApp delivery will be connected next.",
    footerLine: "Next-generation AI artists and production for brands.",
    rosterEyebrow: "GTAI artist roster · Hong Kong / Asia", rosterTitleOne: "Meet the minds", rosterTitleTwo: "inside the machine.",
    rosterIntro: "Five flagship artists. Distinct identities, interests and creative worlds—built to grow into a wider next-generation roster.",
    currentRoster: "CURRENT FLAGSHIP ARTISTS", moreArtists: "More artists are taking shape.",
    moreArtistsCopy: "The roster is designed to grow. New identities will appear here without changing the flagship five.",
    buildArtist: "Build an artist with us", rosterCtaOne: "Need an artist", rosterCtaTwo: "who does not exist yet?", startProject: "Start a project"
  },
  zh: {
    navArtists: "藝人", navWork: "作品", navServices: "服務", navAbout: "關於", navContact: "聯絡",
    heroEyebrow: "香港獨立 AI 藝人經紀公司",
    heroLineOne: "AI 藝人。", heroLineTwo: "為品牌而生。",
    heroIntro: "鮮明的數字人個性、原創世界觀，以及能與文化同步前進的製作能力。",
    exploreProfile: "探索藝人檔案", viewRoster: "查看完整陣容", featuredArtists: "招牌藝人 · 2026", scrollToWork: "精選作品",
    workTitleOne: "精選作品，", workTitleTwo: "為被看見而製作。",
    workIntro: "為亞洲酒店、娛樂與零售品牌提供影片及圖片製作。",
    fullProduction: "全部影片及圖片由 GTAI 製作",
    servicesTitleOne: "一個團隊。", servicesTitleTwo: "全新的創意系統。",
    servicesIntro: "我們圍繞品牌需求，整合人物、創意指導、製作與技術。",
    serviceVideo: "為品牌企劃與故事提供概念、創意指導及 AI 影片製作。",
    serviceHuman: "建立鮮明的虛擬人物，延伸為長期品牌世界、內容與受眾連結。",
    serviceSocial: "為品牌發佈、社交平台及持續內容建立可規模化的創意系統。",
    labsCopy: "與指定合作夥伴共同開發實驗性互動體驗、智能工具與客製原型。",
    discussExperiment: "討論實驗項目",
    aboutTitleOne: "角色就是", aboutTitleTwo: "新世代創意基礎設施。",
    aboutCopyOne: "GTAI 是香港 AI 藝人經紀公司及製作工作室。我們創造可擁有的數字人個性，以及讓他們跨平台、市場與格式持續演出的視覺系統。",
    aboutCopyTwo: "我們把人類創意指導與 AI 原生製作結合——從一支 Campaign 影片，到能持續多年說故事的藝人。",
    meetRoster: "認識藝人陣容", processCharacter: "身份、聲音與世界觀", processDirection: "概念與藝術指導",
    processProduction: "影片、圖片與社交內容", processContinuity: "一致且可規模化的產出",
    contactTitleOne: "把 Brief 給我們。", contactTitleTwo: "我們建立整個世界。",
    contactIntro: "告訴我們你的需求。所有服務均可詢問，無需先選擇藝人。",
    formName: "你的姓名 *", formCompany: "公司／品牌 *", formTimeline: "預計推出時間", formServices: "需要哪些服務？*",
    formBrief: "項目說明 *", formBriefPlaceholder: "目標、受眾、交付內容、預算及時間。",
    formNote: "WhatsApp 發送會在下一階段接通；目前預覽不會儲存資料。",
    sendInquiry: "發送詢盤", formSelectService: "請至少選擇一項服務。", formSuccess: "謝謝。詢盤流程已準備好，下一階段將接通 WhatsApp。",
    footerLine: "為品牌提供新世代 AI 藝人與製作服務。",
    rosterEyebrow: "GTAI 藝人陣容 · 香港／亞洲", rosterTitleOne: "認識機器之中", rosterTitleTwo: "獨一無二的靈魂。",
    rosterIntro: "五位招牌藝人，各自擁有鮮明身份、興趣與創意世界；陣容將持續擴展。",
    currentRoster: "目前招牌藝人", moreArtists: "更多藝人正在成形。",
    moreArtistsCopy: "這個陣容會持續成長；新身份將加入這裡，同時保留目前五位招牌藝人。",
    buildArtist: "與我們建立新藝人", rosterCtaOne: "需要一位", rosterCtaTwo: "尚未存在的藝人？", startProject: "開始項目"
  }
};

let language = localStorage.getItem("gtai-language") || "en";

function applyLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const value = copy[language][element.dataset.copy];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-copy-placeholder]").forEach((element) => {
    const value = copy[language][element.dataset.copyPlaceholder];
    if (value) element.placeholder = value;
  });
  const toggle = document.querySelector("#languageToggle");
  if (toggle) toggle.textContent = language === "en" ? "繁中" : "EN";
  localStorage.setItem("gtai-language", language);
}

document.querySelector("#languageToggle")?.addEventListener("click", () => {
  language = language === "en" ? "zh" : "en";
  applyLanguage();
});
applyLanguage();

const header = document.querySelector("#siteHeader");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const menuButton = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");
function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  menuButton?.setAttribute("aria-expanded", String(open));
  if (mobileMenu) mobileMenu.inert = !open;
}
menuButton?.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

const image = document.querySelector("#heroArtistImage");
const name = document.querySelector("#artistName");
const role = document.querySelector("#artistRole");
const number = document.querySelector("#artistNumber");
const profileLink = document.querySelector("#heroProfileLink");
const tabs = [...document.querySelectorAll(".artist-tab")];
let activeArtist = 0;

function setArtist(index, focusTab = false) {
  if (!image || index === activeArtist && image.dataset.ready) return;
  const artist = artists[index];
  activeArtist = index;
  image.classList.add("is-switching");
  window.setTimeout(() => {
    image.src = artist.image;
    image.alt = artist.alt;
    image.style.objectPosition = artist.position;
    name.textContent = artist.name;
    role.textContent = artist.role;
    number.textContent = String(index + 1).padStart(2, "0");
    profileLink.href = artist.href;
    image.dataset.ready = "true";
    image.classList.remove("is-switching");
  }, 170);
  tabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  if (focusTab) tabs[index]?.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setArtist(index));
  tab.addEventListener("mouseenter", () => {
    if (matchMedia("(hover: hover) and (pointer: fine)").matches) setArtist(index);
  });
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
    event.preventDefault();
    const direction = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
    setArtist((index + direction + artists.length) % artists.length, true);
  });
});
if (image) image.dataset.ready = "true";

let touchStart = 0;
document.querySelector("#artistStage")?.addEventListener("touchstart", (event) => {
  touchStart = event.changedTouches[0].clientX;
}, { passive: true });
document.querySelector("#artistStage")?.addEventListener("touchend", (event) => {
  const delta = event.changedTouches[0].clientX - touchStart;
  if (Math.abs(delta) > 45) setArtist((activeArtist + (delta < 0 ? 1 : -1) + artists.length) % artists.length);
}, { passive: true });

document.querySelectorAll(".case-media").forEach((button) => {
  const video = button.querySelector("video");
  if (!video) return;
  button.addEventListener("click", () => {
    document.querySelectorAll(".case-media video").forEach((other) => {
      if (other !== video) {
        other.pause();
        other.closest(".case-media")?.classList.remove("is-playing");
      }
    });
    if (video.paused) {
      video.play().then(() => button.classList.add("is-playing")).catch(() => {});
    } else {
      video.pause();
      button.classList.remove("is-playing");
    }
  });
  video.addEventListener("ended", () => button.classList.remove("is-playing"));
});

const form = document.querySelector("#projectForm");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.querySelector("#formStatus");
  const checked = form.querySelectorAll('input[name="services"]:checked');
  if (!checked.length) {
    status.textContent = copy[language].formSelectService;
    form.querySelector(".service-options input")?.focus();
    return;
  }
  status.textContent = copy[language].formSuccess;
});

function initSignalField() {
  const canvas = document.querySelector("#signalField");
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const context = canvas.getContext("2d");
  const pointer = { x: 0.72, y: 0.44 };
  let width = 0;
  let height = 0;
  let frame = 0;
  let raf = 0;
  let visible = true;

  function resize() {
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw() {
    if (!visible) return;
    context.clearRect(0, 0, width, height);
    const centerX = pointer.x * width;
    const centerY = pointer.y * height;
    for (let ring = 0; ring < 5; ring += 1) {
      const radius = 90 + ring * 84 + Math.sin(frame * 0.008 + ring) * 12;
      context.beginPath();
      context.ellipse(centerX, centerY, radius * 1.35, radius * 0.56, -0.24, 0, Math.PI * 2);
      context.strokeStyle = `rgba(158, 234, 80, ${0.18 - ring * 0.026})`;
      context.lineWidth = 1;
      context.stroke();
    }
    for (let point = 0; point < 34; point += 1) {
      const angle = point * 2.399 + frame * 0.00045;
      const radius = 58 + (point % 9) * 48;
      const x = centerX + Math.cos(angle) * radius * 1.45;
      const y = centerY + Math.sin(angle) * radius * 0.58;
      context.fillStyle = point % 5 === 0 ? "rgba(158,234,80,.72)" : "rgba(241,239,232,.25)";
      context.fillRect(x, y, point % 5 === 0 ? 2 : 1, point % 5 === 0 ? 2 : 1);
    }
    frame += 1;
    raf = requestAnimationFrame(draw);
  }

  const hero = canvas.closest(".hero");
  hero?.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    pointer.x += ((event.clientX - bounds.left) / bounds.width - pointer.x) * 0.14;
    pointer.y += ((event.clientY - bounds.top) / bounds.height - pointer.y) * 0.14;
  }, { passive: true });
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) draw(); else cancelAnimationFrame(raf);
  });
  observer.observe(canvas);
  window.addEventListener("resize", resize, { passive: true });
  resize();
  draw();
}
initSignalField();
