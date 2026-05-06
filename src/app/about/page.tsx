import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import ServicePageHero from '@/components/ServicePageHero';

export const metadata: Metadata = {
    title: 'About — Certified Solar Installers across New Zealand',
    description: 'Learn about EFS Solar, a trusted solar installer serving all of New Zealand. Our expert team delivers premium solar and battery solutions.',
    alternates: { canonical: 'https://www.efssolar.co.nz/about' },
    openGraph: { title: 'About EFS Solar NZ', description: 'Certified solar installers across New Zealand.', url: 'https://www.efssolar.co.nz/about' },
};

export default function AboutPage() {

    return (
        <>
            <Header />
            <main>

                <ServicePageHero
                    subtitle=""
                    title="Who We Are"
                    bgImage="/assets/iStock-1313265074-s-1.jpg"
                />

                {/* ── EFS Solar intro (light grey bg) ──────────────────── */}
                <section style={{ backgroundColor: '#f5f5f5', padding: '100px 20px' }}>
                    <div className="container">
                        <div className="about-intro-grid">
                            {/* left – illustration */}
                            <div className="about-intro-image animate-on-scroll" style={{ textAlign: 'center' }}>
                                <img
                                    src="/assets/Asset-22-2.svg"
                                    alt="EFS Solar illustration"
                                    style={{ width: '100%', maxWidth: 437 }}
                                />
                            </div>
                            {/* right – text */}
                            <div className="about-intro-content animate-on-scroll delay-1">
                                <h3 style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: '40px',
                                    fontWeight: 600,
                                    color: '#000000',
                                    marginBottom: '50px',
                                }}>EFS Solar</h3>
                                <p style={{ color: '#000', lineHeight: '22px', marginBottom: '1.15em' }}>
                                    With an innovative approach to the renewable energy sector, EFS Solar has revolutionised the business of going solar. Bringing our experience from a highly regulated market like Australia to New Zealand, we leverage years of expertise and over 20,000 installations to ensure quality and reliability. EFS delivers a seamless process from initial client contact to installation and aftercare, with a company you can trust, backed by a 30-year product warranty guarantee.
                                </p>
                                <p style={{ color: '#000', lineHeight: '22px' }}>
                                    With exceptional customer service at the company’s pinnacle, our staff assist you every step of the way. Our technicians are fully qualified solar designers, installers, and master electricians, so you can rest easy knowing that you are dealing with professionals. As a team, we are devoted to and pride ourselves on delivering a seamless renewable energy experience.
                                </p>

                                <h3 style={{
                                    fontSize: '24px', fontWeight: 600,
                                    color: '#000000', marginBottom: '20px', marginTop: '60px',
                                }}>Managing Director</h3>
                                <h4 style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: '40px',
                                    fontWeight: 600,
                                    marginBottom: '50px',
                                }}>Cody Rickit</h4>
                                <p style={{ color: '#000', lineHeight: '22px', marginBottom: '1.15em' }}>Born and raised in New Zealand, Cody has always had a passion for renewable energy. In 2011, he moved to Australia and shortly after founded EFS Solar—now one of Australia’s leading solar retailers—completing over 20,000 installations backed by lifetime warranties.
                                </p><p style={{ color: '#000', lineHeight: '22px', marginBottom: '1.15em' }}>Now back home in New Zealand, Cody brings that same knowledge and workmanship to every installation and power bill. His goal is to make solar simple for New Zealand homeowners.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── Our Locations (dark bg) ───────────────────────────── */}
                <section style={{ backgroundColor: '#000', padding: '100px 20px' }}>
                    <div className="container">
                        {/* Section heading */}
                        <AnimatedHeading
                            tag="h2"
                            style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                fontSize: '40px',
                                fontWeight: 600,
                                color: '#fff',
                                marginBottom: '50px',
                            }}
                        >
                            Our Locations
                        </AnimatedHeading>

                        {/* Two-col: map | offices */}
                        <div className="about-locations-grid">
                            {/* Left col - Map only */}
                            <div className="about-locations-left animate-on-scroll">
                                <h3 style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: 'clamp(18px, 3vw, 26px)',
                                    fontWeight: 600,
                                    color: '#ffffff',
                                    marginBottom: '30px',
                                }}>
                                    Service Coverage
                                </h3>
                                <div className="about-locations-image-container">
                                    <img
                                        src="/assets/location_map.svg"
                                        alt="New Zealand service map with locations"
                                        style={{ width: '100%', maxWidth: '700px', margin: '20px' }}
                                    />
                                </div>
                            </div>

                            {/* Right col – Offices */}
                            <div className="about-locations-right animate-on-scroll delay-1">
                                <h3 style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: 'clamp(18px, 3vw, 26px)',
                                    fontWeight: 600,
                                    color: '#ffffff',
                                    marginBottom: '30px',
                                }}>
                                    Offices
                                </h3>
                                <div style={{ marginBottom: '32px' }}>
                                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '22px', marginBottom: '6px' }}>
                                        35 Clem Newby Road, Burbush, Hamilton 3200
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=35+Clem+Newby+Road+Burbush+Hamilton+3200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#47c7ea', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                                    >
                                        Google Map <span style={{ fontSize: '16px' }}>&#8250;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA Banner ────────────────────────────────────────── */}
                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Help your pocket and the planet.<br />
                            Make the switch to solar, today!
                        </h2>
                        <a href="#" className="btn btn-primary quote-trigger hover-dark" style={{ backgroundColor: '#000000', padding: '16px 36px', color: '#fff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', border: 'none' }}>
                            <span className="btn-text">Get a Quote</span>
                            <span className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </section>

                {/* ── Reviews ───────────────────────────────────────────── */}
                <section className="section-reviews content-section">
                    <div className="container">
                        <AnimatedHeading tag="h3" className="section-title">How customers rate their experience with us</AnimatedHeading>
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
