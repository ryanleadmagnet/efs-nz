import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Save Money By Installing Solar | EFS Solar NZ',
    description: 'You could reduce your power bill by up to 70%! Complete our 30 second form to get started with solar panels in New Zealand.',
    robots: { index: false, follow: false },
};

export default function GoingSolarPage() {
    return (
        <>
            <main className="goingsolar-main">

                {/* ── SECTION 1: HERO ── */}
                <section className="goingsolar-hero">
                    <div className="goingsolar-hero-bg" />
                    <div className="goingsolar-hero-overlay" />

                    <div className="goingsolar-hero-content">
                        {/* Logo */}
                        <div className="goingsolar-logo-wrap">
                            <img
                                src="/assets/logo-white.svg"
                                alt="EFS Solar Logo"
                                className="goingsolar-logo"
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="goingsolar-heading">
                            Save Money By Installing Solar...
                        </h1>
                        <p className="goingsolar-subhead">
                            You Could Reduce Your Power Bill By Up To 70%!
                        </p>

                        {/* Iframe caption + embed */}
                        <p className="goingsolar-form-caption">
                            Complete the 30 second form below to get started:
                        </p>
                        <div className="goingsolar-iframe-wrap">
                            <iframe
                                width="100%"
                                height="500px"
                                src="https://v0-untitled-chat-lemon-nine.vercel.app"
                                scrolling="no"
                                style={{ border: 'none' }}
                                title="EFS Solar Going Solar Form"
                            />
                        </div>
                    </div>
                </section>

                {/* ── SECTION 2: IT'S AS EASY AS 1, 2, 3 ── */}
                <section className="goingsolar-steps">
                    <div className="goingsolar-steps-inner">
                        <div className="goingsolar-steps-header">
                            <span className="goingsolar-steps-eyebrow">MAKE THE SWITCH</span>
                            <h2 className="goingsolar-steps-title">it&apos;s as easy as 1, 2, 3</h2>
                        </div>
                        <div className="goingsolar-steps-grid">
                            <div className="goingsolar-step-item">
                                <div className="goingsolar-step-icon">
                                    <img src="/assets/Asset-30-1.svg" alt="Site Assessment" />
                                </div>
                                <h4>SITE ASSESSMENT</h4>
                                <p>One of our reps will conduct an on-site assessment of your home before designing a system to suit your household needs.</p>
                            </div>
                            <div className="goingsolar-step-item">
                                <div className="goingsolar-step-icon">
                                    <img src="/assets/Asset-29-1.svg" alt="Install" />
                                </div>
                                <h4>INSTALL</h4>
                                <p>Our fully licenced solar technicians will come out and install your new system on your roof and educate you on how to get the most out of it.</p>
                            </div>
                            <div className="goingsolar-step-item">
                                <div className="goingsolar-step-icon">
                                    <img src="/assets/Asset-28-1.svg" alt="Enjoy the Saving" />
                                </div>
                                <h4>ENJOY THE SAVING</h4>
                                <p>As soon as your solar system has been installed and connected, you can start enjoying your savings from day 1.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SECTION 3: CUSTOM FOOTER ── */}
                <footer className="goingsolar-footer">
                    <div className="goingsolar-footer-inner">
                        <p className="goingsolar-footer-copy">
                            &copy; {new Date().getFullYear()} EFS Solar. All rights reserved.
                        </p>
                        <div className="goingsolar-footer-links">
                            <Link href="/terms-of-use">Terms &amp; Conditions</Link>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/disclaimer">Disclaimer</Link>
                        </div>
                    </div>
                </footer>
            </main>

            <style>{`
                /* ── Reset for this page ── */
                .goingsolar-main {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    font-family: var(--font-heading, 'Rajdhani', sans-serif);
                }

                /* ── Hero Section ── */
                .goingsolar-hero {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .goingsolar-hero-bg {
                    position: absolute;
                    inset: 0;
                    background-image: url('/assets/IMG_9770.webp');
                    background-size: cover;
                    background-position: center;
                    z-index: 0;
                }

                .goingsolar-hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0.0) 0%,
                        rgba(0, 0, 0, 0.2) 60%,
                        rgba(0, 0, 0, 0.3) 100%
                    );
                    z-index: 1;
                }

                .goingsolar-hero-content {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    max-width: 760px;
                    margin: 0 auto;
                    padding: 60px 24px 80px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                /* Logo */
                .goingsolar-logo-wrap {
                    margin-bottom: 36px;
                }

                .goingsolar-logo {
                    height: 60px;
                    width: auto;
                }

                /* Heading */
                .goingsolar-heading {
                    font-family: var(--font-heading, 'Rajdhani', sans-serif);
                    font-size: clamp(32px, 5vw, 48px);
                    font-weight: 800;
                    color: #ffffff;
                    line-height: 1.15;
                    margin: 0 0 16px;
                    letter-spacing: -0.5px;
                    text-shadow: 0 2px 12px rgba(0,0,0,0.4);
                }

                /* Sub-heading */
                .goingsolar-subhead {
                    font-size: clamp(18px, 2.8vw, 26px);
                    font-weight: 600;
                    color: #47c7ea;
                    margin: 0 0 32px;
                    letter-spacing: 0.2px;
                }

                /* Caption */
                .goingsolar-form-caption {
                    font-size: 16px;
                    color: rgba(255,255,255,0.85);
                    margin: 0 0 16px;
                    font-weight: 500;
                }

                /* Iframe wrapper */
                .goingsolar-iframe-wrap {
                    width: 100%;
                    border-radius: 12px;
                    overflow: hidden;
                }

                /* ── Steps Section ── */
                .goingsolar-steps {
                    background: #000000;
                    padding: 90px 24px;
                    text-align: center;
                }

                .goingsolar-steps-inner {
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .goingsolar-steps-header {
                    margin-bottom: 50px;
                    color: #ffffff;
                }

                .goingsolar-steps-eyebrow {
                    display: block;
                    font-family: var(--font-heading, 'Rajdhani', sans-serif);
                    font-size: 15px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #ffffff;
                    margin-bottom: 10px;
                }

                .goingsolar-steps-title {
                    font-family: var(--font-heading, 'Rajdhani', sans-serif);
                    font-size: clamp(36px, 5vw, 58px);
                    font-weight: 800;
                    color: #ffffff;
                    line-height: 1.1;
                    margin: 0;
                }

                .goingsolar-steps-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }

                .goingsolar-step-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .goingsolar-step-icon {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                }

                .goingsolar-step-icon img {
                    width: 45px;
                    height: 45px;
                }

                .goingsolar-step-item h4 {
                    font-family: var(--font-heading, 'Rajdhani', sans-serif);
                    font-size: 22px;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0 0 12px;
                }

                .goingsolar-step-item p {
                    color: #ffffff;
                    font-size: 15px;
                    line-height: 1.6;
                    margin: 0;
                }

                /* ── Custom Footer ── */
                .goingsolar-footer {
                    background: #000000;
                    padding: 22px 24px;
                }

                .goingsolar-footer-inner {
                    max-width: 1100px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 12px;
                }

                .goingsolar-footer-copy {
                    font-size: 13px;
                    color: rgba(255,255,255,0.6);
                    margin: 0;
                }

                .goingsolar-footer-links {
                    display: flex;
                    gap: 24px;
                }

                .goingsolar-footer-links a {
                    font-size: 13px;
                    color: rgba(255,255,255,0.6);
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .goingsolar-footer-links a:hover {
                    color: #47c7ea;
                }

                /* ── Responsive ── */
                @media (max-width: 767px) {
                    .goingsolar-steps-grid {
                        grid-template-columns: 1fr;
                        gap: 48px;
                    }

                    .goingsolar-footer-inner {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .goingsolar-footer-links {
                        flex-direction: column;
                        align-items: center;
                        gap: 12px;
                    }
                }

                @media (max-width: 991px) and (min-width: 768px) {
                    .goingsolar-steps-grid {
                        grid-template-columns: 1fr;
                        max-width: 480px;
                        margin: 0 auto;
                        gap: 48px;
                    }
                }
            `}</style>
        </>
    );
}
