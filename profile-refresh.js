const savedLanguage = localStorage.getItem("gtai-language") || "en";
const isChinese = savedLanguage === "zh";
const artistName = document.body.dataset.artist || "mario";
const header = document.querySelector(".profile-header");

if (header) {
  header.classList.add("profile-refreshed");
  header.innerHTML = `
    <a class="profile-refresh-logo" href="index.html" aria-label="GTAI home">GTAI<span>®</span></a>
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
