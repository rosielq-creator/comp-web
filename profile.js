const profiles = {
  noah: {
    name: "NOAH",
    label: "Noah Jae",
    images: [
      ["assets/profiles/noah/hero.png", "Noah in a clean editorial portrait"],
      ["assets/profiles/noah/toy.png", "Noah collectible figure cutout"]
    ],
    headline: "An independent eye,<br><em>always in motion.</em>",
    bio: "Noah Jae is a Chinese–Korean fashion and lifestyle creator with a quiet, art-led point of view. His visual world moves through menswear, city culture, travel, photography and considered everyday spaces.",
    facts: [
      ["Age", "27"],
      ["Heritage", "Chinese–Korean"],
      ["Focus", "Fashion / Art / Travel / Photography"],
      ["Platform", "Instagram"]
    ]
  },
  ooona: {
    name: "OOONA",
    label: "Ooona",
    images: [
      ["assets/profiles/ooona/hero.png", "Ooona soft beauty portrait"],
      ["assets/profiles/ooona/yoga.png", "Ooona practising yoga by the sea"],
      ["assets/profiles/ooona/laundry.jpg", "Ooona in a sunlit everyday setting"],
      ["assets/profiles/ooona/umbrella.jpg", "Ooona under a blue umbrella"]
    ],
    headline: "Soft energy,<br><em>shaped by movement.</em>",
    bio: "Ooona is a Korea-based beauty, wellness and lifestyle talent. Her world combines yoga, playful daily rituals, clean beauty and a gentle Seoul sensibility that feels light, healthy and approachable.",
    facts: [
      ["Base", "Korea"],
      ["Focus", "Beauty / Wellness / Yoga / Lifestyle"],
      ["Style", "Soft / Clean / Playful"],
      ["Platform", "Instagram"]
    ]
  },
  amber: {
    name: "AMBER",
    label: "Amber Yun",
    images: [
      ["assets/profiles/amber/street.png", "Amber in a restrained black street look"],
      ["assets/profiles/amber/gallery.jpg", "Amber at a Los Angeles gallery and music studio"],
      ["assets/profiles/amber/car.jpg", "Amber in a quiet city car portrait"],
      ["assets/profiles/amber/sofa.png", "Amber in an editorial interior portrait"]
    ],
    headline: "Sound in restraint,<br><em>style with intent.</em>",
    bio: "Amber Yun is a Korean-American music producer based in Los Angeles. Her creative identity brings together genre-defying sound, fashion-forward restraint and the quiet rhythm of the city’s studio and cultural scene.",
    facts: [
      ["Base", "Los Angeles"],
      ["Age", "26"],
      ["Focus", "Music Production / Fashion / City Culture"],
      ["Platform", "Instagram"]
    ]
  },
  maya: {
    name: "MAYA",
    label: "Maya",
    images: [
      ["assets/profiles/maya/palais.png", "Maya in a Paris architectural editorial"],
      ["assets/profiles/maya/canal-01.jpg", "Maya along a Paris canal"],
      ["assets/profiles/maya/canal-02.jpg", "Maya Paris lifestyle editorial"],
      ["assets/profiles/maya/canal-03.jpg", "Maya in a quiet Paris street moment"]
    ],
    headline: "Quiet power,<br><em>framed through culture.</em>",
    bio: "Maya is a high-fashion and art-world digital talent defined by restrained elegance. Her visual direction moves through galleries, museums, architecture and quiet-luxury city spaces without reducing her to a conventional fashion influencer.",
    facts: [
      ["Focus", "High Fashion / Art / Culture"],
      ["Visual language", "Quiet Luxury / Restrained Elegance"],
      ["Scenes", "Gallery / Museum / Architecture"],
      ["Platform", "Instagram"]
    ]
  }
};

const key = (document.body.dataset.artist || new URLSearchParams(location.search).get("artist"))?.toLowerCase();
const profile = profiles[key];

if (!profile) {
  location.replace("index.html#artists");
} else {
  document.body.dataset.artist = key;
  document.title = `${profile.label} — GTAI`;

  const wordmark = document.querySelector(".profile-wordmark");
  wordmark.innerHTML = Array.from({ length: 4 }, () => `<span>${profile.name}</span>`).join("");

  const title = document.querySelector("#profile-title");
  title.textContent = profile.name;

  const railWindow = document.querySelector(".profile-rail-window");
  railWindow.setAttribute("aria-label", `${profile.label} selected images`);
  document.querySelector(".profile-rail-group").innerHTML = profile.images.map(([src, alt]) =>
    `<figure class="rail-shot"><img src="${src}" alt="${alt}" decoding="async"></figure>`
  ).join("");

  const headline = document.querySelector("#profileHeadline");
  headline.removeAttribute("data-i18n");
  headline.innerHTML = profile.headline;

  const bio = document.querySelector("#profileBio");
  bio.removeAttribute("data-i18n");
  bio.textContent = profile.bio;

  document.querySelector("#profileFacts").innerHTML = profile.facts.map(([term, value]) =>
    `<div><dt>${term}</dt><dd>${value}</dd></div>`
  ).join("");
}

await import("./app.js?v=20260722-18");
