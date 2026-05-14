import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';

export const metadata: Metadata = {
    title: 'Solis Solar Inverters across New Zealand | S6 Series',
    description: 'EFS Solar supplies and installs Solis S6 Series three-phase solar inverters across New Zealand. High-efficiency grid-tied inverter solutions for homes and businesses.',
    keywords: ['Solis inverter New Zealand', 'S6 three phase inverter', 'solar inverter installation New Zealand', 'Solis installer NZ'],
    alternates: { canonical: 'https://www.efssolar.co.nz/technology/solis' },
    openGraph: {
        title: 'EFS Solar | Solis Solar Inverters across New Zealand',
        description: 'EFS Solar installs Solis S6 Series inverters across New Zealand.',
        url: 'https://www.efssolar.co.nz/technology/solis',
    },
};

export default function SolisPage() {
    const features1 = [
        {
            title: 'High Efficiency & Power',
            desc: 'Supports 20A string current and 150% DC/AC ratio for high-power modules.',
        },
        {
            title: 'Optimized for Complex Roofs',
            desc: '3 MPPT design maximizes energy harvest on complex, multi-facing rooftops.',
        },
        {
            title: 'Proactive Safety',
            desc: 'Integrated AFCI proactively reduces fire risks by detecting arc faults.',
        },
        {
            title: 'SolisCloud Monitoring',
            desc: 'Register on SolisCloud for real-time tracking, remote upgrades, and system control.',
        },
        {
            title: 'Lightweight & Compact',
            desc: 'Compact, lightweight design ensures easy installation without compromising reliability.',
        },
        {
            title: 'Weak Grid Stability',
            desc: 'Automatic voltage stabilization ensures consistent performance in weak grid conditions.',
        },
    ];

    return (
        <>
            <style>{`
                @media (max-width: 768px) {
                    .solis-3rd-bg {
                        background-image: url('/assets/solis-mobile.webp') !important;
                    }
                }
                .cs-feature-title {
                    color: #f58327 !important;
                }
            `}</style>
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
                        <p className="cs-hero-sub animate-on-scroll">GLOBAL INVERTER INNOVATOR</p>
                        <h1 className="cs-hero-title animate-on-scroll">Solis</h1>
                    </div>
                </section>

                {/* ── White card (overlaps hero) ────────────────── */}
                <section className="cs-card-section">
                    <div className="cs-card">

                        {/* Logo row */}
                        <div className="cs-logo-row animate-on-scroll">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/solisx.svg"
                                alt="Solis logo"
                                className="cs-brand-logo"
                            />
                        </div>

                        {/* Product spotlight 1 */}
                        <div className="cs-spotlight">
                            <div
                                className="cs-spotlight-bg"
                                style={{ backgroundImage: "url('/assets/Asset-14solis.webp')" }}
                            >
                                <div className="cs-spotlight-inner">
                                    <div className="cs-spotlight-img animate-on-scroll">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/solis inverter.webp"
                                            alt="Solis S6 Series Three Phase Inverter"
                                        />
                                    </div>
                                    <div className="cs-spotlight-text animate-on-scroll delay-1">
                                        <h2 style={{ color: '#ffffff' }}>S6 Series</h2>
                                        <h3 style={{ color: '#ffffff' }}>Three Phase Inverters</h3>
                                        <p>
                                            Solis is the world&apos;s 3rd largest PV inverter manufacturer, providing high-efficiency solutions for three-phase residential and commercial grid systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature grid */}
                        <div className="cs-features-grid">
                            {features1.map((f, i) => (
                                <div key={i} className="cs-feature-item animate-on-scroll" style={{ animationDelay: `${i * 0.05}s` }}>
                                    <div className="cs-feature-icon">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/Asset-soltick.svg"
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

                        {/* Product spotlight 2 */}
                        <div className="cs-spotlight" style={{ marginTop: '60px' }}>
                            <div
                                className="cs-spotlight-bg solis-3rd-bg"
                                style={{ backgroundImage: "url('/assets/solis-desktop.webp')", minHeight: '400px' }}
                            >
                            </div>
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
