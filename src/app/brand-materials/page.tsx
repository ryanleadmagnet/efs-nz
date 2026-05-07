import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';

export const metadata: Metadata = {
    title: 'Brand Materials',
    description:
        'Download official EFS Solar brand assets — logos in PNG, SVG and PDF, brand fonts, and the full brand guidelines document.',
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const BASE = '/brand-materials';

type LogoVariant = {
    id: string;
    label: string;
    description: string;
    preview: string; // shown inside the card
    bgClass: 'light' | 'dark';
    png: string;
    svg: string;
    pdf: string;
};

const logos: LogoVariant[] = [
    {
        id: 'vertical-black',
        label: 'Vertical — Black',
        description: 'Primary full-black vertical lockup for use on white/light backgrounds.',
        preview: `${BASE}/PNG/vertical-black.png`,
        bgClass: 'light',
        png: `${BASE}/PNG/vertical-black.png`,
        svg: `${BASE}/SVG/vertical-black.svg`,
        pdf: `${BASE}/PDF/vertical-black.pdf`,
    },
    {
        id: 'vertical-color',
        label: 'Vertical — Colour',
        description: 'Full-colour vertical lockup for use on white/light backgrounds.',
        preview: `${BASE}/PNG/vertical-color.png`,
        bgClass: 'light',
        png: `${BASE}/PNG/vertical-color.png`,
        svg: `${BASE}/SVG/vertical-color.svg`,
        pdf: `${BASE}/PDF/vertical-color.pdf`,
    },
    {
        id: 'vertical-white',
        label: 'Vertical — White',
        description: 'Single-colour white version for dark/coloured backgrounds.',
        preview: `${BASE}/PNG/vertical-white.png`,
        bgClass: 'dark',
        png: `${BASE}/PNG/vertical-white.png`,
        svg: `${BASE}/SVG/vertical-white.svg`,
        pdf: `${BASE}/PDF/vertical-white.pdf`,
    },
    {
        id: 'landscape-black',
        label: 'Landscape — Black',
        description: 'Primary full-black horizontal lockup ideal for headers and banners.',
        preview: `${BASE}/PNG/landscape-black.png`,
        bgClass: 'light',
        png: `${BASE}/PNG/landscape-black.png`,
        svg: `${BASE}/SVG/landscape-black.svg`,
        pdf: `${BASE}/PDF/landscape-black.pdf`,
    },
    {
        id: 'landscape-color',
        label: 'Landscape — Colour',
        description: 'Full-colour horizontal lockup ideal for headers and banners.',
        preview: `${BASE}/PNG/landscape-color.png`,
        bgClass: 'light',
        png: `${BASE}/PNG/landscape-color.png`,
        svg: `${BASE}/SVG/landscape-color.svg`,
        pdf: `${BASE}/PDF/landscape-color.pdf`,
    },
    {
        id: 'landscape-white',
        label: 'Landscape — White',
        description: 'White horizontal lockup for dark and coloured backgrounds.',
        preview: `${BASE}/PNG/landscape-white.png`,
        bgClass: 'dark',
        png: `${BASE}/PNG/landscape-white.png`,
        svg: `${BASE}/SVG/landscape-white.svg`,
        pdf: `${BASE}/PDF/landscape-white.pdf`,
    },
    {
        id: 'emblem-black',
        label: 'Emblem — Black',
        description: 'Primary full-black standalone emblem / icon mark for compact placements.',
        preview: `${BASE}/PNG/emblem-black.png`,
        bgClass: 'light',
        png: `${BASE}/PNG/emblem-black.png`,
        svg: `${BASE}/SVG/emblem-black.svg`,
        pdf: `${BASE}/PDF/emblem-black.pdf`,
    },
    {
        id: 'emblem-color',
        label: 'Emblem — Colour',
        description: 'Standalone colour emblem / icon mark for compact placements.',
        preview: `${BASE}/PNG/emblem-color.png`,
        bgClass: 'light',
        png: `${BASE}/PNG/emblem-color.png`,
        svg: `${BASE}/SVG/emblem-color.svg`,
        pdf: `${BASE}/PDF/emblem-color.pdf`,
    },
    {
        id: 'emblem-white',
        label: 'Emblem — White',
        description: 'White emblem for use on dark or primary-brand backgrounds.',
        preview: `${BASE}/PNG/emblem-white.png`,
        bgClass: 'dark',
        png: `${BASE}/PNG/emblem-white.png`,
        svg: `${BASE}/SVG/emblem-white.svg`,
        pdf: `${BASE}/PDF/emblem-white.pdf`,
    },
];

type Font = { name: string; description: string; zip: string };

const fonts: Font[] = [
    {
        name: 'Gotham',
        description: 'Our primary typeface — geometric, modern and versatile.',
        zip: `${BASE}/Font/Gotham.zip`,
    },
    {
        name: 'Korataki',
        description: 'Bold, energetic display face used in hero headlines.',
        zip: `${BASE}/Font/Korataki.zip`,
    },
    {
        name: 'Rajdhani',
        description: 'Clean, legible sans-serif for body copy and UI text.',
        zip: `${BASE}/Font/Rajdhani.zip`,
    },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export default function BrandMaterialsPage() {
    return (
        <>
            <Header alwaysSticky />

            <main>
                {/* ── Intro ── */}
                <section className="bm-intro">
                    <div className="container bm-intro__inner">
                        <h2 className="bm-section-title">Download Brand Assets</h2>
                        <p className="bm-intro__copy">
                            Access official EFS Solar logos, typography and brand guidelines.
                            Please follow the guidelines when applying these assets across any
                            medium — digital, print or out-of-home.
                        </p>
                    </div>
                </section>

                {/* ── Logo grid ── */}
                <section className="bm-logos">
                    <div className="container">
                        <div className="bm-block-header">
                            <DownloadIcon className="bm-block-header__icon" />
                            <h2 className="bm-block-header__title">Logos</h2>
                        </div>

                        <div className="bm-logo-grid">
                            {logos.map((logo) => (
                                <LogoCard key={logo.id} logo={logo} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Fonts + Guidelines ── */}
                <section className="bm-extras">
                    <div className="container bm-extras__grid">

                        {/* Typography */}
                        <div className="bm-extras__card">
                            <div className="bm-extras__card-header">
                                <TypeIcon />
                                <h2 className="bm-block-header__title">Typography</h2>
                            </div>
                            <p className="bm-extras__desc">
                                Download the complete font families used across the EFS Solar brand
                                identity. Each face ships with multiple weights.
                            </p>

                            <ul className="bm-font-list">
                                {fonts.map((font) => (
                                    <li key={font.name} className="bm-font-item">
                                        <div className="bm-font-item__info">
                                            <span className="bm-font-item__name">{font.name}</span>
                                            <span className="bm-font-item__desc">{font.description}</span>
                                        </div>
                                        <a
                                            href={font.zip}
                                            download
                                            className="bm-dl-pill"
                                            aria-label={`Download ${font.name} font ZIP`}
                                        >
                                            <ZipIcon />
                                            ZIP
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Brand Guidelines */}
                        <div className="bm-extras__card bm-extras__card--guidelines">
                            <div className="bm-extras__card-header">
                                <GuidelinesIcon />
                                <h2 className="bm-block-header__title">Brand Guidelines</h2>
                            </div>
                            <p className="bm-extras__desc">
                                A comprehensive reference covering logo usage, colour palettes,
                                typography hierarchy, photography style and do&apos;s &amp;
                                don&apos;ts — everything to ensure consistent brand application.
                            </p>

                            <div className="bm-guide-preview">
                                <div className="bm-guide-preview__icon-wrap">
                                    <PdfIcon />
                                </div>
                                <div>
                                    <p className="bm-guide-preview__name">
                                        EFS Solar — Brand Guidelines
                                    </p>
                                    <p className="bm-guide-preview__meta">PDF Document</p>
                                </div>
                            </div>

                            <a
                                href={`${BASE}/PDF/EFS Solar - Branding Guide Lines.pdf`}
                                download
                                className="btn btn-primary bm-guide-btn"
                            >
                                <span className="btn-text">Download Guidelines</span>
                                <span className="btn-icon">
                                    <DownloadIcon />
                                </span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── Usage note ── */}
                <section className="bm-notice">
                    <div className="container bm-notice__inner">
                        <InfoIcon />
                        <p>
                            These assets are for approved partners and media use only. For
                            permission requests please contact{' '}
                            <a href="mailto:support@efssolar.co.nz">support@efssolar.co.nz</a>.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />

            {/* ── Scoped styles ── */}
            <style>{`
                /* ── Tokens ── */
                :root {
                    --bm-primary: #000000;
                    --bm-accent:  #f59f00;
                    --bm-light:   #f4f6fb;
                    --bm-dark:    #1a2540;
                    --bm-border:  #e2e8f0;
                    --bm-text:    #374151;
                    --bm-muted:   #6b7280;
                    --bm-radius:  14px;
                    --bm-shadow:  0 4px 24px rgba(0,0,0,.08);
                }

                /* ── Intro ── */
                .bm-intro {
                    background: #fff;
                    padding: 100px 20px 48px;
                    text-align: center;
                }
                .bm-intro__inner { max-width: 700px; margin: 0 auto; }
                .bm-section-title {
                    font-family: var(--font-heading);
                    font-size: clamp(28px, 4vw, 44px);
                    font-weight: 800;
                    color: var(--bm-primary);
                    text-transform: uppercase;
                    letter-spacing: .5px;
                    margin-bottom: 16px;
                }
                .bm-intro__copy {
                    font-size: 17px;
                    color: var(--bm-muted);
                    line-height: 1.7;
                }

                /* ── Block header ── */
                .bm-block-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 36px;
                }
                .bm-block-header__icon { color: var(--bm-primary); flex-shrink: 0; }
                .bm-block-header__title {
                    font-family: var(--font-heading);
                    font-size: clamp(22px, 3vw, 32px);
                    font-weight: 800;
                    color: var(--bm-primary);
                    text-transform: uppercase;
                    margin: 0;
                }

                /* ── Logo section ── */
                .bm-logos {
                    background: var(--bm-light);
                    padding: 72px 20px;
                }
                .bm-logos .container { max-width: 1200px; margin: 0 auto; }

                /* ── Logo grid ── */
                .bm-logo-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 28px;
                }

                /* ── Logo card ── */
                .bm-logo-card {
                    background: #fff;
                    border: 1px solid var(--bm-border);
                    border-radius: var(--bm-radius);
                    overflow: hidden;
                    box-shadow: var(--bm-shadow);
                    transition: transform .25s ease, box-shadow .25s ease;
                    display: flex;
                    flex-direction: column;
                }
                .bm-logo-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 36px rgba(0,46,110,.14);
                }

                /* preview area */
                .bm-logo-card__preview {
                    height: 180px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 24px;
                }
                .bm-logo-card__preview--light { background: #f8f9fc; }
                .bm-logo-card__preview--dark  { background: var(--bm-primary); }

                .bm-logo-card__preview img {
                    max-width: 100%;
                    max-height: 130px;
                    object-fit: contain;
                }

                /* card body */
                .bm-logo-card__body {
                    padding: 20px 24px 24px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .bm-logo-card__label {
                    font-family: var(--font-heading);
                    font-size: 17px;
                    font-weight: 700;
                    color: var(--bm-primary);
                    margin-bottom: 6px;
                }
                .bm-logo-card__desc {
                    font-size: 13.5px;
                    color: var(--bm-muted);
                    line-height: 1.6;
                    margin-bottom: 20px;
                    flex: 1;
                }

                /* download pills */
                .bm-logo-card__downloads {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                .bm-dl-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 7px 14px;
                    border: 1.5px solid var(--bm-primary);
                    color: var(--bm-primary);
                    font-size: 12.5px;
                    font-weight: 700;
                    border-radius: 100px;
                    text-decoration: none;
                    letter-spacing: .4px;
                    transition: background .2s, color .2s;
                    line-height: 1;
                }
                .bm-dl-pill:hover {
                    background: var(--bm-primary);
                    color: #fff;
                }
                .bm-dl-pill svg { width: 13px; height: 13px; flex-shrink: 0; }

                /* ── Extras (fonts + guidelines) ── */
                .bm-extras {
                    background: #fff;
                    padding: 72px 20px;
                }
                .bm-extras__grid {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 32px;
                }
                @media (max-width: 820px) {
                    .bm-extras__grid { grid-template-columns: 1fr; }
                }

                .bm-extras__card {
                    background: var(--bm-light);
                    border: 1px solid var(--bm-border);
                    border-radius: var(--bm-radius);
                    padding: 36px 32px;
                    box-shadow: var(--bm-shadow);
                    display: flex;
                    flex-direction: column;
                }
                .bm-extras__card-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 16px;
                    color: var(--bm-primary);
                }
                .bm-extras__card-header svg { flex-shrink: 0; }
                .bm-extras__desc {
                    font-size: 15px;
                    color: var(--bm-muted);
                    line-height: 1.7;
                    margin-bottom: 28px;
                }

                /* font list */
                .bm-font-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
                .bm-font-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    background: #fff;
                    border: 1px solid var(--bm-border);
                    border-radius: 10px;
                    padding: 14px 18px;
                }
                .bm-font-item__info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
                .bm-font-item__name {
                    font-family: var(--font-heading);
                    font-size: 15px;
                    font-weight: 700;
                    color: var(--bm-primary);
                }
                .bm-font-item__desc {
                    font-size: 12.5px;
                    color: var(--bm-muted);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* guidelines card */
                .bm-extras__card--guidelines { justify-content: space-between; }
                .bm-guide-preview {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    background: #fff;
                    border: 1px solid var(--bm-border);
                    border-radius: 10px;
                    padding: 16px 20px;
                    margin-bottom: 28px;
                }
                .bm-guide-preview__icon-wrap {
                    width: 48px;
                    height: 48px;
                    background: #fdecea;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #e53935;
                    flex-shrink: 0;
                }
                .bm-guide-preview__name {
                    font-family: var(--font-heading);
                    font-size: 14px;
                    font-weight: 700;
                    color: var(--bm-primary);
                    margin: 0 0 2px;
                }
                .bm-guide-preview__meta { font-size: 12px; color: var(--bm-muted); margin: 0; }

                .bm-guide-btn {
                    display: flex !important;
                    width: 100%;
                    justify-content: center;
                }

                /* ── Notice ── */
                .bm-notice {
                    background: #eef2fb;
                    border-top: 1px solid var(--bm-border);
                    padding: 28px 20px;
                }
                .bm-notice__inner {
                    max-width: 860px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    font-size: 14px;
                    color: var(--bm-text);
                    line-height: 1.65;
                }
                .bm-notice__inner svg { flex-shrink: 0; color: var(--bm-primary); }
                .bm-notice__inner a { color: var(--bm-primary); font-weight: 600; }

                /* ── Responsive tweaks ── */
                @media (max-width: 600px) {
                    .bm-logo-grid { grid-template-columns: 1fr; }
                    .bm-extras__card { padding: 28px 20px; }
                    .bm-font-item__desc { display: none; }
                }
            `}</style>
        </>
    );
}

/* ── Sub-components ── */

function LogoCard({ logo }: { logo: LogoVariant }) {
    return (
        <article className="bm-logo-card" id={`logo-${logo.id}`}>
            <div className={`bm-logo-card__preview bm-logo-card__preview--${logo.bgClass}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.preview} alt={logo.label} />
            </div>

            <div className="bm-logo-card__body">
                <h3 className="bm-logo-card__label">{logo.label}</h3>
                <p className="bm-logo-card__desc">{logo.description}</p>

                <div className="bm-logo-card__downloads">
                    <a href={logo.png} download className="bm-dl-pill" aria-label={`Download ${logo.label} PNG`}>
                        <DownloadIcon /> PNG
                    </a>
                    <a href={logo.svg} download className="bm-dl-pill" aria-label={`Download ${logo.label} SVG`}>
                        <DownloadIcon /> SVG
                    </a>
                    <a href={logo.pdf} download className="bm-dl-pill" aria-label={`Download ${logo.label} PDF`}>
                        <DownloadIcon /> PDF
                    </a>
                </div>
            </div>
        </article>
    );
}

/* ── Icons ── */

function DownloadIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
            <path d="M13 2v10.59l3.3-3.3 1.4 1.41L12 16.41l-5.7-5.71 1.4-1.41L11 12.59V2h2zM5 20v-2h14v2H5z" />
        </svg>
    );
}

function TypeIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden>
            <path d="M9.93 13.5h4.14L12 7.98 9.93 13.5zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
        </svg>
    );
}

function GuidelinesIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" width="28" height="28" aria-hidden>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
        </svg>
    );
}

function PdfIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden>
            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" />
        </svg>
    );
}

function ZipIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" aria-hidden>
            <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4 6h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2V8h6v2h-2v2z" />
        </svg>
    );
}

function InfoIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
    );
}
