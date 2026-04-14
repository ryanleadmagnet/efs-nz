import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';
import AnimatedHeading from '@/components/AnimatedHeading';

export const metadata: Metadata = {
    title: 'Brand Materials',
    description: 'Download EFS Solar brand assets including logos, fonts, and brand guidelines.',
};

export default function BrandMaterialsPage() {
    return (
        <>
            <Header alwaysSticky />

            <main>
                {/* Hero */}
                <ServicePageHero
                    subtitle="Resources >"
                    title="BRAND MATERIALS"
                    bgImage="/section-2.jpg"
                />

                <section style={{ backgroundColor: '#ffffff', padding: '80px 20px' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        
                        <div className="text-center mb-12">
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '42px',
                                fontWeight: 800,
                                color: 'var(--primary-color)',
                                marginBottom: '16px',
                                lineHeight: '1.2',
                                textTransform: 'uppercase'
                            }}>
                                Download Brand Assets
                            </h2>
                            <p style={{ fontSize: '18px', color: '#4b5563', maxWidth: '700px', margin: '0 auto' }}>
                                Access official EFS Solar logos, brand guidelines, and typography. Please adhere to the guidelines when applying these assets across any media.
                            </p>
                        </div>

                        {/* Logos Section */}
                        <div style={{ marginBottom: '60px' }}>
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '32px',
                                fontWeight: 700,
                                color: 'var(--primary-color)',
                                borderBottom: '2px solid #e5e7eb',
                                paddingBottom: '16px',
                                marginBottom: '30px'
                            }}>
                                Logos
                            </h3>
                            
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '30px'
                            }}>
                                {/* Vertical Full Color */}
                                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
                                    <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <div style={{ color: '#002e6e', opacity: 0.5, fontWeight: 600, border: '2px dashed #d1d5db', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                                            [Vertical Color Logo]
                                        </div>
                                    </div>
                                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>Vertical (Color)</h4>
                                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                        <a href="#" style={downloadBtnStyle}>PNG</a>
                                        <a href="#" style={downloadBtnStyle}>SVG</a>
                                        <a href="#" style={downloadBtnStyle}>CMYK PDF</a>
                                    </div>
                                </div>

                                {/* Vertical Black & White */}
                                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
                                    <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <div style={{ color: '#002e6e', opacity: 0.5, fontWeight: 600, border: '2px dashed #d1d5db', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                                            [Vertical B&W Logo]
                                        </div>
                                    </div>
                                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>Vertical (Black & White)</h4>
                                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                        <a href="#" style={downloadBtnStyle}>PNG</a>
                                        <a href="#" style={downloadBtnStyle}>SVG</a>
                                        <a href="#" style={downloadBtnStyle}>CMYK PDF</a>
                                    </div>
                                </div>

                                {/* Landscape Full Color */}
                                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
                                    <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <div style={{ color: '#002e6e', opacity: 0.5, fontWeight: 600, border: '2px dashed #d1d5db', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                                            [Landscape Color Logo]
                                        </div>
                                    </div>
                                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>Landscape (Color)</h4>
                                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                        <a href="#" style={downloadBtnStyle}>PNG</a>
                                        <a href="#" style={downloadBtnStyle}>SVG</a>
                                        <a href="#" style={downloadBtnStyle}>CMYK PDF</a>
                                    </div>
                                </div>

                                {/* Landscape Black & White */}
                                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
                                    <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <div style={{ color: '#002e6e', opacity: 0.5, fontWeight: 600, border: '2px dashed #d1d5db', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                                            [Landscape B&W Logo]
                                        </div>
                                    </div>
                                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>Landscape (Black & White)</h4>
                                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                        <a href="#" style={downloadBtnStyle}>PNG</a>
                                        <a href="#" style={downloadBtnStyle}>SVG</a>
                                        <a href="#" style={downloadBtnStyle}>CMYK PDF</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fonts & Guidelines Section */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '40px'
                        }}>
                            {/* Fonts */}
                            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '40px' }}>
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '28px',
                                    fontWeight: 700,
                                    color: 'var(--primary-color)',
                                    marginBottom: '16px'
                                }}>
                                    Typography
                                </h3>
                                <p style={{ fontSize: '16px', color: '#4b5563', marginBottom: '24px', lineHeight: '1.6' }}>
                                    Download the complete font families used in the EFS Solar brand identity.
                                </p>
                                <ul style={{ listStyleType: 'disc', color: '#374151', paddingLeft: '20px', marginBottom: '24px', fontWeight: 500 }}>
                                    <li style={{ marginBottom: '8px' }}>Gotham</li>
                                    <li style={{ marginBottom: '8px' }}>Korataki</li>
                                    <li style={{ marginBottom: '8px' }}>Rajdhani</li>
                                </ul>
                                <a href="#" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                                    <span className="btn-text">Download Fonts (ZIP)</span>
                                    <span className="btn-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                                        </svg>
                                    </span>
                                </a>
                            </div>

                            {/* Brand Guidelines */}
                            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '40px' }}>
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '28px',
                                    fontWeight: 700,
                                    color: 'var(--primary-color)',
                                    marginBottom: '16px'
                                }}>
                                    Brand Guidelines
                                </h3>
                                <p style={{ fontSize: '16px', color: '#4b5563', marginBottom: '24px', lineHeight: '1.6' }}>
                                    A comprehensive guide to using our logos, colours, typography, and visual assets correctly to ensure brand consistency.
                                </p>
                                <div style={{ height: '80px', display: 'flex', alignItems: 'center', color: '#9ca3af', marginBottom: '24px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="60" height="60">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </div>
                                <a href="#" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                                    <span className="btn-text">Download Guidelines (PDF)</span>
                                    <span className="btn-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

const downloadBtnStyle = {
    display: 'inline-flex',
    padding: '8px 16px',
    backgroundColor: '#002e6e',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 600,
    borderRadius: '4px',
    transition: 'background-color 0.2s',
};
