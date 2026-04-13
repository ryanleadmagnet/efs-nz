'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';
import AnimatedHeading from '@/components/AnimatedHeading';

const faqs = [
    {
        question: 'When can I turn my solar on?',
        answer:
            'Once your new system has been installed, you may need to wait for your power meter to be upgraded before the system can be turned on. The only reason you may be able to use the system straight away would be where we have removed an existing system prior to installing the new one.',
    },
    {
        question: 'Do I need to stay with my same energy provider?',
        answer:
            "No you don't and in fact we always encourage people to shop around for the best tariffs possible. Please note that you must wait until after your meter change over has been completed otherwise you will run into some issues.",
    },
    {
        question: 'How long does it take to receive my EWR / CCEW / PowerWater number?',
        answer:
            'After your solar has been installed, we will make contact with the relevant provider for your area and lodge any necessary paperwork required. The turn around time on receiving a reply from any of these providers vary however their standard wait times are 5-10 business days.',
    },
    {
        question: 'What monitoring app do I use for my system?',
        answer:
            "The monitoring app for your system will be determined by the brand of inverter you have selected. For Goodwe inverters the app is called 'Sems portal' and for our Sungrow inverters, the app is called 'iSolarCloud'. Both apps are available on Android & Apple and also have a website version that can be accessed from anywhere.",
    },
    {
        question: 'Does my solar system require servicing?',
        answer:
            "The equipment that we supply require very little (if any) servicing however a maintenance schedule and directions can be found inside of the 'After Install' document found above.",
    },
    {
        question: 'How do I know if my solar is working properly / has a fault?',
        answer:
            'The easiest way to know your system is working is by checking your inverter. If the inverter has a green light showing it is operating normally. If there is a red light or no light at all your system may have a fault. You can also check via the monitoring app for your inverter.',
    },
    {
        question: 'How do I calculate the savings on my power bill?',
        answer:
            'Please refer to the specific video in our tutorial section below — "How to: read your first energy bill after installing solar" — for a detailed walkthrough on calculating your savings.',
    },
];

const videos = [
    {
        title: 'How to: Setup the Energizer Solar App',
        embedId: 'cCdfljrmY6A',
    },
    {
        title: 'How to: Shutdown / Restart the new Energizer Inverters',
        embedId: 'uWk7aEU5slM',
    },
    {
        title: 'How to: read your first energy bill after installing solar',
        embedId: 'pXoCC7hYvHM',
    },
    {
        title: 'Tips and tricks on changing your energy consumption and reducing power bill',
        embedId: 'GNJfQd5_ndU',
    },
    {
        title: 'Monitoring App setup for Goodwe Inverters',
        embedId: '5f6bws46Y0w',
    },
    {
        title: 'Monitoring App setup for Three-phase Sungrow Inverters',
        embedId: 'QhnKeDvIavM',
    },
    {
        title: 'Monitoring App setup for Single-phase Sungrow Inverters',
        embedId: 'r3qvvzp0-Ag',
    },
    {
        title: 'How to: Shutdown / Restart the Goodwe MS Serie Inverters',
        embedId: '2V_zg9J5bZU',
    },
    {
        title: 'How to: Shutdown / Restart the Sungrow Inverters',
        embedId: 'Tij-Ty-JMNE',
    },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`gs-faq-item ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
        >
            <div className="gs-faq-question">
                <span>{question}</span>
                <span className="gs-faq-icon">{open ? '−' : '+'}</span>
            </div>
            {open && <div className="gs-faq-answer">{answer}</div>}
        </div>
    );
}

export default function GetStarted() {
    return (
        <>
            <Header alwaysSticky />

            <main>
                <ServicePageHero
                    subtitle="After Installation >"
                    title="Get Started"
                    bgImage="/assets/roof-solar-energy-in-sunset-2021-08-26-17-52-56-utc.jpg"
                />

                {/* ── Section 1: Download After Install Docs ── */}
                <section className="section-stop-paying" style={{ backgroundColor: '#ffffff', minHeight: 'auto' }}>
                    <div className="section-stop-paying-inner mobile-reverse" style={{ alignItems: 'center' }}>
                        {/* Left: text + downloads */}
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
                                    <a
                                        href="/assets/EFS-Solar-After-Installation-QLD.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gs-download-btn"
                                    >
                                        <svg className="gs-pdf-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" />
                                        </svg>
                                        Queensland &gt;
                                    </a>
                                    <a
                                        href="/assets/EFS-Solar-After-Installation-NSW.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gs-download-btn"
                                    >
                                        <svg className="gs-pdf-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" />
                                        </svg>
                                        New South Wales &gt;
                                    </a>
                                    <a
                                        href="/assets/EFS-Solar-After-Installation-NT.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gs-download-btn"
                                    >
                                        <svg className="gs-pdf-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" />
                                        </svg>
                                        Northern Territory &gt;
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: solar panels image */}
                        <div className="section-stop-paying-image animate-on-scroll delay-1" style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                            <img
                                src="/assets/After-Install.jpg"
                                alt="Solar panels and inverter"
                                style={{ width: '90%', maxWidth: '480px', borderRadius: '12px' }}
                            />
                        </div>
                    </div>
                </section>

                {/* ── Section 2: FAQs ── */}
                <section className="section-stop-paying" style={{ minHeight: 'auto' }}>
                    <div className="section-stop-paying-inner" style={{ alignItems: 'flex-start', padding: '40px 20px 80px', gap: '60px' }}>
                        {/* Left: support illustration */}
                        <div className="gs-faq-image animate-on-scroll" style={{ flex: '1' }}>
                            <img
                                src="/assets/faq-support-icon.webp"
                                alt="Customer support"
                                style={{ width: '80%', borderRadius: '12px' }}
                            />
                        </div>

                        {/* Right: FAQs */}
                        <div className="gs-faq-col animate-on-scroll delay-1" style={{ flex: '1' }}>
                            <AnimatedHeading tag="h2" className="section-subtitle" style={{ color: 'var(--accent-color)' }}>
                                GOT QUESTIONS?
                            </AnimatedHeading>
                            <AnimatedHeading
                                tag="h3"
                                className="section-title"
                                style={{ color: 'var(--primary-color)', marginBottom: '30px' }}
                            >
                                FAQs
                            </AnimatedHeading>

                            <div className="gs-faq-list">
                                {faqs.map((faq, i) => (
                                    <FaqItem key={i} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Section 3: Video Tutorials ── */}
                <section className="gs-videos-section">
                    <div className="container">
                        <div className="section-text animate-on-scroll" style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <AnimatedHeading tag="h2" className="section-subtitle">
                                LEARN MORE
                            </AnimatedHeading>
                            <AnimatedHeading tag="h3" className="section-title" style={{ color: 'var(--white)' }}>
                                Video Tutorials
                            </AnimatedHeading>
                            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6' }}>
                                Step-by-step guides to help you get the most out of your new solar system.
                            </p>
                        </div>
                        <div className="gs-video-grid">
                            {videos.map((video, i) => (
                                <div key={i} className={`gs-video-card animate-on-scroll delay-${(i % 3)}`}>
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

                {/* ── Section 4: CTA ── */}
                <section className="gs-cta-section">
                    <div className="gs-cta-inner animate-on-scroll">
                        <AnimatedHeading tag="h2" className="gs-cta-title" style={{}}>
                            Can&apos;t find what you&apos;re looking for?
                        </AnimatedHeading>
                        <p className="gs-cta-sub">Send us an email or give us a call!</p>
                        <div className="gs-cta-btns">
                            <a href="tel:1300911736" className="btn btn-primary">
                                <span className="btn-text">Call Us</span>
                                <span className="btn-icon">
                                    <i className="fas fa-phone-alt" style={{ fontSize: '14px' }}></i>
                                </span>
                            </a>
                            <a href="mailto:support@efssolar.com.au" className="btn btn-primary" style={{ background: 'transparent', border: '2px solid var(--white)', color: 'var(--white)' }}>
                                <span className="btn-text">Email Us</span>
                                <span className="btn-icon">
                                    <i className="fas fa-paper-plane" style={{ fontSize: '14px' }}></i>
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
