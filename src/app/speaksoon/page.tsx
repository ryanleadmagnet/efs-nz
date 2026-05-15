import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Thank You | EFS Solar NZ',
    description: 'Thank you for submitting your information!',
    robots: { index: false, follow: false },
};

export default function SpeakSoonPage() {
    return (
        <>
            {/* Meta Pixel / Dataset Code */}
            <Script id="meta-pixel" strategy="afterInteractive">
                {`
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');

                  fbq('init', '1520289342660025');

                  // Fires on page load
                  fbq('track', 'PageView');

                  // Fires lead event on page load
                  fbq('track', 'Lead');
                `}
            </Script>
            <noscript>
                <img height="1" width="1" style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=1520289342660025&ev=PageView&noscript=1"/>
                <img height="1" width="1" style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=1520289342660025&ev=Lead&noscript=1"/>
            </noscript>

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
                            Thank you for submitting your information!
                        </h1>
                        <p className="goingsolar-subhead">
                            We will be in contact within the next 24 hours. Speak soon.
                        </p>
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
                    flex: 1;
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
                    margin: 0;
                    letter-spacing: 0.2px;
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
            `}</style>
        </>
    );
}
