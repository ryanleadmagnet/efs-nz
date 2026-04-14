'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';
import AnimatedHeading from '@/components/AnimatedHeading';

const videos = [
    {
        title: 'How to: Setup the Energizer Solar App',
        embedId: 'cCdfljrmY6A',
    },
    {
        title: 'Monitoring App setup for Single-phase Sungrow Inverters',
        embedId: 'r3qvvzp0-Ag',
    },
    {
        title: 'Monitoring App setup for Goodwe Inverters',
        embedId: '2V_zg9J5bZU',
    },
    {
        title: 'How to: Shutdown / Restart the Sungrow Inverters',
        embedId: 'Tij-Ty-JMNE',
    },
];

export default function SolarMonitoringPage() {
    return (
        <>
            <Header alwaysSticky />

            <main>
                <ServicePageHero
                    subtitle="Technology >"
                    title="SOLAR MONITORING APPS"
                    bgImage="/assets/roof-solar-energy-in-sunset-2021-08-26-17-52-56-utc.jpg"
                />

                {/* ── Section 1: Video Tutorials ── */}
                <section className="gs-videos-section">
                    <div className="container">
                        <div className="section-text animate-on-scroll" style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <AnimatedHeading tag="h2" className="section-subtitle">
                                LEARN MORE
                            </AnimatedHeading>
                            <AnimatedHeading tag="h3" className="section-title" style={{ color: 'var(--white)' }}>
                                Video Tutorials for Your System
                            </AnimatedHeading>
                        </div>
                        <div className="gs-video-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                            {videos.map((video, i) => (
                                <div key={i} className={`gs-video-card animate-on-scroll delay-${(i % 2)}`}>
                                    <div className="gs-video-embed">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.embedId}`}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            loading="lazy"
                                        />
                                    </div>
                                    <p className="gs-video-title">{video.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Section 2: Download After Install Docs ── */}
                <section className="section-stop-paying" style={{ backgroundColor: '#ffffff', minHeight: 'auto' }}>
                    <div className="section-stop-paying-inner" style={{ alignItems: 'center', padding: '80px 20px' }}>
                        <div className="section-stop-paying-content" style={{ padding: '0 60px 0 0', width: '50%' }}>
                            <div className="hero-content-center animate-on-scroll">
                                <AnimatedHeading tag="h2" className="section-subtitle">
                                    AFTER INSTALLATION
                                </AnimatedHeading>
                                <AnimatedHeading
                                    tag="h3"
                                    className="section-title"
                                    style={{ color: 'var(--primary-color)' }}
                                >
                                    Download<br />After Install Docs
                                </AnimatedHeading>
                                <p className="section-desc" style={{ color: 'var(--text-color)' }}>
                                    Inside of these documents you will find details on how to restart your inverter, how to identify a fault, what information you will need to provide your power provider and your maintenance schedule. Use the below links to download the relevant document for your state or territory:
                                </p>

                                <div className="gs-download-links animate-on-scroll delay-1">
                                    <a href="/assets/EFS-Solar-After-Installation-QLD.pdf" target="_blank" className="gs-download-btn">
                                        <svg className="gs-pdf-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>
                                        </svg>
                                        Queensland &gt;
                                    </a>
                                    <a href="/assets/EFS-Solar-After-Installation-NSW.pdf" target="_blank" className="gs-download-btn">
                                        <svg className="gs-pdf-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>
                                        </svg>
                                        New South Wales &gt;
                                    </a>
                                    <a href="/assets/EFS-Solar-After-Installation-NT.pdf" target="_blank" className="gs-download-btn">
                                        <svg className="gs-pdf-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>
                                        </svg>
                                        Northern Territory &gt;
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="section-stop-paying-image animate-on-scroll delay-1" style={{ width: '50%', textAlign: 'center' }}>
                            <img
                                src="/assets/After-Install.jpg"
                                alt="Solar maintenance"
                                style={{ width: '90%', maxWidth: '480px' }}
                            />
                        </div>
                    </div>
                </section>

                {/* ── Section 3: CTA ── */}
                <section className="gs-cta-section">
                    <div className="gs-cta-inner animate-on-scroll">
                        <AnimatedHeading tag="h2" className="gs-cta-title">
                            Can&apos;t find what you&apos;re looking for?
                        </AnimatedHeading>
                        <p className="gs-cta-sub">Send us an email or give us a call!</p>
                        <div className="gs-cta-btns">
                            <a href="tel:1300911736" className="btn btn-primary">
                                <span className="btn-text">Call Us</span>
                                <span className="btn-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                            </a>
                            <a href="mailto:support@efssolar.com.au" className="btn btn-primary" style={{ background: 'transparent', border: '2px solid var(--white)', color: 'var(--white)' }}>
                                <span className="btn-text">Email Us</span>
                                <span className="btn-icon">
                                    <i className="fas fa-paper-plane"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
