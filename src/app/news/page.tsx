'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';

const articles = [
    {
        href: 'https://efssolar.co.nz/solar-buy-back-rates-2025-how-premium-nz-systems-achieve-0-40-kwh-returns-with-smart-storage-2/',
        title: 'Solar Buy-Back Rates 2025: How Premium NZ Systems Achieve $0.40/kWh Returns with Smart Storage',
        excerpt: 'The New Solar Economy: Decoding Buy-Back Rates and Time-of-Use for Maximum Return. If you are researching solar, you\'ve likely come across the term Feed-in Tariff or buy-back rate — and wondered what it actually means for your bottom line.',
        category: 'Finance',
        date: '4 Dec 2025',
    },
    {
        href: 'https://efssolar.co.nz/solar-buy-back-rates-2025-how-premium-nz-systems-achieve-0-40-kwh-returns-with-smart-storage/',
        title: 'Maximising Your Solar Returns: Buy-Back Rates & Smart Storage in 2025',
        excerpt: 'Smart battery storage combined with time-of-use tariffs can unlock significantly higher returns on your solar investment. Discover how savvy NZ homeowners are achieving up to $0.40/kWh with the right system design.',
        category: 'Finance',
        date: '4 Dec 2025',
    },
    {
        href: 'https://efssolar.co.nz/5-critical-mistakes-to-avoid-when-choosing-a-solar-installer-in-new-zealand/',
        title: '5 Critical Mistakes to Avoid When Choosing a Solar Installer in New Zealand',
        excerpt: 'The solar industry in New Zealand is booming. More and more Kiwi homeowners are making the smart choice to invest in solar power — but not all installers are created equal. Here\'s what to watch out for.',
        category: 'Consumer Advice',
        date: '13 Oct 2025',
    },
    {
        href: 'https://efssolar.co.nz/a-kiwi-homeowners-guide-to-investing-in-a-high-performance-solar-system-2025/',
        title: "A Kiwi Homeowner's Guide to Investing in a High-Performance Solar System (2025)",
        excerpt: "If you're a Kiwi homeowner tired of opening your monthly power bill from Genesis, Mercury, or Contact Energy and watching that number climb — it's time to explore what a premium solar system can do for your household.",
        category: 'Solar Tips',
        date: '13 Oct 2025',
    },
    {
        href: 'https://efssolar.co.nz/5-common-myths-about-solar-power-in-nz-debunked-for-2025/',
        title: '5 Common Myths About Solar Power in NZ (Debunked for 2025)',
        excerpt: "Despite solar's growing popularity across New Zealand, a surprising number of myths still hold Kiwi homeowners back from making the switch. We cut through the noise and debunk the top 5 misconceptions.",
        category: 'Solar Tips',
        date: '13 Oct 2025',
    },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    'Finance':        { bg: '#47c7ea18', text: '#1a9bbf', border: '#47c7ea40' },
    'Consumer Advice':{ bg: '#f0f0f018', text: '#333',    border: '#33333330' },
    'Solar Tips':     { bg: '#00000010', text: '#000',    border: '#00000030' },
    'Industry News':  { bg: '#47c7ea12', text: '#1a9bbf', border: '#47c7ea30' },
    'Energy Market':  { bg: '#00000008', text: '#444',    border: '#44444430' },
};

export default function NewsIndex() {
    return (
        <>
            <Header />
            <main>
                <ServicePageHero
                    subtitle="EFS Solar >"
                    title="News & Insights"
                    bgImage="/assets/solar-panels-2022-11-11-08-53-10-utc.jpg"
                />

                <section style={{ background: '#f7f7f7', padding: '80px 20px' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <p style={{
                                fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
                                color: 'var(--secondary-color)', textTransform: 'uppercase', marginBottom: '12px'
                            }}>
                                SOLAR KNOWLEDGE HUB
                            </p>
                            <h1 style={{
                                fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
                                color: '#000', lineHeight: 1.2, marginBottom: '16px',
                                fontFamily: 'var(--font-heading)',
                            }}>
                                Solar News &amp; Insights
                            </h1>
                            <p style={{ fontSize: '17px', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                                Stay up to date with the latest solar energy news, tips, and industry insights from the EFS Solar NZ team.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                            gap: '28px',
                        }}>
                            {articles.map((article, i) => {
                                const cat = categoryColors[article.category] || { bg: '#00000010', text: '#000', border: '#00000030' };
                                return (
                                    <a
                                        key={i}
                                        href={article.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            background: '#fff',
                                            borderRadius: '4px',
                                            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                                            overflow: 'hidden',
                                            textDecoration: 'none',
                                            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                            border: '1px solid #e4e4e4',
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
                                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 14px 36px rgba(0,0,0,0.12)';
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
                                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
                                        }}
                                    >
                                        {/* Accent top bar — teal for Finance, black for rest */}
                                        <div style={{ height: '4px', background: article.category === 'Finance' ? 'var(--secondary-color)' : '#000' }} />

                                        <div style={{ padding: '28px 28px 20px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                                                <span style={{
                                                    display: 'inline-block',
                                                    background: cat.bg,
                                                    color: cat.text,
                                                    fontSize: '11px',
                                                    fontWeight: 700,
                                                    letterSpacing: '1px',
                                                    textTransform: 'uppercase',
                                                    padding: '4px 10px',
                                                    borderRadius: '2px',
                                                    border: `1px solid ${cat.border}`,
                                                }}>
                                                    {article.category}
                                                </span>
                                                <span style={{ color: '#aaa', fontSize: '12px', marginLeft: 'auto' }}>{article.date}</span>
                                            </div>
                                            <h2 style={{
                                                fontSize: '18px', fontWeight: 700, color: '#000',
                                                margin: '0 0 12px', lineHeight: 1.4,
                                                fontFamily: 'var(--font-heading)',
                                            }}>
                                                {article.title}
                                            </h2>
                                            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.75, margin: 0 }}>
                                                {article.excerpt}
                                            </p>
                                        </div>

                                        <div style={{ padding: '0 28px 24px', marginTop: 'auto' }}>
                                            <span style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                color: article.category === 'Finance' ? 'var(--secondary-color)' : '#000',
                                                fontWeight: 700,
                                                fontSize: '13px',
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase',
                                                fontFamily: 'var(--font-heading)',
                                            }}>
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="8" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67" />
                                                </svg>
                                            </span>
                                        </div>
                                    </a>
                                );
            })}
                        </div>
                    </div>
                </section>

                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Ready to make the switch to solar?<br />
                            Get a free, no-obligation quote today.
                        </h2>
                        <a href="#" className="btn btn-primary hover-dark quote-trigger" style={{ backgroundColor: '#000', padding: '16px 36px', color: '#fff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', border: 'none' }}>
                            <span className="btn-text">Get a Quote</span>
                            <span className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67" />
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
