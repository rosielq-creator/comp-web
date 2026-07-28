const savedLanguage = localStorage.getItem("gtai-language") || "en";
const isChinese = savedLanguage === "zh";
const artistName = document.body.dataset.artist || "mario";
const header = document.querySelector(".profile-header");

const profileRefreshData = {
  maya: {
    name: "Maya", role: "Luxury Fashion / Art", followers: "14.5K",
    image: "assets/profiles/maya/black-tailoring.png",
    angles: [
      "assets/profiles/maya/angles/front.png",
      "assets/profiles/maya/angles/side.png",
      "assets/profiles/maya/angles/back.png"
    ],
    facts: [["Height", "171 cm"], ["Weight", "48 kg"], ["Measurements", "85 / 63 / 89"], ["Shoe", "38"], ["Base", "Paris / New York / Seoul"], ["Languages", "English / Korean"], ["Talent type", "Luxury Fashion / High Fashion / Art"]],
    gallery: ["assets/profiles/maya/black-tailoring.png", "assets/profiles/maya/pink-editorial.png", "assets/profiles/maya/pink-closeup.png", "assets/profiles/maya/street-grey.png", "assets/profiles/maya/palais.png", "assets/profiles/maya/canal-01.jpg", "assets/profiles/maya/canal-02.jpg", "assets/profiles/maya/canal-03.jpg"]
  },
  amber: {
    name: "Amber", role: "Music Producer / Fashion", followers: "13.1K",
    image: "assets/profiles/amber/night-portrait.png",
    facts: [["Height", "175 cm"], ["Weight", "50 kg"], ["Measurements", "85 / 63 / 89"], ["Shoe", "38"], ["Base", "Los Angeles / Seoul"], ["Languages", "English / Korean"], ["Nationality", "Korean-American"], ["Talent type", "Music / Fashion / City Culture"]],
    gallery: ["assets/profiles/amber/night-portrait.png", "assets/profiles/amber/denim-editorial.png", "assets/profiles/amber/festival-stage.png", "assets/profiles/amber/festival-wheel.png", "assets/profiles/amber/car.jpg", "assets/profiles/amber/gallery.jpg", "assets/profiles/amber/sofa.png", "assets/profiles/amber/street.png"]
  },
  ooona: {
    name: "Ooona", role: "Beauty / Wellness", followers: "15.1K",
    image: "assets/profiles/ooona/hero.png",
    facts: [["Height", "165 cm"], ["Weight", "45 kg"], ["Measurements", "82 / 60 / 86"], ["Shoe", "38"], ["Base", "Seoul"], ["Languages", "Korean / English"], ["Talent type", "Beauty / Wellness / Lifestyle"]],
    gallery: ["assets/profiles/ooona/hero.png", "assets/profiles/ooona/yoga.png", "assets/profiles/ooona/laundry.jpg", "assets/profiles/ooona/umbrella.jpg"]
  },
  mario: {
    name: "Mario", role: "Lifestyle / Fashion / Sport", followers: "13.5K",
    image: "assets/mario-hero.png",
    angles: [
      "assets/profiles/mario/turnaround/front.webp",
      "assets/profiles/mario/turnaround/side.webp",
      "assets/profiles/mario/turnaround/back.webp"
    ],
    facts: [["Height", "185 cm"], ["Weight", "80 kg"], ["Measurements", "100 / 80 / 96"], ["Shoe", "44"], ["Base", "Guangdong"], ["Languages", "Mandarin / Cantonese / English"], ["Nationality", "China"], ["Birthday", "21 June 2000"], ["Zodiac", "Gemini"], ["Talent type", "Lifestyle / Fashion / Sport / Travel"]],
    gallery: ["assets/mario-hero.png", "assets/mario-editorial.png", "assets/mario-campaign.png", "assets/mario-portrait.png", "assets/profiles/mario/yotree-cover.png"]
  },
  noah: {
    name: "Noah", role: "Film / Fashion / Photography", followers: "11.9K",
    image: "assets/profiles/noah/hero.png",
    facts: [["Height", "183 cm"], ["Weight", "70 kg"], ["Measurements", "88 / 77 / 91"], ["Shoe", "43"], ["Base", "Hong Kong / Seoul / Tokyo"], ["Languages", "Cantonese / Mandarin / English"], ["Birthday", "7 November 2001"], ["Zodiac", "Scorpio"], ["Talent type", "Film / Fashion / Photography"]],
    gallery: ["assets/profiles/noah/hero.png", "assets/profiles/noah/black-portrait.png", "assets/profiles/noah/cafe-portrait.png", "assets/profiles/noah/apple-portrait.jpg", "assets/profiles/noah/toy.png"]
  }
};

if (header) {
  header.classList.add("profile-refreshed");
  header.innerHTML = `
    <a class="profile-refresh-logo company-logo" href="index.html" aria-label="GreenTomato home"><img src="https://gtomato.com/_next/static/media/logo-gt-color.fd039543.svg" alt="GreenTomato"></a>
    <nav class="profile-refresh-nav" aria-label="Primary navigation">
      <a class="is-active" href="artists.html">${isChinese ? "藝人" : "Artists"}</a>
      <a href="index.html#work">${isChinese ? "作品" : "Work"}</a>
      <a href="index.html#services">${isChinese ? "服務" : "Services"}</a>
      <a href="index.html#about">${isChinese ? "關於" : "About"}</a>
      <a class="profile-contact" href="#inquiry">${isChinese ? "聯絡" : "Contact"}</a>
    </nav>
    <div class="profile-refresh-tools">
      <button class="profile-refresh-language" id="profileLanguageToggle" type="button" aria-label="Switch language">${isChinese ? "EN" : "繁中"}</button>
      <button class="profile-refresh-menu" id="profileMenuToggle" type="button" aria-expanded="false" aria-label="Open menu"><span></span><span></span></button>
    </div>
    <nav class="profile-mobile-nav" id="profileMobileNav" aria-label="Mobile navigation">
      <a href="artists.html">${isChinese ? "藝人" : "Artists"}</a>
      <a href="index.html#work">${isChinese ? "作品" : "Work"}</a>
      <a href="index.html#services">${isChinese ? "服務" : "Services"}</a>
      <a href="index.html#about">${isChinese ? "關於" : "About"}</a>
      <a href="#inquiry">${isChinese ? "聯絡" : "Contact"}</a>
    </nav>
  `;

  document.querySelector("#profileLanguageToggle")?.addEventListener("click", () => {
    localStorage.setItem("gtai-language", isChinese ? "en" : "zh");
    location.reload();
  });
  document.querySelector("#profileMenuToggle")?.addEventListener("click", (event) => {
    const open = !document.body.classList.contains("profile-menu-open");
    document.body.classList.toggle("profile-menu-open", open);
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll("#profileMobileNav a").forEach((link) => link.addEventListener("click", () => {
    document.body.classList.remove("profile-menu-open");
    document.querySelector("#profileMenuToggle")?.setAttribute("aria-expanded", "false");
  }));
}

const activeProfile = profileRefreshData[artistName];
const profileShowcase = document.querySelector(".profile-showcase");
const introduction = document.querySelector(".intro-section");
if (activeProfile && profileShowcase) {
  const labels = isChinese
    ? { available: "可接全球品牌合作", followers: "總粉絲數", enquiry: "諮詢這位藝人", gallery: "人物影像", viewAll: "查看全部", collapse: "收起全部", front: "正面", side: "側面", back: "背面" }
    : { available: "Available for Global Campaigns", followers: "Total followers", enquiry: "Enquire About This Talent", gallery: "Selected images", viewAll: "View all", collapse: "Collapse", front: "Front", side: "Side", back: "Back" };
  const facts = activeProfile.facts.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("");
  const angleImages = activeProfile.angles || [activeProfile.image];
  profileShowcase.innerHTML = `
    <div class="profile-overview">
      <div class="profile-overview-media">
        <div class="profile-angle-frame">
          <img id="profileAngleImage" src="${angleImages[0]}" alt="${activeProfile.name} full-length view">
        </div>
        ${activeProfile.angles ? `
          <div class="profile-angle-controls" role="tablist" aria-label="${activeProfile.name} views">
            <button class="is-active" type="button" data-angle="0">${labels.front}</button>
            <button type="button" data-angle="1">${labels.side}</button>
            <button type="button" data-angle="2">${labels.back}</button>
          </div>` : ""}
      </div>
      <div class="profile-overview-copy">
        <p class="profile-availability"><span></span>${labels.available}</p>
        <h1>${activeProfile.name}</h1>
        <p class="profile-role">${activeProfile.role}</p>
        <div class="profile-followers"><strong>${activeProfile.followers}</strong><span>${labels.followers}</span></div>
        <dl class="profile-facts">${facts}</dl>
        <a class="profile-enquire-button" href="#inquiry">${labels.enquiry}<b>↘</b></a>
      </div>
    </div>
  `;

  profileShowcase.insertAdjacentHTML("afterend", `
    <section class="profile-gallery" id="profileGallery">
      <header>
        <div><p>PORTFOLIO</p><h2>${labels.gallery}</h2></div>
        <div class="profile-gallery-actions">
          <button type="button" data-gallery-prev aria-label="Previous images">←</button>
          <button type="button" data-gallery-next aria-label="Next images">→</button>
          <button type="button" data-gallery-toggle>${labels.viewAll}</button>
        </div>
      </header>
      <div class="profile-gallery-track">
        ${activeProfile.gallery.map((src, index) => `<figure><img src="${src}" alt="${activeProfile.name} portfolio image ${index + 1}" loading="${index < 2 ? "eager" : "lazy"}"></figure>`).join("")}
      </div>
    </section>
  `);

  const angleImage = document.querySelector("#profileAngleImage");
  angleImage?.addEventListener("error", () => {
    if (angleImage.src.endsWith(activeProfile.image)) return;
    angleImage.src = activeProfile.image;
  });
  document.querySelectorAll(".profile-gallery-track img").forEach((galleryImage) => {
    galleryImage.addEventListener("error", () => galleryImage.closest("figure")?.remove(), { once: true });
  });
  document.querySelectorAll("[data-angle]").forEach((button) => button.addEventListener("click", () => {
    const index = Number(button.dataset.angle);
    angleImage.src = angleImages[index];
    document.querySelectorAll("[data-angle]").forEach((item) => item.classList.toggle("is-active", item === button));
  }));

  const gallery = document.querySelector("#profileGallery");
  const track = gallery.querySelector(".profile-gallery-track");
  gallery.querySelector("[data-gallery-prev]")?.addEventListener("click", () => track.scrollBy({ left: -track.clientWidth * 0.75, behavior: "smooth" }));
  gallery.querySelector("[data-gallery-next]")?.addEventListener("click", () => track.scrollBy({ left: track.clientWidth * 0.75, behavior: "smooth" }));
  gallery.querySelector("[data-gallery-toggle]")?.addEventListener("click", (event) => {
    const expanded = gallery.classList.toggle("is-expanded");
    event.currentTarget.textContent = expanded ? labels.collapse : labels.viewAll;
  });

  if (introduction) introduction.hidden = true;
}

const inquiry = document.querySelector(".inquiry-section");
const form = document.querySelector("#inquiryForm");
if (inquiry && form) {
  const title = inquiry.querySelector(".inquiry-copy h2");
  const intro = inquiry.querySelector(".inquiry-copy > p:last-child");
  if (title) title.innerHTML = isChinese ? "告訴我們需求，<br><em>我們建立整個世界。</em>" : "Bring us the brief.<br><em>We’ll build the world.</em>";
  if (intro) intro.textContent = isChinese
    ? "所有服務均可詢問，無需選擇目前正在查看的藝人。"
    : "Inquire about any GTAI service. Selecting the artist you are viewing is optional.";

  form.innerHTML = `
    <input type="hidden" name="sourceArtist" value="${artistName}">
    <div class="form-row">
      <label><span>${isChinese ? "聯絡人姓名" : "Contact name"}</span><input required name="name" autocomplete="name"></label>
      <label><span>${isChinese ? "公司／品牌" : "Company / brand"}</span><input required name="company" autocomplete="organization"></label>
    </div>
    <div class="form-row">
      <label><span>Email</span><input required type="email" name="email" autocomplete="email"></label>
      <label><span>${isChinese ? "預計推出時間" : "Target launch"}</span><input name="timeline" placeholder="${isChinese ? "例如：2026 Q4" : "e.g. Q4 2026"}"></label>
    </div>
    <fieldset>
      <legend>${isChinese ? "需要哪些服務？*" : "What can we help with? *"}</legend>
      <div class="profile-service-options">
        <label><input type="checkbox" name="services" value="AI Video Production"><span>AI Video Production</span></label>
        <label><input type="checkbox" name="services" value="Digital Human Creation"><span>Digital Human Creation</span></label>
        <label><input type="checkbox" name="services" value="AI Campaign & Social"><span>AI Campaign & Social</span></label>
        <label><input type="checkbox" name="services" value="AI Experiences / Custom Project"><span>AI Experiences / Custom Project</span></label>
      </div>
    </fieldset>
    <label><span>${isChinese ? "項目說明" : "Project brief"}</span><textarea required name="message" rows="5"></textarea></label>
    <div class="form-submit-row">
      <p class="profile-form-note">${isChinese ? "WhatsApp 發送將在下一階段接通；目前預覽不會儲存資料。" : "WhatsApp delivery will be connected next. This preview stores no data."}</p>
      <button class="submit-button" type="submit"><span>${isChinese ? "發送詢盤" : "Send inquiry"}</span><b>↗</b></button>
    </div>
    <p class="form-status" id="formStatus" aria-live="polite"></p>
  `;

  form.addEventListener("submit", (event) => {
    if (form.querySelectorAll('input[name="services"]:checked').length) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const status = form.querySelector("#formStatus");
    status.textContent = isChinese ? "請至少選擇一項服務。" : "Select at least one service.";
    form.querySelector('input[name="services"]')?.focus();
  }, true);
}

document.querySelectorAll(".site-footer > a:first-child").forEach((logo) => {
  logo.className = "profile-footer-logo";
  logo.setAttribute("aria-label", "GreenTomato home");
  logo.innerHTML = '<img src="https://gtomato.com/_next/static/media/logo-gt-color.fd039543.svg" alt="GreenTomato">';
});
