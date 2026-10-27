import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const TOOLS_URL = 'https://tools.eazara.com';
const navigation = [['Home', 'home'], ['Products', 'products'], ['Solutions', 'solutions'], ['About', 'about'], ['Contact', 'contact']];

// Demonstration concepts, not announcements or confirmed products.
// To add a future release, supply its real URL and change status to 'Live'.
const futureProducts = [
  { id: 'learn', name: 'Eazara Learn', category: 'Education concept', description: 'A possible home for learning resources and study tools.', accent: 'violet', symbol: 'learn', status: 'Concept', url: null },
  { id: 'dev', name: 'Eazara Dev', category: 'Developer concept', description: 'Ideas for tools that simplify building and debugging.', accent: 'teal', symbol: 'code', status: 'Concept', url: null },
  { id: 'create', name: 'Eazara Create', category: 'Creator concept', description: 'Ideas for useful digital tools for creators.', accent: 'amber', symbol: 'spark', status: 'Concept', url: null },
];

function Arrow({ size = 18 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15m-7-7 7 7-7 7" /></svg>; }
function Logo({ size = 42 }) { return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 64 72"><defs><linearGradient id="eazara-mark" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#30d5ff" /><stop offset=".5" stopColor="#4d91ff" /><stop offset="1" stopColor="#7758fa" /></linearGradient></defs><path d="M5 19 32 4 59 19v14L32 18 5 33Z" fill="url(#eazara-mark)" /><path d="m5 39 27-15 17 10-17 10-11 6 11 6 27-15v14L32 69 5 55Z" fill="url(#eazara-mark)" /><path d="m32 4 27 15v14L32 18Zm0 52 27-15v14L32 69Z" fill="#6856fc" opacity=".85" /></svg>; }
function ProductSymbol({ name }) {
  if (name === 'learn') return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true"><path d="M4 11 16 5l12 6-12 6L4 11Z"/><path d="M8 15v6l8 4 8-4v-6M28 12v9"/></svg>;
  if (name === 'code') return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 8-8 8 8 8m8-16 8 8-8 8M18 6l-4 20"/></svg>;
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="16" cy="16" r="10" strokeDasharray="2 5" strokeWidth="4"/><path d="m24 4 1.2 2.8L28 8l-2.8 1.2L24 12l-1.2-2.8L20 8l2.8-1.2L24 4Z"/></svg>;
}

function ProductDialog({ selection, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!selection) return;
    const previous = document.activeElement;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    const keyHandler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', keyHandler);
    return () => { document.body.style.overflow = original; document.removeEventListener('keydown', keyHandler); previous?.focus?.(); };
  }, [selection, onClose]);
  if (!selection) return null;
  const chosen = futureProducts.find(p => p.id === selection);
  return <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="products-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" ref={dialogRef} tabIndex={-1}>
      <button className="dialog-close" onClick={onClose} aria-label="Close product details">×</button>
      <div className="kicker">{chosen ? 'PRODUCT CONCEPT' : 'THE EAZARA ECOSYSTEM'}</div>
      <h2 id="dialog-title">{chosen ? chosen.name : 'Explore our products.'}</h2>
      <p>{chosen ? chosen.description : 'Eazara Tools is available now. The additional product names below illustrate possible future directions and are not announced releases.'}</p>
      {chosen ? <div className="dialog-notice">This is a design concept only. No launch or availability date has been announced.</div> : <div className="dialog-products">
        <a href={TOOLS_URL} target="_blank" rel="noreferrer" className="dialog-product live"><Logo size={32}/><span><strong>Eazara Tools</strong><small>Live · Open the platform</small></span><Arrow size={16}/></a>
        {futureProducts.map(p => <div className="dialog-product" key={p.id}><span className={`product-glyph ${p.accent}`}><ProductSymbol name={p.symbol}/></span><span><strong>{p.name}</strong><small>Illustrative concept</small></span><span className="dialog-status">Concept</span></div>)}
      </div>}
      <button className="dialog-done" onClick={onClose}>Close</button>
    </div>
  </div>;
}

function App() {
  const videoRef = useRef(null);
  const [reduced, setReduced] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialog, setDialog] = useState(null);
  const [currentSection, setCurrentSection] = useState('home');
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update(); query.addEventListener?.('change', update);
    return () => query.removeEventListener?.('change', update);
  }, []);
  useEffect(() => { if (videoRef.current) { if (reduced) videoRef.current.pause(); else videoRef.current.play().catch(() => {}); } }, [reduced]);
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) setCurrentSection(visible[0].target.id);
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.1, 0.3, 0.5, 1] });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (reduced || !('IntersectionObserver' in window)) return;
    const nodes = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: .09 });
    nodes.forEach((node, index) => { if (index > 0) node.classList.add('reveal-animated'); observer.observe(node); });
    return () => observer.disconnect();
  }, [reduced]);

  return <>
    <section className="hero" id="home">
      {!reduced && <video className="hero-video" ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster="/media/eazara-poster.webp" aria-hidden="true"><source src="/media/eazara-hero.mp4" type="video/mp4" /></video>}
      <div className="veil" aria-hidden="true"/><div className="bottom-veil" aria-hidden="true"/>
      <header className="header wrap">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Eazara home"><Logo size={42}/><span>EAZARA</span></a>
        <nav className={menuOpen ? 'nav expanded' : 'nav'} aria-label="Main navigation">{navigation.map(([title, id]) => <a key={id} className={currentSection === id ? 'active' : ''} href={'#' + id} onClick={() => setMenuOpen(false)}>{title}</a>)}</nav>
        <a className="header-cta" href="#contact">Let's talk <Arrow size={17}/></a>
        <button className="hamburger" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
      </header>
      <div className="hero-main wrap"><div className="hero-copy">
        <div className="eyebrow"><span className="small-line"/> TECHNOLOGY FOR A BRIGHTER TOMORROW</div>
        <h1>Build Smarter<br/>with <em>EAZARA.</em></h1>
        <p>Thoughtful digital products and tools, built to make work simpler and ideas possible.</p>
        <div className="actions"><a className="main-cta" href="#products">Explore Products <Arrow/></a><a className="link-cta" href="#about">Discover Eazara <Arrow/></a></div>
      </div></div>
      <div className="hero-footer wrap"><a href="#products" className="scroll-label"><span className="small-line"/> SCROLL TO EXPLORE <span className="down">↓</span></a><span className="hero-index">01 / EAZARA</span></div>
    </section>
    <main>
      <section className="panel-section products-section" id="products"><div className="wrap">
        <div className="kicker reveal">01 / PRODUCTS</div>
        <div className="section-top reveal"><div><h2>Products with <em>purpose.</em></h2><p>A growing ecosystem of accessible digital tools, designed to make everyday tasks simpler, faster and more productive.</p></div></div>
        <div className="feature-banner reveal">
          <div className="featured-copy">
            <div className="featured-eyebrow"><Logo size={33}/><span>EAZARA TOOLS</span><span className="feature-pill">FEATURED</span></div>
            <h3>Eazara Tools</h3>
            <p>A collection of free, easy-to-use online tools for PDFs, images, text, study, development, calculations and more.</p>
            <div className="feature-actions"><a href={TOOLS_URL} className="banner-button" target="_blank" rel="noreferrer">Explore Eazara Tools <Arrow size={17}/></a><a href={TOOLS_URL} className="feature-text-link" target="_blank" rel="noreferrer">Visit tools.eazara.com <Arrow size={14}/></a></div>
          </div>
          <div className="feature-art"><img src="/media/eazara-tools-laptop-cropped.webp" alt="Eazara Tools homepage displayed on a laptop with blue luminous architecture" loading="lazy" width="1368" height="779" /></div>
        </div>
        <div className="future-header reveal"><div className="future-header-label"><span className="small-line"/> OTHER PRODUCTS</div><span>Ideas for future Eazara products <span className="concept-note">· Concepts, not announced releases</span></span></div>
        <div className="future-products reveal">
          {futureProducts.map(item => <button className={`future-product ${item.accent}`} type="button" key={item.id} onClick={() => setDialog(item.id)} aria-label={`${item.name}, concept details`}>
            <div className="future-content"><div className="future-brand"><span className={`product-glyph ${item.accent}`}><ProductSymbol name={item.symbol}/></span><strong>{item.name}</strong><span className="concept-pill">CONCEPT</span></div><p>{item.description}</p><span className="future-more">View concept <Arrow size={16}/></span></div><div className="abstract-orbit" aria-hidden="true"/>
          </button>)}
          <div className="future-placeholder"><span className="plus-symbol" aria-hidden="true">+</span><p>More possibilities<br/>ahead.</p></div>
        </div>
        <div className="product-bottom reveal"><button className="view-all" onClick={() => setDialog('all')}>View All Products <Arrow size={18}/></button></div>
      </div></section>
      <section className="panel-section philosophy-section" id="solutions" aria-labelledby="philosophy-title">
        <div className="philosophy-scene" aria-hidden="true" />
        <div className="wrap philosophy-layout">
          <div className="philosophy-space" aria-hidden="true" />
          <div className="philosophy-copy reveal">
            <div className="kicker philosophy-kicker">02 / OUR PHILOSOPHY</div>
            <h2 id="philosophy-title">Technology that<br/><em>feels effortless.</em></h2>
            <p>We focus on useful products and considered digital experiences: thoughtful design, purposeful functionality, and accessible technology.</p>
          </div>
        </div>
      </section>
      <section className="panel-section about-section" id="about" aria-labelledby="about-title">
        <div className="about-scene" aria-hidden="true" />
        <div className="wrap about-layout">
          <div className="about-copy reveal">
            <div className="kicker about-kicker">03 / ABOUT EAZARA</div>
            <h2 id="about-title">Built for what’s<br/><em>next.</em></h2>
            <p>Eazara is a technology brand developing tools that make digital work easier. Eazara Tools is our first flagship product, with room to grow.</p>
          </div>
        </div>
      </section>
      <section className="panel-section contact-banner" id="contact" aria-labelledby="contact-title">
        <div className="contact-scene" aria-hidden="true" />
        <div className="wrap contact-layout">
          <div className="contact-copy reveal">
            <div className="kicker contact-kicker">04 / CONTACT</div>
            <h2 id="contact-title">Make something<br/><em>meaningful.</em></h2>
            <p>Explore Eazara Tools, discover what we are building, and step into the growing Eazara ecosystem.</p>
            <div className="contact-actions">
              <a className="main-cta" href={TOOLS_URL} target="_blank" rel="noreferrer">Explore Eazara Tools <Arrow/></a>
              <a className="link-cta" href="#home">Back to top <Arrow size={16}/></a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand-block reveal">
          <a href="#home" className="brand footer-brand"><Logo size={30}/><span>EAZARA</span></a>
          <p>Technology for a brighter tomorrow. Eazara creates thoughtful digital products that make work simpler and more accessible.</p>
        </div>
        <div className="footer-links reveal">
          <div className="footer-column">
            <h3>Navigate</h3>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#solutions">Solutions</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <h3>Flagship platform</h3>
            <a href={TOOLS_URL} target="_blank" rel="noreferrer">Eazara Tools</a>
            <span>Free browser tools for PDF, images, text, study, development and more.</span>
          </div>
          <div className="footer-column footer-cta-column">
            <h3>Start here</h3>
            <a className="footer-cta" href={TOOLS_URL} target="_blank" rel="noreferrer">Open Eazara Tools <Arrow size={16}/></a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom reveal">
        <span>© {new Date().getFullYear()} Eazara. All rights reserved.</span>
        <span>Designed for clarity, performance and growth.</span>
      </div>
    </footer>
    <ProductDialog selection={dialog} onClose={() => setDialog(null)}/>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
