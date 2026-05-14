'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
export default function ReferralPage() {
    return (
        <>
            <Header />
            <main>
                {/* ── Hero ── */}
                <section className="referral-hero">
                    <div className="referral-hero-bg" />
                    <div className="referral-hero-overlay" />
                    <div className="container referral-hero-content">
                        <span className="referral-hero-eyebrow">Refer a Friend &gt;</span>
                        <h1 className="referral-hero-title">Referral</h1>
                    </div>
                </section>
                {/* ── Main Section ── */}
                <section className="referral-main-section">
                    <div className="container referral-main-inner">
                        {/* Left: SVG + Copy */}
                        <div className="referral-left animate-on-scroll">
                            {/* SVG Illustration — above text */}
                            <div className="referral-svg-wrap">
                                <img
                                    src="/assets/Asset-81refer.svg"
                                    alt="Refer a friend illustration"
                                    className="referral-svg-img"
                                />
                            </div>
                            <AnimatedHeading tag="h2" className="section-subtitle">
                                REFER A FRIEND
                            </AnimatedHeading>
                            <AnimatedHeading
                                tag="h3"
                                className="section-title referral-section-title"
                            >
                                Unlock More Savings
                            </AnimatedHeading>
                            <p className="referral-body-text">
                                Now you can unlock even more savings from your solar system through
                                our amazing <strong>Refer a Friend</strong> program!
                            </p>
                            <p className="referral-body-text">
                                For every friend you refer that goes on to purchase a solar system
                                through us, you&apos;ll receive a fantastic{' '}
                                <strong>$250 gift voucher</strong> as our token of appreciation.
                            </p>
                        </div>
                        {/* Right: Embedded referral form */}
                        <div className="referral-right animate-on-scroll delay-1">
                            <div className="referral-form-card">
                                <iframe
                                    src="/form/referral"
                                    title="EFS Solar Referral Form"
                                    className="referral-form-iframe"
                                    scrolling="no"
                                    id="referral-form-iframe"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}