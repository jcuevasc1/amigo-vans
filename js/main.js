/* ==========================================================================
   AMIGO VANS — configuración editable
   Cambia estos valores y se actualizan en todo el sitio automáticamente.
   ========================================================================== */
const CONFIG = {
  phoneDisplay: "(602) 555-0134",      // TODO: reemplazar con el número real
  phoneHref: "+16025550134",            // TODO: mismo número en formato tel:
  whatsappNumber: "16025550134",        // TODO: mismo número, solo dígitos, con código de país (sin +)
  ownerName: "Amigo Vans Founder",      // TODO: nombre real del fundador
  startingPriceUSD: 72000,
  domain: "amigovans.com",
};

/* ==========================================================================
   Catálogo del configurador
   universal: true  -> aplica a cualquier chasis (y a "todavía no tengo van")
   universal: false -> solo aplica cuando se elige un chasis específico
   tier: 'included' | 'plus' | 'premium'  (nunca precio en dólares)
   stock: true  -> "Instalado en cualquier build"
   stock: false -> "Se consigue y se instala bajo pedido"
   ========================================================================== */
const CONFIG_OPTIONS = [
  { id: "rugged-terrain", en: "Rugged Terrain Package", es: "Paquete Rugged Terrain", universal: false, tier: "premium", stock: false },
  { id: "overland-storage", en: "Overland Storage Package", es: "Paquete Overland Storage", universal: true, tier: "plus", stock: true },
  { id: "offgrid-power", en: "Off-Grid Power Package", es: "Paquete Off-Grid Power", universal: true, tier: "premium", stock: true },
  { id: "desert-climate", en: "Desert Climate Package", es: "Paquete Desert Climate", universal: true, tier: "plus", stock: true },
  { id: "outdoor-living", en: "Outdoor Living Package", es: "Paquete Outdoor Living", universal: true, tier: "plus", stock: true },

  { id: "lift-kit", en: "Lift kit", es: "Kit de suspensión levantada", universal: false, tier: "premium", stock: false },
  { id: "shocks", en: "Upgraded shocks", es: "Amortiguadores mejorados", universal: false, tier: "plus", stock: false },
  { id: "wheels-tires", en: "Wheels and tires", es: "Rines y llantas", universal: false, tier: "plus", stock: false },
  { id: "skid-plates", en: "Skid plates", es: "Placas de protección (skid plates)", universal: false, tier: "plus", stock: false },

  { id: "fender-flares", en: "Steel fender flares", es: "Salpicaderas de acero", universal: false, tier: "plus", stock: false },
  { id: "front-bumper", en: "Steel front bumper", es: "Defensa delantera de acero", universal: false, tier: "premium", stock: false },
  { id: "rear-bumper", en: "Rear bumper with tire carrier", es: "Defensa trasera con porta-llanta", universal: false, tier: "premium", stock: false },
  { id: "rock-sliders", en: "Rock sliders", es: "Rock sliders", universal: false, tier: "plus", stock: false },
  { id: "roof-rack", en: "Roof rack", es: "Rack de techo", universal: false, tier: "plus", stock: false },
  { id: "gear-box", en: "Rear gear box", es: "Caja de equipo trasera", universal: false, tier: "plus", stock: false },
  { id: "ladder", en: "Ladder", es: "Escalera", universal: false, tier: "included", stock: true },
  { id: "awning-brackets", en: "Awning brackets", es: "Soportes para toldo", universal: false, tier: "included", stock: true },

  { id: "extra-battery", en: "Additional battery capacity", es: "Capacidad de batería adicional", universal: true, tier: "premium", stock: false },
  { id: "extra-solar", en: "Expanded solar to 1,400W", es: "Solar ampliado a 1,400W", universal: true, tier: "premium", stock: false },
  { id: "second-alternator", en: "Second alternator charging", es: "Carga con segundo alternador", universal: true, tier: "premium", stock: false },
  { id: "extra-outlets", en: "Additional outlets and circuits", es: "Contactos y circuitos adicionales", universal: true, tier: "plus", stock: true },
  { id: "dual-standard-power", en: "America and Europe ready external connections", es: "Conexión externa lista para América y Europa", universal: true, tier: "plus", stock: false },

  { id: "extra-insulation", en: "Upgraded insulation", es: "Aislamiento mejorado", universal: true, tier: "plus", stock: true },
  { id: "secondary-heat", en: "Secondary heat", es: "Calefacción secundaria", universal: true, tier: "plus", stock: false },
  { id: "window-covers", en: "Window covers and thermal shades", es: "Cubiertas térmicas para ventanas", universal: true, tier: "plus", stock: true },

  { id: "extra-tanks", en: "Expanded tank capacity", es: "Tanques de mayor capacidad", universal: true, tier: "plus", stock: true },
  { id: "exterior-shower", en: "Exterior shower", es: "Regadera exterior", universal: true, tier: "plus", stock: true },
  { id: "water-filter", en: "Water filtration upgrade", es: "Filtración de agua mejorada", universal: true, tier: "plus", stock: true },

  { id: "cabinetry-finish", en: "Cabinetry finishes", es: "Acabados de gabinetes", universal: true, tier: "plus", stock: true },
  { id: "upholstery", en: "Upholstery and materials", es: "Tapicería y materiales", universal: true, tier: "plus", stock: true },
  { id: "extra-seating", en: "Additional seating", es: "Asientos adicionales", universal: true, tier: "plus", stock: false },
  { id: "custom-layout", en: "Custom layout work", es: "Layout personalizado", universal: true, tier: "premium", stock: false },

  { id: "light-bars", en: "Light bars", es: "Barras de luces", universal: true, tier: "plus", stock: true },
  { id: "rock-lights", en: "Rock lights", es: "Rock lights", universal: true, tier: "included", stock: true },
  { id: "awning", en: "Awning", es: "Toldo", universal: true, tier: "plus", stock: true },
  { id: "roof-deck", en: "Roof deck", es: "Roof deck", universal: false, tier: "premium", stock: false },
  { id: "exterior-storage", en: "Exterior storage", es: "Almacenaje exterior", universal: true, tier: "plus", stock: true },

  { id: "drone-dock", en: "Rooftop drone dock", es: "Hangar de dron en el techo", universal: true, tier: "premium", stock: false },
  { id: "starlink", en: "Satellite internet", es: "Internet satelital", universal: true, tier: "premium", stock: false },
  { id: "camera-system", en: "Exterior camera system", es: "Sistema de cámaras exteriores", universal: true, tier: "plus", stock: false },
  { id: "cell-booster", en: "Cellular booster", es: "Amplificador de señal celular", universal: true, tier: "plus", stock: false },
  { id: "monitoring", en: "Additional monitoring and connectivity gear", es: "Equipo adicional de monitoreo y conectividad", universal: true, tier: "plus", stock: false },

  { id: "rooftop-tent", en: "Rooftop tent", es: "Tienda de techo", universal: true, tier: "plus", stock: false },
  { id: "ground-tent", en: "Ground tent", es: "Tienda de piso", universal: true, tier: "included", stock: true },
  { id: "grill", en: "Grill and cooking gear", es: "Parrilla y equipo de cocina", universal: true, tier: "included", stock: true },
  { id: "camp-furniture", en: "Camp furniture", es: "Muebles de campamento", universal: true, tier: "included", stock: true },
  { id: "recovery-gear", en: "Recovery gear", es: "Equipo de recuperación", universal: true, tier: "plus", stock: true },
  { id: "merch", en: "Amigo Vans merchandise", es: "Mercancía Amigo Vans", universal: true, tier: "included", stock: true },
];

const CATEGORY_LABELS = {
  suspension: { en: "Suspension and chassis", es: "Suspensión y chasis" },
  power: { en: "Electrical", es: "Eléctrico" },
  climate: { en: "Climate", es: "Clima" },
  water: { en: "Water", es: "Agua" },
  interior: { en: "Interior", es: "Interior" },
  exterior: { en: "Exterior and lighting", es: "Exterior e iluminación" },
  tech: { en: "Tech and aerial", es: "Tecnología y aérea" },
  outdoor: { en: "Outdoor and gear", es: "Equipo para exteriores" },
  packages: { en: "Packages", es: "Paquetes" },
};

/* ==========================================================================
   Estado
   ========================================================================== */
let currentLang = "en";
let selectedChassis = null;
const selectedOptions = new Set();

function t(obj) { return obj[currentLang]; }

function whatsappLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
}

/* ==========================================================================
   Idioma
   ========================================================================== */
function setLang(lang) {
  currentLang = lang;
  document.body.dataset.lang = lang;
  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  renderChassisStep();
  renderOptionsStep();
  renderSummaryStep();
}

/* ==========================================================================
   Navegación móvil
   ========================================================================== */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mobileNav");
  const close = document.getElementById("navClose");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  if (close) close.addEventListener("click", () => nav.classList.remove("open"));
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => nav.classList.remove("open")));
}

/* ==========================================================================
   Configurador
   ========================================================================== */
const CHASSIS_LIST = [
  { id: "sprinter", en: "Mercedes Sprinter", es: "Mercedes Sprinter" },
  { id: "transit", en: "Ford Transit", es: "Ford Transit" },
  { id: "promaster", en: "Ram ProMaster", es: "Ram ProMaster" },
  { id: "none", en: "Don't have a van yet? We can help.", es: "¿Todavía no tienes una van? Te ayudamos." },
];

function renderChassisStep() {
  const wrap = document.getElementById("chassisGrid");
  if (!wrap) return;
  wrap.innerHTML = "";
  CHASSIS_LIST.forEach((c) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chassis-btn" + (selectedChassis === c.id ? " selected" : "");
    btn.innerHTML = `${t(c)}`;
    btn.addEventListener("click", () => {
      selectedChassis = c.id;
      renderChassisStep();
      goToStep(2);
      renderOptionsStep();
    });
    wrap.appendChild(btn);
  });
}

function groupOptionsForChassis() {
  const isUniversalOnly = selectedChassis === "none" || !selectedChassis;
  return CONFIG_OPTIONS.filter((o) => (isUniversalOnly ? o.universal : true));
}

function renderOptionsStep() {
  const wrap = document.getElementById("optionsList");
  if (!wrap) return;
  wrap.innerHTML = "";

  const items = groupOptionsForChassis();
  const grouped = {};
  items.forEach((item) => {
    const key = item.universal ? "general" : "chassis-specific";
    grouped[key] = grouped[key] || [];
    grouped[key].push(item);
  });

  const label = document.getElementById("optionsChassisLabel");
  if (label) {
    const chassisObj = CHASSIS_LIST.find((c) => c.id === selectedChassis);
    label.textContent = chassisObj ? t(chassisObj) : "";
  }

  Object.keys(grouped).forEach((groupKey) => {
    const section = document.createElement("div");
    section.className = "option-category";
    const heading = document.createElement("h4");
    heading.textContent =
      groupKey === "general"
        ? (currentLang === "en" ? "Available on any build" : "Disponible en cualquier build")
        : (currentLang === "en" ? "Specific to your chassis" : "Específico para tu chasis");
    section.appendChild(heading);

    const list = document.createElement("div");
    list.className = "option-list";
    grouped[groupKey].forEach((opt) => {
      const row = document.createElement("label");
      row.className = "option-item";
      row.innerHTML = `
        <input type="checkbox" data-id="${opt.id}" ${selectedOptions.has(opt.id) ? "checked" : ""}>
        <div>
          <div class="option-name">${t(opt)}</div>
          <div class="option-meta">
            <span class="badge badge-${opt.stock ? "stock" : "sourced"}">${
              opt.stock
                ? (currentLang === "en" ? "In stock" : "En stock")
                : (currentLang === "en" ? "Sourced on request" : "Bajo pedido")
            }</span>
            <span class="badge badge-${opt.tier}">${
              currentLang === "en"
                ? opt.tier.charAt(0).toUpperCase() + opt.tier.slice(1)
                : opt.tier === "included" ? "Incluido" : opt.tier === "plus" ? "Plus" : "Premium"
            }</span>
          </div>
        </div>`;
      row.querySelector("input").addEventListener("change", (e) => {
        if (e.target.checked) selectedOptions.add(opt.id);
        else selectedOptions.delete(opt.id);
        renderSummaryStep();
      });
      list.appendChild(row);
    });
    section.appendChild(list);
    wrap.appendChild(section);
  });
}

function estimateRange() {
  let low = CONFIG.startingPriceUSD;
  let high = CONFIG.startingPriceUSD;
  selectedOptions.forEach((id) => {
    const opt = CONFIG_OPTIONS.find((o) => o.id === id);
    if (!opt) return;
    if (opt.tier === "included") { low += 0; high += 500; }
    if (opt.tier === "plus") { low += 800; high += 2500; }
    if (opt.tier === "premium") { low += 2500; high += 7000; }
  });
  return { low, high };
}

function formatUSD(n) {
  return "$" + n.toLocaleString("en-US");
}

function renderSummaryStep() {
  const chassisEl = document.getElementById("summaryChassis");
  const listEl = document.getElementById("summaryList");
  const rangeEl = document.getElementById("summaryRange");
  const waBtn = document.getElementById("summaryWhatsapp");
  if (!chassisEl || !listEl || !rangeEl || !waBtn) return;

  const chassisObj = CHASSIS_LIST.find((c) => c.id === selectedChassis);
  chassisEl.textContent = chassisObj ? t(chassisObj) : "—";

  listEl.innerHTML = "";
  if (selectedOptions.size === 0) {
    const li = document.createElement("li");
    li.textContent = currentLang === "en" ? "No extra options selected — base build." : "Sin opciones adicionales — build base.";
    listEl.appendChild(li);
  } else {
    selectedOptions.forEach((id) => {
      const opt = CONFIG_OPTIONS.find((o) => o.id === id);
      if (!opt) return;
      const li = document.createElement("li");
      li.textContent = "• " + t(opt);
      listEl.appendChild(li);
    });
  }

  const { low, high } = estimateRange();
  rangeEl.textContent = `${formatUSD(low)} – ${formatUSD(high)}`;

  const lines = [];
  lines.push(currentLang === "en" ? "Hi Amigo Vans — I built a spec on your site." : "Hola Amigo Vans — arme una especificacion en su sitio.");
  lines.push((currentLang === "en" ? "Chassis: " : "Chasis: ") + (chassisObj ? chassisObj.en : "—"));
  if (selectedOptions.size > 0) {
    lines.push(currentLang === "en" ? "Options:" : "Opciones:");
    selectedOptions.forEach((id) => {
      const opt = CONFIG_OPTIONS.find((o) => o.id === id);
      if (opt) lines.push("- " + opt.en);
    });
  }
  lines.push(`Rough range: ${formatUSD(low)} - ${formatUSD(high)}`);
  waBtn.href = whatsappLink(lines.join("\n"));
}

function goToStep(step) {
  document.querySelectorAll(".config-step").forEach((el) => el.classList.remove("active"));
  const target = document.querySelector(`.config-step[data-step="${step}"]`);
  if (target) target.classList.add("active");
  document.querySelectorAll(".config-progress span").forEach((el, i) => {
    el.classList.toggle("done", i < step);
  });
}

function initConfigurator() {
  if (!document.getElementById("chassisGrid")) return;
  renderChassisStep();
  renderOptionsStep();
  renderSummaryStep();
  goToStep(1);

  const toStep2 = document.getElementById("toStep2");
  const backTo1 = document.getElementById("backTo1");
  const toStep3 = document.getElementById("toStep3");
  const backTo2 = document.getElementById("backTo2");

  if (toStep2) toStep2.addEventListener("click", () => goToStep(2));
  if (backTo1) backTo1.addEventListener("click", () => goToStep(1));
  if (toStep3) toStep3.addEventListener("click", () => { renderSummaryStep(); goToStep(3); });
  if (backTo2) backTo2.addEventListener("click", () => goToStep(2));
}

/* ==========================================================================
   Catálogo de opciones (tabs paquetes / a la carte)
   ========================================================================== */
function initCatalogTabs() {
  const tabs = document.querySelectorAll(".catalog-tab");
  if (!tabs.length) return;
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      document.querySelectorAll(".catalog-panel").forEach((p) => p.classList.remove("active"));
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });
}

/* ==========================================================================
   FAQ acordeón
   ========================================================================== */
function initFaqAccordion() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", () => item.classList.toggle("open"));
  });
}

/* ==========================================================================
   Enlaces dinámicos (tel: / wa.me) con los datos de CONFIG
   ========================================================================== */
function applyConfigLinks() {
  document.querySelectorAll("[data-tel]").forEach((el) => {
    el.href = "tel:" + CONFIG.phoneHref;
    if (el.dataset.tel === "text") el.textContent = CONFIG.phoneDisplay;
  });
  document.querySelectorAll("[data-wa]").forEach((el) => {
    const pageName = document.body.dataset.page || "site";
    const defaultMsg =
      currentLang === "en"
        ? `Hi Amigo Vans — I'm on the ${pageName} page and want to talk.`
        : `Hola Amigo Vans — estoy en la pagina ${pageName} y quiero platicar.`;
    el.href = whatsappLink(el.dataset.wa === "custom" ? el.dataset.waMessage : defaultMsg);
  });
  document.querySelectorAll("[data-price]").forEach((el) => {
    el.textContent = formatUSD(CONFIG.startingPriceUSD);
  });
  document.querySelectorAll("[data-owner]").forEach((el) => {
    el.textContent = CONFIG.ownerName;
  });
  document.querySelectorAll("[data-domain]").forEach((el) => {
    el.textContent = CONFIG.domain;
  });
}

/* ==========================================================================
   Init
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  initNav();
  applyConfigLinks();
  initConfigurator();
  initCatalogTabs();
  initFaqAccordion();
  setLang("en");

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
