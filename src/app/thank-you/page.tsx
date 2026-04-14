import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';

export const metadata: Metadata = {
    title: 'Thank You',
    description: 'Thank you for submitting your details. Our team will be in contact with you within the next 24 hours.',
};

export default function ThankYouPage() {
    return (
        <>
            <Header alwaysSticky />

            <main>
                {/* Hero — same bg as Solar Monitoring page */}
                <ServicePageHero
                    subtitle="EFS Solar >"
                    title="THANK YOU FOR SUBMITTING YOUR DETAILS."
                    bgImage="/assets/roof-solar-energy-in-sunset-2021-08-26-17-52-56-utc.jpg"
                />

                {/* Thank You Content */}
                <section
                    style={{
                        backgroundColor: '#ffffff',
                        padding: '80px 20px',
                        textAlign: 'center',
                    }}
                >
                    <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>

                        {/* Tick icon */}
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: '#002e6e',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 32px',
                        }}>
                            <svg width="40" height="40" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '42px',
                            fontWeight: 800,
                            color: 'var(--primary-color)',
                            marginBottom: '16px',
                            lineHeight: '1.2',
                        }}>
                            We will be in contact within the next 24 hours.
                        </h2>

                        <p style={{
                            fontSize: '18px',
                            color: '#4b5563',
                            marginBottom: '40px',
                            lineHeight: '1.7',
                        }}>
                            Thank you for reaching out to us! Our specialists will review your
                            information and get back to you as soon as possible. Keep an eye on
                            your phone and email — we&apos;re looking forward to helping you go solar.
                        </p>

                        {/* Social links */}
                        <p style={{
                            fontSize: '16px',
                            color: '#6b7280',
                            marginBottom: '20px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}>
                            Follow us on social media
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            justifyContent: 'center',
                            marginBottom: '48px',
                        }}>
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/efssolar"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="EFS Solar on Facebook"
                                style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1877f2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '22px',
                                    transition: 'opacity 0.2s',
                                }}
                            >
                                <i className="fab fa-facebook-f" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/efssolar"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="EFS Solar on Instagram"
                                style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '22px',
                                    transition: 'opacity 0.2s',
                                }}
                            >
                                <i className="fab fa-instagram" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/efssolar"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="EFS Solar on LinkedIn"
                                style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    backgroundColor: '#0a66c2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '22px',
                                    transition: 'opacity 0.2s',
                                }}
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>

                        {/* CTA back to home */}
                        <a href="/" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                            <span className="btn-text">Back to Home</span>
                            <span className="btn-icon">
                                <svg viewBox="0 0 8 12" fill="currentColor" width="8" height="12">
                                    <path d="M1.5 0L7 6l-5.5 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>

                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
