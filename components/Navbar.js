import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from '../hooks/useTranslation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const t = useTranslation();

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/gallery', label: t.nav.gallery },
  ];

  const toggleLocale = () => {
    const next = router.locale === 'en' ? 'es' : 'en';
    router.push(router.pathname, router.asPath, { locale: next });
  };

  return (
    <>
      <nav style={{ background: 'var(--black)', position: 'sticky', top: 0, zIndex: 100, padding: '0 2rem', boxShadow: '0 2px 16px rgba(0,0,0,.5)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>

          {/* Brand */}
          <Link href="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ fontFamily: 'Lora, serif', fontSize: 18, fontWeight: 600, color: '#fff' }}>Jose Hernandez</span>
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 11, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--green-accent)', marginTop: 1 }}>
              {router.locale === 'es' ? 'Servicios de Mantenimiento' : 'Handyman Services'}
            </span>
          </Link>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{
                  color: router.pathname === l.href ? 'var(--green-accent)' : 'rgba(255,255,255,.8)',
                  fontWeight: 600, fontSize: '.95rem', transition: 'color .2s'
                }}>
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Language toggle */}
            <li>
              <button onClick={toggleLocale} style={{
                background: 'rgba(255,255,255,.08)',
                border: '1px solid rgba(255,255,255,.2)',
                color: 'rgba(255,255,255,.85)',
                borderRadius: 50,
                padding: '.3rem .85rem',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '.85rem',
                cursor: 'pointer',
                transition: 'background .2s',
                letterSpacing: '.04em',
              }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,.15)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'}
              >
                {router.locale === 'en' ? 'ES' : 'EN'}
              </button>
            </li>

            {/* CTA */}
            <li>
              <Link href="/contact" style={{
                background: 'var(--primary)', color: 'var(--white)',
                padding: '.5rem 1.3rem', borderRadius: 50,
                fontWeight: 700, fontSize: '.95rem', transition: 'background .2s'
              }}
                onMouseOver={e => e.currentTarget.style.background = 'var(--primary-dark)'}
                onMouseOut={e => e.currentTarget.style.background = 'var(--primary)'}
              >
                {t.nav.getQuote}
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="nav-toggle"
            style={{ display: 'none', background: 'none', border: 0, cursor: 'pointer', padding: '.4rem', marginLeft: '1rem' }}>
            <span style={{ display: 'block', width: 24, height: 2, background: '#fff', margin: '5px 0', borderRadius: 2, transition: 'transform .2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#fff', margin: '5px 0', borderRadius: 2, opacity: open ? 0 : 1, transition: 'opacity .2s' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#fff', margin: '5px 0', borderRadius: 2, transition: 'transform .2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', padding: '1rem 2rem 1.5rem', background: 'var(--black)' }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                display: 'block', padding: '.75rem 0',
                color: router.pathname === l.href ? 'var(--green-accent)' : 'rgba(255,255,255,.8)',
                fontWeight: 600, fontSize: '1rem',
                borderBottom: '1px solid rgba(255,255,255,.08)'
              }}>
                {l.label}
              </Link>
            ))}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
              <Link href="/contact" className="btn-primary" onClick={() => setOpen(false)} style={{ fontSize: '.9rem', padding: '.6rem 1.3rem' }}>
                {t.nav.getQuote}
              </Link>
              <button onClick={() => { toggleLocale(); setOpen(false); }} style={{
                background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.2)',
                color: 'rgba(255,255,255,.85)', borderRadius: 50, padding: '.45rem 1rem',
                fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '.85rem', cursor: 'pointer'
              }}>
                {router.locale === 'en' ? 'Español' : 'English'}
              </button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
