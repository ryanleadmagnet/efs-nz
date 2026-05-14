export default function Footer() {
    return (
        <footer className="main-footer">
            {/* Pattern Bar */}
            <div style={{ height: '18px', backgroundImage: 'url(/assets/Asset-66.svg)', backgroundRepeat: 'repeat-x', backgroundSize: 'contain', width: '100%' }}></div>

            {/* ── Main grid ── */}
            <div className="container footer-container">

                {/* Col 1 – Logo + contact + CTA + social */}
                <div className="footer-col">
                    <img
                        src="/assets/logo-white.svg"
                        alt="EFS Solar Logo"
                        className="footer-logo"
                    />
                    <div className="footer-contact" style={{ marginBottom: '20px' }}>
                        <p>
                            <a href="mailto:support@efssolar.co.nz">
                                <i className="fas fa-paper-plane text-sm" style={{ color: '#ffffff' }}></i>{' '}
                                support@efssolar.co.nz
                            </a>
                        </p>
                        <p>
                            <a href="tel:0800428557">
                                <i className="fas fa-phone-alt text-sm" style={{ color: '#ffffff' }}></i>{' '}
                                0800 428 557
                            </a>
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
                            <i className="fas fa-clock text-sm" style={{ marginRight: '6px', color: '#ffffff' }}></i>
                            Mon – Fri &nbsp;9 AM – 5 PM
                        </p>
                    </div>
                    <a href="#" className="btn btn-outline-white btn-sm quote-trigger" data-iframe-url="/form/enquiry" style={{ marginBottom: '24px' }}>
                        <span className="btn-text">Contact Us</span>
                        <span className="btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                <path fill="none" stroke="currentColor" strokeWidth="2"
                                    d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67" />
                            </svg>
                        </span>
                    </a>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/efssolarnz/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>

                {/* Col 2 – Links */}
                <div className="footer-col">
                    <h4 className="footer-heading">Links</h4>
                    <ul className="footer-links">
                        <li><a href="/news">News</a></li>
                        <li><a href="/services/residential-solar">Residential Solar</a></li>
                        <li><a href="/services/commercial-solar">Commercial Solar</a></li>
                        <li><a href="/services/batteries">Batteries</a></li>
                        <li><a href="/technology/energizer">Energizer</a></li>
                        <li><a href="/technology/goodwe">GoodWe</a></li>
                        <li><a href="/technology/jinko">Jinko</a></li>
                        <li><a href="/technology/solis">Solis</a></li>
                        <li><a href="/technology/sigenergy">Sigenergy</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/career">Work with Us</a></li>
                    </ul>
                </div>

                {/* Col 3 – Locations */}
                <div className="footer-col">
                    <h4 className="footer-heading">Locations</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="https://maps.google.com/?q=35+Clem+Newby+Road+Burbush+Hamilton+3200" target="_blank" rel="noopener noreferrer">
                                Hamilton
                            </a>
                        </li>
                        <li><a href="/services/residential-solar?location=auckland">Auckland</a></li>
                        <li><a href="/services/residential-solar?location=new-plymouth">New Plymouth</a></li>
                        <li><a href="/services/residential-solar?location=wellington">Wellington</a></li>
                        <li><a href="/services/residential-solar?location=tauranga">Tauranga</a></li>
                        <li><a href="/services/residential-solar?location=napier">Napier</a></li>
                    </ul>
                </div>

                {/* Col 4 – Address + Referral */}
                <div className="footer-col">
                    <h4 className="footer-heading">Address</h4>
                    <ul className="footer-links" style={{ marginBottom: '28px' }}>
                        <li style={{ marginBottom: '6px' }}>
                            <a href="https://maps.google.com/?q=35+Clem+Newby+Road+Burbush+Hamilton+3200" target="_blank" rel="noopener noreferrer">
                                35 Clem Newby Road,<br />Burbush, Hamilton 3200
                            </a>
                        </li>
                    </ul>
                    <h4 className="footer-heading">Referral Program</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#" className="quote-trigger" data-iframe-url="/form/referral">
                                <i className="fas fa-gift" style={{ marginRight: '6px', color: '#ffffff' }}></i>
                                Earn $250 for every friend or family member you refer
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Col 5 – Licence numbers */}
                <div className="footer-col">
                    <h4 className="footer-heading">Licence No.</h4>
                    <ul className="footer-links" style={{ fontSize: '14px' }}>
                        <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.75)' }}>NZBN: 9429052281259</li>
                        <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.75)' }}>Registration: #50214173</li>
                        <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.75)' }}>Electrician: #E078171</li>
                        <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.75)' }}>Practitioner: #W207905</li>
                    </ul>
                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div style={{ background: '#111', color: '#888', padding: '40px 20px', fontSize: '12px' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <p className="text-center md:text-left" style={{ marginBottom: '16px', lineHeight: 1.7, color: '#666' }}>
                        *Solar savings assume full year-round utilisation of generated electricity, and will change based on usage and feed-in tariffs.
                        ** Outcome is not guaranteed and would be dependent upon a variety of factors such as system design, energy production and customer usage patterns.
                    </p>
                    <hr style={{ borderColor: '#2a2a2a', margin: '16px 0' }} />
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left gap-4 md:gap-2">
                        <div>© Copyright 2026 EFS Solar. All Rights Reserved.</div>
                        <div className="flex flex-wrap justify-center md:justify-end gap-4">
                            <a href="/privacy-policy" style={{ color: '#888', textDecoration: 'none' }}>Privacy Policy</a>
                            <span style={{ color: '#444' }}>|</span>
                            <a href="/disclaimer" style={{ color: '#888', textDecoration: 'none' }}>Disclaimer</a>
                            <span style={{ color: '#444' }}>|</span>
                            <a href="/terms-of-use" style={{ color: '#888', textDecoration: 'none' }}>Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
