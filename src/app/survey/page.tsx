'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';

export default function SurveyPage() {
    const [iframeSrc, setIframeSrc] = useState('/form/survey');

    useEffect(() => {
        // Read UTM / merge-tag params from the page URL and forward them into the iframe
        const p = new URLSearchParams(window.location.search);
        const fname = p.get('fname') || '';
        const lname = p.get('lname') || '';
        const email = p.get('email') || '';

        const qs = new URLSearchParams();
        if (fname) qs.set('fname', fname);
        if (lname) qs.set('lname', lname);
        if (email) qs.set('email', email);

        const query = qs.toString();
        setIframeSrc(`/form/survey${query ? `?${query}` : ''}`);
    }, []);

    return (
        <>
            <Header />

            <main>
                {/* ── Hero ── */}
                <section className="survey-hero">
                    <div className="survey-hero-bg" />
                    <div className="survey-hero-overlay" />
                    <div className="container survey-hero-content">
                        <span className="survey-hero-eyebrow">Customer Feedback &gt;</span>
                        <h1 className="survey-hero-title">Satisfaction Survey</h1>
                    </div>
                </section>

                {/* ── Main Section ── */}
                <section className="survey-main-section">
                    <div className="container survey-main-inner">

                        {/* Left: copy */}
                        <div className="survey-left animate-on-scroll">
                            <AnimatedHeading tag="h2" className="section-subtitle">
                                YOUR FEEDBACK MATTERS
                            </AnimatedHeading>
                            <AnimatedHeading
                                tag="h3"
                                className="section-title survey-section-title"
                            >
                                How&apos;s Your Experience?
                            </AnimatedHeading>

                            <p className="survey-body-text">
                                You can help us improve by taking a moment to share your thoughts on
                                your recent solar installation.
                            </p>
                            <p className="survey-body-text">
                                This survey takes <strong>less than two minutes</strong> to complete —
                                and your feedback makes a real difference to the service we provide.
                            </p>
                        </div>

                        {/* Right: form iframe */}
                        <div className="survey-right animate-on-scroll delay-1">
                            <div className="survey-form-card">
                                <iframe
                                    src={iframeSrc}
                                    title="EFS Solar Customer Survey"
                                    className="survey-form-iframe"
                                    scrolling="no"
                                    id="survey-form-iframe"
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
