import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import HeroVideo from '@/components/HeroVideo';

export const metadata: Metadata = {
    title: 'Solar Panels across New Zealand — 0% Upfront',
    description: 'EFS Solar — trusted solar installers across New Zealand. Get premium solar panels & battery storage with 0% upfront. 20,000+ installations. Free quote.',
    keywords: ['solar panels New Zealand', 'solar installation Auckland', '0% upfront solar NZ', 'solar battery storage NZ', 'residential solar Hamilton', 'solar quote New Zealand'],
    alternates: { canonical: 'https://www.efssolar.co.nz' },
    openGraph: { title: 'EFS Solar | Solar & Batteries 0% Upfront | across New Zealand', description: 'Trusted solar installers with 20,000+ installations. Solar panels & batteries.', url: 'https://www.efssolar.co.nz' },
};

export default function Home() {
    return (
        <>
            <Header />


            {/* MAIN CONTENT */}
            <main>
                {/* HERO SECTION */}
                <section className="hero-section">
                    <HeroVideo />

                    <div className="absolute top-[120px] left-0 w-full z-20 pointer-events-none">
                        <div className="container flex justify-center md:justify-end">
                            <div className="pointer-events-auto">
                                <img src="/assets/logo2.png" alt="Logo 2" className="h-[60px] md:h-[80px] w-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="container hero-content hero-home">
                        <AnimatedHeading tag="h1" className="hero-title">Solar.<br />Made Simple.</AnimatedHeading>

                        <a href="#" className="btn btn-primary quote-trigger">
                            <span className="btn-text">Get a Quote</span>
                            <span className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                    <path fill="none" stroke="currentColor" strokeWidth="2"
                                        d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                </svg>
                            </span>
                        </a>


                        <div className="hero-stats-row">
                            <div className="hero-stat-item">
                                <div className="stat-number">10+</div>
                                <div className="stat-text">Years Experience</div>
                            </div>
                            <div className="hero-stat-item">
                                <div className="stat-number">30</div>
                                <div className="stat-text">Year Warranties</div>
                            </div>
                        </div>
                    </div>

                    <a href="#sections-circle" className="scroll-down-arrow bg-transparent" aria-label="Scroll down to content">
                        <svg className="arrows" viewBox="0 0 60 72">
                            <path className="a1" d="M0 0 L30 32 L60 0"></path>
                            <path className="a2" d="M0 20 L30 52 L60 20"></path>
                            <path className="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                    </a>

                    {/* Pattern Bar */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '18px', backgroundImage: 'url(/assets/Asset-66.svg)', backgroundRepeat: 'repeat-x', backgroundSize: 'contain', zIndex: 30 }}></div>
                </section> {/* SHARED BACKGROUND WRAPPER: Tier1 + Battery */}
                <div className="sections-bg-wrapper">
                    {/* Circle overlay spanning full height of both sections + 30px */}
                    <div className="sections-circle-overlay" style={{ transform: "translateY(0)" }} id="sections-circle"></div>

                    {/* SECTION 1: TIER 1 PRODUCTS */}
                    <section className="section-tier1 content-section">
                        <div className="container section-container">
                            <div className="section-image animate-on-scroll">
                                <img src="/assets/Asset-64-1024x873.webp"
                                    alt="Solar Installation" />
                            </div>
                            <div className="section-text animate-on-scroll delay-1">
                                <AnimatedHeading tag="h2" className="section-subtitle">TIER 1 PRODUCTS</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title">We Only Use the Best<br />of the Best</AnimatedHeading>
                                <p className="section-desc">We don't settle for anything but the best when it comes to the solar
                                    products we sell &amp; install. With long manufacture warranties of up to 30 years, you can
                                    rest
                                    easy knowing your system will perform long into the future.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2: BATTERY */}
                    <section className="section-battery content-section">
                        <div className="container section-container reverse-mobile">
                            <div className="section-text animate-on-scroll">
                                <AnimatedHeading tag="h2" className="section-subtitle">Stop Paying for Power</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title">Backup Power &amp;<br />Energy Independence</AnimatedHeading>
                                <p className="section-desc">Take control of your home's energy with a solar battery. Use your own
                                    power at night, earn from excess power, and keep your essential appliances running during outages — all
                                    with no upfront payment on interest-free plans.</p>
                                <Link href="/services/batteries" className="btn btn-primary">
                                    <span className="btn-text">Learn more</span>
                                    <span className="btn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                            <path fill="none" stroke="currentColor" strokeWidth="2"
                                                d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                            <div className="section-image animate-on-scroll delay-1">
                                <img src="/assets/battery-copy.webp"
                                    alt="Solar Battery" />
                            </div>
                        </div>
                    </section>
                </div>{/* /.sections-bg-wrapper */}

                {/* BRAND CAROUSEL */}
                <section className="brand-carousel-section">
                    <div className="brand-carousel">
                        <div className="carousel-track">
                            <img src="/assets/Asset-80.svg" alt="Brand 1" />
                            <img src="/assets/Asset-79.svg" alt="Brand 2" />
                            <img src="/assets/Asset-78.svg" alt="Brand 3" />
                            <img src="/assets/Asset-77.svg" alt="Brand 4" />
                            <img src="/assets/Asset-76.svg" alt="Brand 5" />
                            <img src="/assets/Asset-75.svg" alt="Brand 6" />
                            <img src="/assets/Asset-74.svg" alt="Brand 7" />
                            {/* Duplicate for infinite scroll loop */}
                            <img src="/assets/Asset-80.svg" alt="Brand 1" />
                            <img src="/assets/Asset-79.svg" alt="Brand 2" />
                            <img src="/assets/Asset-78.svg" alt="Brand 3" />
                            <img src="/assets/Asset-77.svg" alt="Brand 4" />
                            <img src="/assets/Asset-76.svg" alt="Brand 5" />
                            <img src="/assets/Asset-75.svg" alt="Brand 6" />
                            <img src="/assets/Asset-74.svg" alt="Brand 7" />
                        </div>
                    </div>
                </section>

                {/* SECTION 3: PEACE OF MIND */}
                <section className="section-peace">
                    <div className="section-peace-container">
                        <div className="section-peace-image animate-on-scroll">
                            <img src="section-peace.png" alt="Peace of Mind - Licensed Installers" />
                        </div>
                        <div className="section-peace-content animate-on-scroll delay-1">
                            <AnimatedHeading tag="h2" className="section-subtitle">PEACE OF MIND</AnimatedHeading>
                            <AnimatedHeading tag="h3" className="section-title">All of our installers <br />are fully licenced</AnimatedHeading>
                            <div className="peace-desc">
                                <img src="/assets/asset-59.webp" alt="Certification Logo" className="mb-10 h-auto w-auto mx-auto md:mx-0 block" style={{ marginBottom: '40px' }} />
                                <p>Unlike many of our competitors we do not take chances when it comes to our installers. When you
                                    deal with EFS Solar, you know you are dealing with qualified technicians whose interest is to
                                    deliver the best solar installation for your home or business.</p>
                                <p>All of our technicians are fully qualified solar designers, installers and master electricians so
                                    you can rest easy knowing that are dealing with professionals.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: STOP PAYING FOR POWER */}
                <section className="section-stop-paying">
                    <div className="section-stop-paying-bg"></div>
                    <div className="section-stop-paying-inner">
                        <div className="section-stop-paying-content">
                            <div className="hero-content-center animate-on-scroll">
                                <AnimatedHeading tag="h2" className="section-subtitle">STOP PAYING FOR POWER</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title">Take Control of<br />Your Power Bill</AnimatedHeading>
                                <p className="section-desc">Did you know that if you are spending $250 per quarter on your energy
                                    bill, you could save a whopping $35,000 over the next 30 years* just by going solar? Best of all
                                    you can get solar without paying anything upfront and may never pay for power again!**</p>
                                <a href="#" className="btn btn-primary quote-trigger">
                                    <span className="btn-text">Get a Quote</span>
                                    <span className="btn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                            <path fill="none" stroke="currentColor" strokeWidth="2"
                                                d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: MAKE THE SWITCH */}
                <section className="section-switch content-section text-center">
                    <div className="container">
                        <div className="section-text animate-on-scroll">
                            <AnimatedHeading tag="h2" className="section-subtitle">MAKE THE SWITCH</AnimatedHeading>
                            <AnimatedHeading tag="h3" className="section-title">it's as easy as 1, 2, 3</AnimatedHeading>
                        </div>
                        <div className="switch-grid">
                            <div className="switch-item animate-on-scroll">
                                <div className="switch-icon">
                                    <img src="/assets/Asset-30-1.svg"
                                        alt="Site Assessment" />
                                </div>
                                <h4>SITE ASSESSMENT</h4>
                                <p>One of our reps will conduct an on-site assessment of your home before designing a system to
                                    suit your household needs.</p>
                            </div>
                            <div className="switch-item animate-on-scroll delay-1">
                                <div className="switch-icon">
                                    <img src="/assets/Asset-29-1.svg"
                                        alt="Install" />
                                </div>
                                <h4>INSTALL</h4>
                                <p>Our fully licenced solar technicians will come out and install your new system on your roof
                                    and educate you on how to get the most out of it.</p>
                            </div>
                            <div className="switch-item animate-on-scroll delay-2">
                                <div className="switch-icon">
                                    <img src="/assets/Asset-28-1.svg"
                                        alt="Enjoy the Saving" />
                                </div>
                                <h4>ENJOY THE SAVING</h4>
                                <p>As soon as your solar system has been installed and connected, you can start enjoying your
                                    savings from day 1.</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* SECTION 7: REVIEWS */}
                <section className="section-reviews content-section text-center">
                    <div className="container">
                        <AnimatedHeading tag="h3" className="section-title">How customers rate their experience with us</AnimatedHeading>
                        <div className="animate-on-scroll visible">
                            <GoogleReviewsWidget />
                        </div>
                    </div>
                </section>

            </main>

            {/* FOOTER */}
            <Footer />

            {/* Custom JS */}

        </>);
}