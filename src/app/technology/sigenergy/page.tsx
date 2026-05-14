import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';

export const metadata: Metadata = {
    title: 'Sigenergy SigenStor Home Energy System across New Zealand',
    description: 'EFS Solar supplies and installs Sigenergy SigenStor 5-in-1 home energy systems across New Zealand. AI-powered solar inverter, battery, EV charger and more in one integrated solution.',
    keywords: ['Sigenergy New Zealand', 'SigenStor home energy', 'solar battery EV charger NZ', 'Sigenergy installer NZ'],
    alternates: { canonical: 'https://www.efssolar.co.nz/technology/sigenergy' },
    openGraph: {
        title: 'EFS Solar | Sigenergy SigenStor across New Zealand',
        description: 'EFS Solar installs Sigenergy SigenStor systems across New Zealand.',
        url: 'https://www.efssolar.co.nz/technology/sigenergy',
    },
};

export default function SigenergyPage() {
    const features1 = [
        {
            title: 'AI Smart Assistant',
            desc: 'mySigen App with GPT-4o AI provides intelligent scheduling and 10-second data updates.',
        },
        {
            title: 'V2X Pioneering',
            desc: '25kW bidirectional charging enables EVs to backup homes or support the grid.',
        },
        {
            title: 'Zero-Interrupt Backup',
            desc: '0ms seamless switching ensures uninterrupted power during grid outages.',
        },
        {
            title: '5-Layer Battery Safety',
            desc: 'Internal fire extinguishing and aerogel insulation define new battery safety standards.',
        },
        {
            title: 'Flexible Modular Design',
            desc: 'Modular architecture supports mixing old and new batteries using active balancing.',
        },
        {
            title: 'Extreme Weather Reliable',
            desc: 'IP66 rated to perform reliably in temperatures ranging from -30°C to 60°C.',
        },
    ];

    return (
        <>
            <style>{`
                .cs-feature-title {
                    color: #a52229 !important;
                }
                @media (min-width: 1024px) {
                    .cs-spotlight-text-special {
                        max-width: 50%;
                        margin-right: auto;
                    }
                }
                .cs-spotlight-text-special {
                    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
                }
                @media (max-width: 767px) {
                    .cs-spotlight-bg-special {
                        background-position: right !important;
                    }
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
                        <p className="cs-hero-sub animate-on-scroll">AI-POWERED ENERGY FREEDOM</p>
                        <h1 className="cs-hero-title animate-on-scroll">Sigenergy</h1>
                    </div>
                </section>

                {/* ── White card (overlaps hero) ────────────────── */}
                <section className="cs-card-section">
                    <div className="cs-card">

                        {/* Logo row */}
                        <div className="cs-logo-row animate-on-scroll">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/sigenergyx.svg"
                                alt="Sigenergy logo"
                                className="cs-brand-logo"
                            />
                        </div>

                        {/* Product spotlight 1 */}
                        <div className="cs-spotlight">
                            <div
                                className="cs-spotlight-bg"
                                style={{ backgroundImage: "url('/assets/Asset-14sig.webp')" }}
                            >
                                <div className="cs-spotlight-inner">
                                    <div className="cs-spotlight-img animate-on-scroll">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/sigen.webp"
                                            alt="Sigenergy SigenStor 5-in-One Home Energy Solution"
                                        />
                                    </div>
                                    <div className="cs-spotlight-text animate-on-scroll delay-1">
                                        <h2 style={{ color: '#ffffff' }}>SigenStor</h2>
                                        <h3 style={{ color: '#ffffff' }}>5-in-One Home Energy Solution</h3>
                                        <p>
                                            SigenStor integrates a Solar Inverter, Battery, EV DC Charger, Gateway, and Controller into one stack.
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
                                            src="/assets/Asset-signtick.svg"
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
                                className="cs-spotlight-bg cs-spotlight-bg-special"
                                style={{ backgroundImage: "url('/assets/Asset-10sig.webp')" }}
                            >
                                <div className="cs-spotlight-inner">

                                    <div className="cs-spotlight-text animate-on-scroll delay-1 cs-spotlight-text-special">
                                        <h2 style={{ color: '#ffffff' }}>SigenStor Series</h2>
                                        <h3 style={{ color: '#ffffff' }}>Intelligent Energy Hub</h3>
                                        <p>
                                            Available in single and three-phase, Sigenergy systems offer 10,000 battery life cycles and 200% peak output power in off-grid mode.
                                        </p>
                                    </div>
                                </div>
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
