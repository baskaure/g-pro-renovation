/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

const HERO_IMAGE = "input/pro-g-renovation.jpg";

/* — Data — */
const SERVICES = [
  {
    num: "01",
    name: "Toiture",
    lede: "Réfection complète et réparation — du diagnostic à la finition, sur tous types de couvertures du Gard.",
    items: ["Tuiles canal, romanes, mécaniques", "Ardoise naturelle & fibrociment", "Bac acier & toiture zinc", "Faîtage, solin, noue"],
    featured: true,
    image: "input/expertise-toit-charpente-pro-g-renovations.png",
  },
  {
    num: "02",
    name: "Charpente",
    lede: "Structure solide et durable — pose, réparation, rénovation et traitement.",
    items: ["Charpente traditionnelle", "Charpente industrielle", "Réparation & renforcement", "Traitement du bois"],
    image: "input/toit-fenetre.jpg",
  },
  {
    num: "03",
    name: "Gouttière",
    lede: "Évacuation des eaux de pluie — pose et remplacement, large choix de matériaux.",
    items: ["Aluminium prélaqué", "Zinc naturel & cuivre", "Chéneaux & descentes", "Choix de couleurs"],
    image: "input/Pose-de-gouttiere-en-aluminium-Gard.webp",
  },
  {
    num: "04",
    name: "Zinguerie & Urgences",
    lede: "Habillages, couvertines, solins — et intervention rapide en cas de sinistre.",
    items: ["Réparation fuite & infiltration", "Dégât tempête", "Nettoyage & hydrofuge", "Diagnostic gratuit 24/7"],
    urgent: true,
    image: "input/societe-couverture-gard-nimes.jpg",
  },
];

const FOURNISSEURS = [
  { mark: "CM", name: "Chausson", desc: "Négoce de matériaux de référence — tuiles, couverture, isolation et accessoires de toiture.", tag: "Matériaux" },
  { mark: "Lr", name: "Larivière", desc: "Spécialiste couverture, zinguerie et étanchéité — zinc naturel, aluminium, gouttières haut de gamme.", tag: "Zinguerie" },
  { mark: "PP", name: "Point P", desc: "Réseau national — large gamme de produits pour la couverture, la charpente et le gros œuvre.", tag: "Distribution" },
];

const REALISATIONS = [
  { label: "Réfection complète", title: "Toiture tuiles canal neuves", lieu: "Nîmes · 2025", cls: "real-a", image: "input/expertise-toit-charpente-pro-g-renovations.png" },
  { label: "Charpente & Liteaux", title: "Pose structure traditionnelle", lieu: "Gard · 2025", cls: "real-b", image: "input/toit-fenetre.jpg" },
  { label: "Avant / Après", title: "Réhabilitation toiture ancienne", lieu: "Nîmes · 2024", cls: "real-c", image: "input/pro-g-renovation.jpg" },
  { label: "Nettoyage", title: "Démoussage & hydrofuge", lieu: "Marguerittes · 2025", cls: "real-d", image: "input/societe-couverture-gard-nimes.jpg" },
  { label: "Zinguerie", title: "Gouttières zinc sur mesure", lieu: "Nîmes · 2025", cls: "real-e", image: "input/Pose-de-gouttiere-en-aluminium-Gard.webp" },
];

const AVIS = [
  { who: "William M.", lieu: "Nîmes · Il y a 2 sem.", quote: "Ponctuel, très professionnel et sympathique. Gouttières en zinc posées avec soin, fuite identifiée et résolue rapidement.", init: "W" },
  { who: "Jessica M.", lieu: "Nîmes · Il y a 1 mois", quote: "Très bon couvreur. Intervenu pour restaurer ma toiture, travail propre et sérieux. Résultat très bien, je recommande.", init: "J" },
  { who: "Merry Jane R.", lieu: "Marseillan", quote: "Travail sérieux, soigné, réalisé dans les délais. Chantier propre, résultat impeccable. Très bon conseil.", init: "M" },
  { who: "Ethan M.", lieu: "Gard · Toiture", quote: "Plusieurs infiltrations après les intempéries. Diagnostic précis, rénovation du faîtage parfaitement étanche depuis.", init: "E" },
  { who: "Djin M.", lieu: "Gard · Devis", quote: "Entreprise très sérieuse, devis rapide et très complet. Un travail très bien réalisé en date et en heure.", init: "D" },
  { who: "Thufir L.", lieu: "Nîmes · Gouttières", quote: "Grande efficacité, respectueux et professionnel. Nos gouttières sont superbes et installées en un temps record.", init: "T" },
  { who: "Suez S.", lieu: "Nîmes · Tempête", quote: "Conseillée par des amis pour son sérieux. Le professionnalisme était au rendez-vous. Je recommande vivement.", init: "S" },
  { who: "Bianca L.", lieu: "Nîmes · Toiture", quote: "Très satisfaite. Réparation de toiture impeccable, pose de gouttière aluminium de qualité, très bons conseils.", init: "B" },
  { who: "Philippe B.", lieu: "Local Guide · Nîmes", quote: "Rénovation complète de la toiture de ma grange. Devis détaillé, délai tenu malgré quelques difficultés.", init: "P" },
  { who: "Hallet J.", lieu: "Nîmes · Nov. 2024", quote: "Les yeux fermés. Super réactivité, très ponctuel, avec un travail de qualité. Merci.", init: "H" },
];

const VILLES = [
  "Nîmes (30900)", "Marguerittes", "Milhaud", "Redessan", "Rodilhan", "Bouillargues",
  "Garons", "Générac", "Poulx", "Caveirac", "Beaucaire", "Uzès", "Alès", "Vergèze",
  "Gallargues", "Manduel", "Le Cailar", "Aimargues", "Calvisson", "Clarensac",
  "Aubord", "Bernis", "Caissargues", "Saint-Gervasy",
];

const NAV_LINKS = [
  { label: "Métiers", href: "#metiers" },
  { label: "Garanties", href: "#garanties" },
  { label: "Matériaux", href: "#materiaux" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

const TRAVAUX_TYPES = [
  "Réfection complète", "Réparation / fuite", "Charpente", "Gouttières",
  "Nettoyage & hydrofuge", "Diagnostic & devis",
];

/* — Icons — */
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{display:"inline-block",verticalAlign:"middle"}}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const IconCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconLock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const IconPhone = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:"inline-block",verticalAlign:"middle"}}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.98-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const Stars = ({ count = 5, size = 14 }) => (
  <span style={{display:"inline-flex",gap:2,alignItems:"center",color:"inherit"}}>
    {Array.from({length: count}).map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </span>
);

/* — Scroll animation — */

function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null);
  const cardRef      = useRef(null);
  const titleRef     = useRef(null);
  const rafRef       = useRef(null);
  const isMobileRef  = useRef(false);

  useEffect(() => {
    const checkMobile = () => { isMobileRef.current = window.innerWidth <= 768; };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const card      = cardRef.current;
    const title     = titleRef.current;
    if (!container || !card || !title) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect  = container.getBoundingClientRect();
        const elH   = container.offsetHeight;
        const viewH = window.innerHeight;
        const p     = Math.max(0, Math.min(1, -rect.top / Math.max(1, elH - viewH)));

        const mobile   = isMobileRef.current;
        const scaleMax = mobile ? 0.7  : 1.05;
        const scaleMin = mobile ? 0.9  : 1.0;
        const s        = scaleMax - (scaleMax - scaleMin) * p;

        card.style.transform  = `rotateX(${20 * (1 - p)}deg) scale(${s})`;
        title.style.transform = `translateY(${-80 * p}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-container">
      <div className="scroll-inner">
        <div ref={titleRef} className="scroll-title">
          {titleComponent}
        </div>
        <div
          ref={cardRef}
          className="scroll-card"
          style={{
            transform: "rotateX(20deg) scale(1.05)",
            boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
          }}
        >
          <div className="scroll-card-inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* — Components — */

function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span><span className="dot"></span> Astreinte 24h / 7j · Nîmes & Gard</span>
          <span className="hide-sm">Lun–Sam · 8h–19h</span>
        </div>
        <div className="topbar-right">
          <a href="tel:0659780775">↗ 06 59 78 07 75</a>
          <a href="#contact" className="hide-sm">WhatsApp</a>
          <a href="#contact" className="hide-sm">Devis gratuit</a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand">
          <img src="input/logo.png" alt="Pro G Rénovations" className="brand-logo" />
        </a>
        <div className="nav-links">
          {NAV_LINKS.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <div className="nav-cta">
          <a href="tel:0659780775" className="btn btn-ghost btn-sm">06 59 78 07 75</a>
          <a href="#contact" className="btn btn-primary btn-sm">Devis gratuit <span className="arrow">→</span></a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <ContainerScroll
        titleComponent={
          <div className="container">
            <div className="hero-top">
              <div className="hero-meta">
                <span className="eyebrow">▣ Depuis 1999 — Nîmes, Gard (30)</span>
                <p>Artisan Couvreur & Charpentier qualifié — des artisans qui connaissent chaque toit du Gard.</p>
              </div>
              <div className="hero-meta" style={{textAlign: "right", alignItems: "flex-end"}}>
                <span className="eyebrow">Garantie décennale n° 33956967</span>
                <p>Travaux conformes DTU · Astreinte fuite & tempête</p>
              </div>
            </div>

            <h1 className="hero-title">
              <span className="word-line">Toiture<span className="amp">,</span></span>
              <span className="word-line"><em>charpente</em></span>
              <span className="word-line">&amp; zinguerie<span style={{color:"var(--rouge)"}}>.</span></span>
            </h1>

            <div className="hero-cta-row" style={{marginTop: 32}}>
              <a href="#contact" className="btn btn-primary">Devis gratuit — être rappelé <span className="arrow">→</span></a>
              <a href="tel:0659780775" className="btn btn-ghost">Appeler · 06 59 78 07 75</a>
              <a href="https://wa.me/33659780775" className="btn btn-wa">WhatsApp <span className="arrow">→</span></a>
            </div>
          </div>
        }
      >
        <div className="hero-card-content">
          <img
            src={HERO_IMAGE}
            alt="Rénovation de toiture — Pro G Rénovations, couvreur charpentier dans le Gard"
            loading="eager"
          />
          <div className="hero-corner-tag"><span className="live"></span> CHANTIER EN COURS · NÎMES 30900</div>
          <div className="hero-floating-stats">
            <div className="stat-card">
              <div className="num">25<small>+</small></div>
              <div className="lbl">Ans d'expérience</div>
              <div className="desc">Implantés dans le Gard depuis plus de 25 ans.</div>
            </div>
            <div className="stat-card">
              <div className="num">10<small>ans</small></div>
              <div className="lbl">Garantie Décennale</div>
              <div className="desc">Tous travaux couverts · n° 33956967</div>
            </div>
          </div>
        </div>
      </ContainerScroll>

      <div className="container">
        <div className="hero-stats-strip">
          <div>
            <div className="num"><em>4,6</em>/5</div>
            <div className="lbl"><IconStar /> Google</div>
            <div className="sub">15 avis clients vérifiés</div>
          </div>
          <div>
            <div className="num">DTU</div>
            <div className="lbl">Norme professionnelle</div>
            <div className="sub">Documents Techniques Unifiés</div>
          </div>
          <div>
            <div className="num">24/7</div>
            <div className="lbl">Urgences toiture</div>
            <div className="sub">Astreinte fuite & tempête</div>
          </div>
          <div>
            <div className="num">50 <em>km</em></div>
            <div className="lbl">Zone d'intervention</div>
            <div className="sub">Nîmes · Gard · Hérault</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section" id="metiers">
      <div className="container">
        <div className="section-head">
          <h2 className="title">
            Nos <em>métiers</em>.<br/>
            Du diagnostic à la <span className="blu">réception</span> de chantier.
          </h2>
          <div className="right-cluster">
            <span className="eyebrow">▣ 04 spécialités</span>
            <p>Artisans qualifiés, nous intervenons sur toutes les typologies de toitures du Gard. Du conseil technique à la réception finale, vous avez un seul interlocuteur.</p>
            <a href="#contact" className="btn btn-dark btn-sm">Parler à un couvreur <span className="arrow">→</span></a>
          </div>
        </div>

        <div className="services-grid">
          {SERVICES.map(s => (
            <article key={s.num} className={`service-card ${s.featured ? "featured" : ""}`}>
              {s.urgent && <span className="badge-urg">● URGENCE 24/7</span>}
              <div className="picto">
                <img src={s.image} alt={`${s.name} — chantier Pro G Rénovations`} loading="lazy" />
              </div>
              <span className="num">{s.num} / 04</span>
              <h3>{s.name}</h3>
              <p className="lede">{s.lede}</p>
              <ul>
                {s.items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GarantiesSection() {
  return (
    <section className="section garanties" id="garanties">
      <div className="container">
        <div className="section-head">
          <h2 className="title">
            Tous nos travaux<br/>
            sont <em>garantis</em>.
          </h2>
          <div className="right-cluster">
            <span className="eyebrow" style={{color: "oklch(0.7 0.01 60)"}}>▣ Sécurité & conformité</span>
            <p style={{color: "oklch(0.78 0.01 60)"}}>Chaque intervention est réalisée dans les règles de l'art, conforme aux normes DTU en vigueur — condition indispensable à l'application de la garantie décennale.</p>
          </div>
        </div>

        <div className="garanties-grid">
          <article className="garantie-card accent">
            <div className="badge-icon">10</div>
            <h4>Garantie décennale</h4>
            <p>Couverture 10 ans sur tous les travaux de structure et d'étanchéité — vous êtes protégé.</p>
            <div className="ref">N° 33956967 · TOUS TRAVAUX</div>
          </article>
          <article className="garantie-card">
            <div className="badge-icon blu">DTU</div>
            <h4>Travaux conformes DTU</h4>
            <p>Toutes nos interventions respectent les Documents Techniques Unifiés — norme professionnelle obligatoire qui garantit la durabilité de votre toit.</p>
            <div className="ref">RÈGLES DE L'ART · NF</div>
          </article>
          <article className="garantie-card">
            <div className="badge-icon">24h</div>
            <h4>Astreinte urgence 24/7</h4>
            <p>Fuite, dégât tempête, tuile arrachée — nous intervenons pour sécuriser votre bien rapidement, 7 jours sur 7.</p>
            <div className="ref">NÎMES & GARD · 50 KM</div>
          </article>
        </div>
      </div>
    </section>
  );
}

function MateriauxSection() {
  return (
    <section className="section" id="materiaux" style={{paddingBottom: 60}}>
      <div className="container">
        <div className="section-head">
          <h2 className="title">
            Matériaux<br/>
            de <em>qualité</em>.
          </h2>
          <div className="right-cluster">
            <span className="eyebrow">▣ Fournisseurs de référence</span>
            <p>La durabilité de votre toiture commence par le choix des matériaux. Nous nous approvisionnons exclusivement auprès de distributeurs reconnus, adaptés au climat méditerranéen du Gard.</p>
          </div>
        </div>

        <div className="materiaux-grid">
          <div className="intro" style={{background: "var(--creme-deep)", borderRadius: "var(--r-xl)"}}>
            <span className="eyebrow">▤ Sélection</span>
            <h3 className="serif-it" style={{fontSize: 32, lineHeight: 1.05}}>
              Tuiles, ardoise, zinc, aluminium, gouttières, isolants.
            </h3>
            <p style={{fontSize: 13.5, color: "var(--ink-mid)", lineHeight: 1.6}}>
              Chaque matériau est sélectionné pour sa performance, sa longévité et son esthétique — en accord avec les spécificités architecturales de votre bien.
            </p>
          </div>
          {FOURNISSEURS.map(f => (
            <article key={f.name} className="fournisseur">
              <div className="logo-box">{f.mark}</div>
              <h5>{f.name}</h5>
              <p>{f.desc}</p>
              <span className="tag">▸ {f.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* — Zoom Parallax — */

// Scattered positions for 5 photos around the central featured image
const PHOTO_LAYOUTS = [
  // index 0 = Réfection complète — center, featured, zooms to fill screen
  { top: "50%",  left: "50%",  width: "34%", rotate:  "0deg", featured: true },
  { top: "10%",  left: "4%",   width: "22%", rotate: "-5deg"  }, // Charpente
  { top: "56%",  left: "5%",   width: "20%", rotate:  "4deg"  }, // Avant/Après
  { top:  "8%",  right: "5%",  width: "23%", rotate:  "5deg"  }, // Démoussage
  { top: "57%",  right: "4%",  width: "24%", rotate: "-3.5deg"}, // Gouttières
];

function ZoomParallax({ items }) {
  const containerRef = useRef(null);
  const featuredRef  = useRef(null);
  const rafRef       = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const featured  = featuredRef.current;
    if (!container || !featured) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const h    = container.offsetHeight;
        const vh   = window.innerHeight;
        const rawP = Math.max(0, Math.min(1, -rect.top / Math.max(1, h - vh)));
        // Zoom completes in first 40% of scroll — feels fast
        const p    = Math.min(1, rawP * 2.5);
        // Ease-out: snappy start, smooth landing
        const e    = 1 - Math.pow(1 - p, 2);

        featured.style.transform = `translate(-50%, -50%) scale(${1 + e * 0.7})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "180vh" }}>
      <div className="zp-sticky">
        {items.slice(0, 5).map((r, i) => {
          const { featured, rotate, ...pos } = PHOTO_LAYOUTS[i];
          return (
            <div
              key={r.title}
              ref={featured ? featuredRef : null}
              className={`zp-photo${featured ? " zp-featured" : ""}`}
              style={{
                position: "absolute",
                ...pos,
                zIndex: featured ? 10 : 2,
                transform: featured
                  ? "translate(-50%, -50%) scale(1)"
                  : `rotate(${rotate})`,
                transformOrigin: "center center",
              }}
            >
              <img src={r.image} alt={r.title} loading="lazy" />
              <div className="zp-label">▸ {r.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RealisationsSection() {
  return (
    <section className="section" id="realisations" style={{paddingBottom: 0}}>
      <div className="container">
        <div className="section-head">
          <h2 className="title">
            Réalisations<br/>
            <em>récentes</em>.
          </h2>
          <div className="right-cluster">
            <span className="eyebrow">▣ Nos chantiers · Gard (30)</span>
            <p>Toiture, charpente, gouttières — quelques exemples de nos interventions récentes à Nîmes et dans les villages alentours.</p>
            <a href="#contact" className="btn btn-dark btn-sm">Parler de votre projet <span className="arrow">→</span></a>
          </div>
        </div>
      </div>
      <ZoomParallax items={REALISATIONS} />
    </section>
  );
}

function AvisSection() {
  const loop = [...AVIS, ...AVIS];
  return (
    <section className="section" id="avis" style={{background: "var(--creme-deep)"}}>
      <div className="container">
        <div className="section-head">
          <h2 className="title">
            La confiance<br/>
            de nos <em>clients</em>.
          </h2>
          <div className="right-cluster">
            <span className="eyebrow">▣ Avis Google · vérifiés</span>
            <p>Tous vérifiés, tous authentiques — la satisfaction de nos clients est notre meilleure carte de visite.</p>
          </div>
        </div>

        <div className="avis-summary">
          <div className="num-big"><em>4,6</em>/5</div>
          <div className="meta-stats">
            <div className="stars-big"><Stars count={5} size={22} /></div>
            <strong>15 avis vérifiés</strong>
            <span>NÎMES · MARSEILLAN · GARD</span>
          </div>
          <div className="google-badge">
            <span className="g-dot"></span> AVIS GOOGLE
          </div>
        </div>

        <div className="avis-marquee-wrap">
          <div className="avis-track">
            {loop.map((a, i) => (
              <article key={i} className="avis-card">
                <div className="stars"><Stars count={5} size={13} /></div>
                <p className="quote">"{a.quote}"</p>
                <div className="person">
                  <div className="avatar">{a.init}</div>
                  <div className="who">
                    <strong>{a.who}</strong>
                    <small>{a.lieu}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ZoneSection() {
  const PINS = [
    { x: 50, y: 50, label: "Nîmes", center: true },
    { x: 26, y: 30, label: "Alès" },
    { x: 36, y: 38, label: "Uzès" },
    { x: 70, y: 32, label: "Avignon" },
    { x: 72, y: 48, label: "Beaucaire" },
    { x: 56, y: 60, label: "Marguerittes" },
    { x: 42, y: 60, label: "Milhaud" },
    { x: 60, y: 70, label: "Vauvert" },
    { x: 24, y: 65, label: "Calvisson" },
    { x: 38, y: 76, label: "Aimargues" },
    { x: 70, y: 78, label: "Le Cailar" },
    { x: 18, y: 50, label: "Anduze" },
  ];

  return (
    <section className="section" id="zone">
      <div className="container">
        <div className="section-head">
          <h2 className="title">
            Couvreur à Nîmes<br/>
            <em>&</em> dans le <span className="blu">Gard</span>.
          </h2>
          <div className="right-cluster">
            <span className="eyebrow">▣ 50 km autour de Nîmes</span>
            <p>Nous intervenons sur Nîmes et l'ensemble du département du Gard (30) — particuliers, copropriétés et professionnels.</p>
          </div>
        </div>

        <div className="zone-wrap">
          <div className="zone-text">
            <span className="eyebrow" style={{color: "oklch(1 0 0 / 0.7)"}}>▣ COMMUNES DESSERVIES</span>
            <h3>+ de 60 communes<br/>dans le Gard.</h3>
            <p>Quartiers de Nîmes : Montaury, Pissevin, Mas de Mingue, Courbessac, Chemin Bas d'Avignon, route d'Uzès, les Hauts de Nîmes — et tous les villages alentours.</p>
            <div className="city-cloud">
              {VILLES.map(v => <span key={v}>{v}</span>)}
              <span style={{background: "white", color: "var(--ink)", fontWeight: 500}}>+ 40 communes</span>
            </div>
            <div className="more">▸ NÎMES · GARD (30) · HÉRAULT · 50 KM</div>
          </div>
          <div className="zone-map">
            <svg className="map-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="oklch(0.86 0.012 60)" strokeWidth="0.2"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)"/>
              <path d="M -5 85 Q 25 88 50 92 T 105 90 L 105 105 L -5 105 Z" fill="oklch(0.92 0.04 220)" opacity="0.4"/>
              <text x="86" y="98" fontSize="2.4" fill="oklch(0.4 0.06 220)" fontFamily="JetBrains Mono">MÉDITERRANÉE</text>
              <circle cx="50" cy="50" r="32" fill="none" stroke="oklch(0.52 0.19 27)" strokeWidth="0.3" strokeDasharray="0.8 0.8" opacity="0.6"/>
              <text x="51" y="20" fontSize="2" fill="oklch(0.52 0.19 27)" fontFamily="JetBrains Mono">50 KM</text>
            </svg>
            {PINS.map(p => (
              <div key={p.label} className={`map-pin ${p.center ? "center" : ""}`} style={{left: `${p.x}%`, top: `${p.y}%`}}>
                <span className="lbl">{p.label}</span>
                <div className="dot"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [travail, setTravail] = useState(TRAVAUX_TYPES[0]);
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <h2 className="title">
            Devis <em>gratuit</em><br/>
            on vous <span className="blu">rappelle</span>.
          </h2>
          <div className="right-cluster">
            <span className="eyebrow">▣ Réponse sous 24h</span>
            <p>Remplissez le formulaire, nous revenons vers vous sous 24h. Ou contactez-nous directement — nous répondons rapidement.</p>
          </div>
        </div>

        <div className="contact-wrap">
          <div className="contact-info">
            <div className="contact-block">
              <span className="lbl">▸ Téléphone & WhatsApp</span>
              <div className="val"><a href="tel:0659780775">06 59 78 07 75</a></div>
              <span className="sub">Lun–Sam · 8h–19h · Urgences 24/7</span>
            </div>
            <div className="contact-block">
              <span className="lbl">▸ Email</span>
              <div className="val" style={{fontSize: 22, fontStyle: "normal", fontFamily: "var(--font-sans)", fontWeight: 400}}>
                <a href="mailto:progrenovationsea@gmail.com">progrenovationsea@gmail.com</a>
              </div>
            </div>
            <div className="contact-block">
              <span className="lbl">▸ Adresse</span>
              <div className="val" style={{fontSize: 22, fontStyle: "normal", fontFamily: "var(--font-sans)", fontWeight: 400}}>
                65 rue du Moulin Vedel<br/>30900 Nîmes
              </div>
            </div>
            <div className="contact-block">
              <span className="lbl">▸ Légal</span>
              <span className="sub" style={{fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em"}}>
                RCS 911 627 370<br/>
                Garantie décennale n° 33956967
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-head">
              <h3>Être rappelé</h3>
              <p>Sans engagement · Devis gratuit · Données confidentielles <IconLock /></p>
            </div>

            {sent && (
              <div className="form-success">
                <IconCheck /> Merci ! Nous vous rappelons sous 24h.
              </div>
            )}

            <div className="form-row">
              <div className="field">
                <label>Prénom <span className="req">*</span></label>
                <input type="text" required placeholder="Jean" />
              </div>
              <div className="field">
                <label>Nom <span className="req">*</span></label>
                <input type="text" required placeholder="Dupont" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>Téléphone <span className="req">*</span></label>
                <input type="tel" required placeholder="06 ..." />
              </div>
              <div className="field">
                <label>Ville</label>
                <input type="text" placeholder="Nîmes" />
              </div>
            </div>
            <div className="form-row single">
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="jean.dupont@email.fr" />
              </div>
            </div>
            <div className="form-row single">
              <div className="field">
                <label>Type de travaux</label>
                <div className="chips">
                  {TRAVAUX_TYPES.map(t => (
                    <button type="button" key={t} className={`chip ${travail === t ? "active" : ""}`} onClick={() => setTravail(t)}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-row single">
              <div className="field">
                <label>Message (optionnel)</label>
                <textarea placeholder="Décrivez votre projet…"></textarea>
              </div>
            </div>

            <div className="form-submit">
              <div className="reassure">
                <span><IconCheck /> DEVIS GRATUIT &nbsp;<IconCheck /> SANS ENGAGEMENT</span>
                <span><IconLock /> DONNÉES CONFIDENTIELLES</span>
              </div>
              <button type="submit" className="btn btn-primary">
                Demander à être rappelé <span className="arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="input/logo.png" alt="Pro G Rénovations" className="footer-logo" />
            <p>Artisan Couvreur Charpentier à Nîmes depuis plus de 25 ans. Toiture, charpente, gouttières, zinguerie & urgences — dans tout le Gard.</p>
          </div>
          <div>
            <h6>Métiers</h6>
            <ul>
              <li><a href="#metiers">Toiture</a></li>
              <li><a href="#metiers">Charpente</a></li>
              <li><a href="#metiers">Gouttières & Zinguerie</a></li>
              <li><a href="#metiers">Isolation des combles</a></li>
              <li><a href="#metiers">Urgences fuite</a></li>
            </ul>
          </div>
          <div>
            <h6>Société</h6>
            <ul>
              <li><a href="#garanties">Garanties</a></li>
              <li><a href="#materiaux">Matériaux</a></li>
              <li><a href="#realisations">Réalisations</a></li>
              <li><a href="#avis">Avis clients</a></li>
              <li><a href="#zone">Zone d'intervention</a></li>
            </ul>
          </div>
          <div>
            <h6>Contact</h6>
            <ul>
              <li><a href="tel:0659780775">06 59 78 07 75</a></li>
              <li><a href="mailto:progrenovationsea@gmail.com">progrenovationsea@gmail.com</a></li>
              <li>65 rue du Moulin Vedel</li>
              <li>30900 Nîmes</li>
              <li>Lun–Sam · 8h–19h</li>
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <span>© 2026 PRO G RÉNOVATIONS · RCS 911 627 370 · DÉCENNALE 33956967</span>
          <div className="legal">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* — App root — */
function App() {
  return (
    <>
      <Topbar />
      <Nav />
      <Hero />
      <ServicesSection />
      <GarantiesSection />
      <MateriauxSection />
      <RealisationsSection />
      <AvisSection />
      <ZoneSection />
      <ContactSection />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
