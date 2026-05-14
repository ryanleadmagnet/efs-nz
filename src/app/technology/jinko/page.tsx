import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';

export const metadata: Metadata = {
    title: 'Jinko Solar Panels across New Zealand | Tiger Neo III',
    description: 'EFS Solar supplies and installs Jinko Solar Tiger Neo III N-type TOPCon panels across New Zealand. Industry-leading power density for residential and commercial solar installations.',
    keywords: ['Jinko Solar New Zealand', 'Tiger Neo III', 'N-type TOPCon solar panels', 'solar panel installation New Zealand'],
    alternates: { canonical: 'https://www.efssolar.co.nz/technology/jinko' },
    openGraph: {
        title: 'EFS Solar | Jinko Solar Panels across New Zealand',
        description: 'EFS Solar installs Jinko Solar Tiger Neo III panels across New Zealand.',
        url: 'https://www.efssolar.co.nz/technology/jinko',
    },
};

export default function JinkoPage() {
    const features1 = [
        {
            title: 'Higher Power on Front Side',
            desc: 'N-type TOPCon platform captures more sunlight for leading power class performance.',
        },
        {
            title: 'Optimized Heat Resistance',
            desc: 'Advanced patterning and multi-cell technology ensure superior performance in high temperatures.',
        },
        {
            title: 'Proven Low Light Performance',
            desc: 'Enhanced cell structures ensure high performance in shaded or low-light conditions.',
        },
        {
            title: 'Extreme Durability',
            desc: 'Advanced encapsulation provides superior resistance to degradation from PID, LID, and UV.',
        },
        {
            title: 'Mechanical Load Enhanced',
            desc: 'Certified to withstand 5400 Pa front and 2400 Pa rear static test loads.',
        },
        {
            title: 'Dual Glass Technology',
            desc: '1.6mm heat-strengthened front and back glass increases structural integrity.',
        },
    ];

    return (
        <>
            <style>{`
                .cs-feature-title {
                    color: #1ea84a !important;
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
                        <p className="cs-hero-sub animate-on-scroll">N-TYPE SOLAR LEADER</p>
                        <h1 className="cs-hero-title animate-on-scroll">Jinko Solar</h1>
                    </div>
                </section>

                {/* ── White card (overlaps hero) ────────────────── */}
                <section className="cs-card-section">
                    <div className="cs-card">

                        {/* Logo row */}
                        <div className="cs-logo-row animate-on-scroll">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/jinkox.svg"
                                alt="Jinko logo"
                                className="cs-brand-logo"
                            />
                        </div>

                        {/* Product spotlight 1 */}
                        <div className="cs-spotlight">
                            <div
                                className="cs-spotlight-bg"
                                style={{ backgroundImage: "url('/assets/Asset-14jin.webp')" }}
                            >
                                <div className="cs-spotlight-inner">
                                    <div className="cs-spotlight-img animate-on-scroll">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/panels.webp"
                                            alt="Jinko Solar Tiger Neo III Solar Panel"
                                        />
                                    </div>
                                    <div className="cs-spotlight-text animate-on-scroll delay-1">
                                        <h2 style={{ color: '#ffffff' }}>Tiger Neo III Series</h2>
                                        <h3 style={{ color: '#ffffff' }}>Solar Modules</h3>
                                        <p>
                                            Jinko Solar modules utilize N-type TOPCon technology to provide industry-leading power density for residential and commercial installations.
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
                                            src="/assets/Asset-jintick.svg"
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
                                className="cs-spotlight-bg"
                                style={{ backgroundImage: "url('/assets/Asset-10jin.webp')" }}
                            >
                                <div className="cs-spotlight-inner cs-spotlight-reverse">
                                    <div className="cs-spotlight-img animate-on-scroll">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/tige2 copy.webp"
                                            alt="Jinko Tiger Neo III 48QL6-DV Module"
                                        />
                                    </div>
                                    <div className="cs-spotlight-text animate-on-scroll delay-1">
                                        <h2 style={{ color: '#ffffff' }}>Tiger Neo III 48QL6-DV</h2>
                                        <h3 style={{ color: '#ffffff' }}>High-Efficiency Module</h3>
                                        <p>
                                            The Tiger Neo III 48QL6-DV is a dual-glass mono-facial module reaching up to 475 Watts with 23.77% efficiency. Engineered with 192 cells, it maximizes energy extraction in a compact footprint.
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
