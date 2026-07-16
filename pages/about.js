import Head from 'next/head';
import Link from 'next/link';
import ImgPlaceholder from '../components/ImgPlaceholder';
import useTranslation from '../hooks/useTranslation';

export default function About() {
  const t = useTranslation();
  const a = t.about;

  return (
    <>
      <Head>
        <title>About Jose Hernandez | Bay Area Handyman</title>
        <meta name="description" content="Learn about Jose Hernandez, independent handyman serving San Francisco, Marin County, and the Bay Area." />
      </Head>

      <div className="page-hero">
        <h1>{a.heroTitle}</h1>
        <p>{a.heroSub}</p>
      </div>

      {/* BIO */}
      <section style={{ padding:'5rem 2rem' }}>
        <div className="section-inner">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }} className="about-grid">
            <div style={{ borderRadius:20, overflow:'hidden' }}>
              <ImgPlaceholder height={480} label="Photo of Jose Hernandez" style={{ borderRadius:20, border:'none', background:'#dde8db' }} />
            </div>
            <div>
              <div className="section-label">{a.bioLabel}</div>
              <h2 className="section-title">{a.bioTitle}</h2>
              <p style={{ color:'var(--muted)', lineHeight:1.8, marginBottom:'1rem' }}>{a.bio1}</p>
              <p style={{ color:'var(--muted)', lineHeight:1.8, marginBottom:'1rem' }}>{a.bio2}</p>
              <p style={{ color:'var(--muted)', lineHeight:1.8, marginBottom:'2rem' }}>{a.bio3}</p>
              <Link href="/contact" className="btn-primary">{a.bioBtn}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding:'5rem 2rem', background:'var(--gray)' }}>
        <div className="section-inner">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="section-label">{a.valuesLabel}</div>
            <h2 className="section-title">{a.valuesTitle}</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1.5rem' }}>
            {a.values.map(v => (
              <div key={v.title} style={{ background:'var(--white)', borderRadius:16, padding:'2rem 1.5rem', textAlign:'center', boxShadow:'0 2px 12px rgba(0,0,0,.05)', transition:'transform .2s,box-shadow .2s,border-top-color .2s', borderTop:'3px solid transparent', cursor:'default' }}
                onMouseOver={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(0,0,0,.09)'; e.currentTarget.style.borderTopColor='var(--primary)'; }}
                onMouseOut={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,.05)'; e.currentTarget.style.borderTopColor='transparent'; }}
              >
                <div style={{ fontSize:34, marginBottom:'1rem' }}>{v.icon}</div>
                <h3 style={{ fontSize:'1.05rem', fontWeight:800, marginBottom:'.5rem' }}>{v.title}</h3>
                <p style={{ fontSize:'.88rem', color:'var(--muted)', lineHeight:1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section style={{ padding:'5rem 2rem', background:'var(--black)' }}>
        <div className="section-inner">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }} className="area-grid">
            <div>
              <div className="section-label">{a.areaLabel}</div>
              <h2 className="section-title" style={{ color:'#fff' }}>{a.areaTitle}</h2>
              <p style={{ color:'rgba(255,255,255,.55)', lineHeight:1.8, marginBottom:'2rem' }}>{a.areaSub}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'.75rem' }}>
                {t.common.areas.map(area => (
                  <span key={area} style={{ background:'rgba(142,184,151,.1)', border:'1px solid rgba(142,184,151,.25)', color:'rgba(255,255,255,.88)', borderRadius:50, padding:'.45rem 1.1rem', fontSize:'.85rem', fontWeight:700 }}>{area}</span>
                ))}
              </div>
              <p style={{ color:'rgba(255,255,255,.35)', fontSize:'.85rem', marginTop:'1.5rem' }}>{a.areaFootnote}</p>
            </div>
            <div>
              <ImgPlaceholder height={420} label="Service Area Map or Bay Area Photo" style={{ borderRadius:16, border:'none', background:'#252b24' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <h2>{a.ctaTitle}</h2>
        <p>{a.ctaSub}</p>
        <a href="tel:+14155550000" className="cta-phone">{t.common.ctaPhone}</a>
        <Link href="/contact" className="btn-dark">{a.ctaBtn}</Link>
      </div>

      <style>{`@media(max-width:768px){.about-grid,.area-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
