import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';

export default function Footer() {
  const t = useTranslation();

  return (
    <footer style={{ background: 'var(--charcoal)', color: 'rgba(255,255,255,.6)', textAlign: 'center', padding: '2.5rem 2rem', fontSize: '.9rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['/', t.nav.home], ['/about', t.nav.about], ['/services', t.nav.services], ['/gallery', t.nav.gallery], ['/contact', t.nav.getQuote]].map(([href, label]) => (
          <Link key={href} href={href} style={{ color: 'rgba(255,255,255,.6)', transition: 'color .2s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--green-accent)'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,.6)'}
          >
            {label}
          </Link>
        ))}
      </div>
      <p>
        © {new Date().getFullYear()} {t.footer.rights} &nbsp;·&nbsp;{' '}
        <a href="tel:+14155550000" style={{ color: 'var(--green-accent)' }}>(415) 555-0000</a>
        &nbsp;·&nbsp;{' '}
        <a href="mailto:jose@josehernandezhandyman.com" style={{ color: 'var(--green-accent)' }}>jose@josehernandezhandyman.com</a>
      </p>
      <p style={{ marginTop: '.5rem', fontSize: '.8rem', color: 'rgba(255,255,255,.3)' }}>{t.footer.tagline}</p>
    </footer>
  );
}
