import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';

export const metadata: Metadata = {
    title: 'GoodWe Solar Inverters across New Zealand',
    description: 'EFS Solar supplies and installs GoodWe solar inverters across New Zealand. Reliable, smart, and affordable solar inverter solutions for homes and businesses.',
    keywords: ['GoodWe inverter QLD', 'GoodWe solar NSW', 'solar inverter installation New Zealand', 'GoodWe installer New Zealand'],
    alternates: { canonical: 'https://www.efssolar.co.nz/technology/goodwe' },
    openGraph: { title: 'EFS Solar | GoodWe Solar Inverters across New Zealand', description: 'EFS Solar installs GoodWe inverters across New Zealand.', url: 'https://www.efssolar.co.nz/technology/goodwe' },
};

export default function GoodwePage() {
    const features1 = [
        {
            title: 'Higher reliability',
            desc: 'Extended 10-year warranties available with SEMS portal registration.',
        },
        {
            title: 'Battery-ready technology',
            desc: 'Upgradeable hybrid inverters for future energy storage integration.',
        },
        {
            title: 'Future-proof design',
            desc: 'Unlock codes enable battery upgrades without inverter replacement.',
        },
        {
            title: 'Better performance in extreme conditions',
            desc: 'Operates from -25°C to +60°C with natural cooling for the New Zealand climate.',
        },
        {
            title: 'Lower power loss',
            desc: 'Up to 98.6% conversion efficiency maximizes solar energy harvest.',
        },
        {
            title: 'Smart monitoring included',
            desc: 'SEMS portal provides real-time performance tracking and system management.',
        },
        {
            title: 'Built to last',
            desc: "Engineered and designed to withstand New Zealand's harsh outdoor conditions.",
        },
    ];

    const features2 = [
        {
            title: 'Optimized Performance',
            desc: '1C charge/discharge for rapid energy cycling. Fanless design for quiet operation, noise <30dB. 20A per string & 200% PV oversizing.',
        },
        {
            title: 'Flexible & Adaptable Applications',
            desc: 'Dual output ports for simplified installation & off-grid capability. Flexible battery mixing with different capacity or old & new batteries. Support full backup load with 63A×5 output.',
        },
        {
            title: 'Superb Safety & Reliability',
            desc: 'Advanced 6-layer safety protection. Heating mode ensures reliable performance even in -20ºC. AI-driven AFCI 3.0 for safety.',
        },
        {
            title: 'Smart Control & Monitoring',
            desc: 'Seamless switching to backup <4ms. One-click upgrade & one-click configuration.',
        },
    ];

    return (
        <>
            <Header />
            <main>
                {/* ── Hero Section ──────────────────────────────── */}
                <section
                    className="cs-hero"
                    style={{ backgroundImage: "url('/assets/6379037461200557617739536-copy.webp')" }}
                >
                    <div className="cs-hero-overlay" />
                    <div className="cs-hero-content">
                        <span className="cs-hero-breadcrumb animate-on-scroll">Technology &gt;</span>
                        <p className="cs-hero-sub animate-on-scroll">BATTERY-READY SOLAR PARTNER</p>
                        <h1 className="cs-hero-title animate-on-scroll">Goodwe</h1>
                    </div>
                </section>

                {/* ── White card (overlaps hero) ────────────────── */}
                <section className="cs-card-section">
                    <div className="cs-card">

                        {/* Logo row */}
                        <div className="cs-logo-row animate-on-scroll">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/Asset-22logo.svg"
                                alt="GoodWe logo"
                                className="cs-brand-logo"
                            />
                        </div>

                        {/* Product spotlight 1 ── 2 cols: img | text */}
                        <div className="cs-spotlight">
                            <div
                                className="cs-spotlight-bg"
                                style={{ backgroundImage: "url('/assets/Asset-14sungrow.webp')" }}
                            >
                                <div className="cs-spotlight-inner">
                                    <div className="cs-spotlight-img animate-on-scroll">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/13-33-copy.webp"
                                            alt="GoodWe DNS/MS Series Inverter"
                                        />
                                    </div>
                                    <div className="cs-spotlight-text animate-on-scroll delay-1">
                                        <h2 style={{ color: '#ffffff' }}>DNS/MS Series</h2>
                                        <h3 style={{ color: '#ffffff' }}>Solar Inverters</h3>
                                        <p>
                                            GoodWe Solar Inverters are manufactured with battery-ready hybrid technology and quality tested to ensure only premium inverters are used for installation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature grid 1 */}
                        <div className="cs-features-grid">
                            {features1.map((f, i) => (
                                <div key={i} className="cs-feature-item animate-on-scroll" style={{ animationDelay: `${i * 0.05}s` }}>
                                    <div className="cs-feature-icon">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/Asset-19tick.svg"
                                            alt="tick"
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <div className="cs-feature-text">
                                        <h5 className="cs-feature-title">{f.title}</h5>
                                        <p className="cs-feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Product spotlight 2 ── 2 cols: img | text */}
                        <div className="cs-spotlight" style={{ marginTop: '60px' }}>
                            <div
                                className="cs-spotlight-bg"
                                style={{ backgroundImage: "url('/assets/Asset-10sungrow.webp')" }}
                            >
                                <div className="cs-spotlight-inner cs-spotlight-reverse">
                                    <div className="cs-spotlight-img animate-on-scroll">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/ESA3-10KAll-in-oneSystem-32-198-copy.webp"
                                            alt="GoodWe ESA Series Battery"
                                        />
                                    </div>
                                    <div className="cs-spotlight-text animate-on-scroll delay-1">
                                        <h2 style={{ color: '#ffffff' }}>ESA Series</h2>
                                        <h3 style={{ color: '#ffffff' }}>Solar Battery</h3>
                                        <p>
                                            The GoodWe ESA Series is a fully integrated all-in-one solar and storage solution that combines inverter and battery in a pre-wired, modular design—making installation significantly faster and easier. Engineered for flexibility, the ESA system allows seamless expansion to meet evolving energy needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature grid 2 */}
                        <div className="cs-features-grid">
                            {features2.map((f, i) => (
                                <div key={i} className="cs-feature-item animate-on-scroll" style={{ animationDelay: `${i * 0.05}s` }}>
                                    <div className="cs-feature-icon">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/Asset-19tick.svg"
                                            alt="tick"
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <div className="cs-feature-text">
                                        <h5 className="cs-feature-title">{f.title}</h5>
                                        <p className="cs-feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </section>

                {/* ── Full-width Image Band ─────────────────────── */}
                <section
                    className="cs-banner-image"
                    style={{ backgroundImage: "url('/assets/Asset-20@2x-80.jpg')" }}
                ></section>

                {/* ── CTA Banner ────────────────────────────────── */}
                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Harness the Power of the Sun! Go Solar Today
                        </h2>
                        <a
                            href="#"
                            className="btn btn-primary quote-trigger hover-dark"
                            style={{
                                backgroundColor: '#000000',
                                padding: '16px 36px',
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                border: 'none',
                            }}
                        >
                            <span className="btn-text">Get a Quote</span>
                            <span className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </section>

                {/* ── Reviews ───────────────────────────────────── */}
                <section className="section-reviews content-section text-center">
                    <div className="container">
                        <h3 className="section-title">How customers rate their experience with us</h3>
                        <div className="animate-on-scroll visible">
                            <GoogleReviewsWidget />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
