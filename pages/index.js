import Head from 'next/head';
import Link from 'next/link';
import ImgPlaceholder from '../components/ImgPlaceholder';
import useTranslation from '../hooks/useTranslation';

const svgs = {
  carpentry: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  plumbing:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>,
  painting:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13.5V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5M22 13.5H2M7 13.5V2.5M17 13.5V2.5M12 2.5v11"/></svg>,
  tile:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  electric:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  general:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 0-14.14 14.14A10 10 0 0 0 19.07 4.93"/></svg>,
};

const whySvgs = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
];

const serviceSvgKeys = ['carpentry', 'plumbing', 'painting', 'tile', 'electric', 'general'];

export default function Home() {
  const t = useTranslation();
  const h = t.home;
  const services = t.services.list.slice(0, 6);

  return (
    <>
      <Head>
        <title>Jose Hernandez Handyman Services | San Francisco Bay Area</title>
        <meta name="description" content="Professional handyman services in San Francisco and the Bay Area. Carpentry, painting, plumbing, tile, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* HERO */}
      <section style={{ position:'relative', color:'#fff', padding:'6rem 2rem 5rem', textAlign:'center', overflow:'hidden', background:'var(--black)' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 65% 50%, rgba(142,184,151,.18) 0%, transparent 60%)', zIndex:1, pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:2 }}>
          <div style={{ display:'inline-block', background:'rgba(157,219,173,.12)', color:'var(--green-accent)', border:'1px solid rgba(157,219,173,.4)', borderRadius:50, padding:'.35rem 1.1rem', fontSize:'.85rem', fontWeight:700, letterSpacing:'.05em', marginBottom:'1.5rem' }}>
            {h.heroBadge}
          </div>
          <h1 style={{ fontFamily:'Lora, serif', fontSize:'clamp(2.2rem,5vw,3.6rem)', fontWeight:600, lineHeight:1.2, maxWidth:700, margin:'0 auto 1.2rem' }}>
            {h.heroTitle} <span style={{ color:'var(--green-accent)' }}>{h.heroTitleAccent}</span> {h.heroTitleEnd}
          </h1>
          <p style={{ fontSize:'1.15rem', color:'rgba(255,255,255,.82)', maxWidth:520, margin:'0 auto 2.5rem', lineHeight:1.7 }}>
            {h.heroSub}
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/contact" className="btn-primary">{h.heroCta}</Link>
            <Link href="/services" className="btn-secondary">{h.heroServices}</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background:'var(--primary)', padding:'1rem 2rem' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'flex', justifyContent:'center', gap:'2.5rem', flexWrap:'wrap' }}>
          {h.trustBar.map(t => (
            <div key={t} style={{ display:'flex', alignItems:'center', gap:'.6rem', fontWeight:700, fontSize:'.9rem', color:'#fff' }}>
              <span style={{ width:6, height:6, background:'rgba(255,255,255,.55)', borderRadius:'50%', display:'inline-block', flexShrink:0 }} />{t}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section style={{ padding:'5rem 2rem', background:'var(--gray)' }}>
        <div className="section-inner">
          <div className="section-label">{h.servicesLabel}</div>
          <h2 className="section-title">{h.servicesTitle}</h2>
          <p className="section-sub">{h.servicesSub}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1.5rem', marginTop:'3rem' }}>
            {services.map((s, i) => (
              <div key={s.title} style={{ background:'var(--white)', borderRadius:16, padding:'2rem 1.5rem', textAlign:'center', boxShadow:'0 2px 12px rgba(0,0,0,.05)', transition:'transform .2s,box-shadow .2s,border-top-color .2s', borderTop:'3px solid transparent', cursor:'default' }}
                onMouseOver={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(0,0,0,.09)'; e.currentTarget.style.borderTopColor='var(--primary)'; }}
                onMouseOut={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,.05)'; e.currentTarget.style.borderTopColor='transparent'; }}
              >
                <div style={{ width:56, height:56, background:'var(--primary-light)', borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1rem' }}>
                  <div style={{ width:26, height:26, color:'var(--primary)' }}>{svgs[serviceSvgKeys[i]]}</div>
                </div>
                <h3 style={{ fontSize:'1.05rem', fontWeight:800, color:'var(--text)', marginBottom:'.5rem' }}>{s.title}</h3>
                <p style={{ fontSize:'.88rem', color:'var(--muted)', lineHeight:1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'2.5rem' }}>
            <Link href="/services" className="btn-primary">{h.servicesAll}</Link>
          </div>
        </div>
      </section>

      {/* WHY JOSE */}
      <section style={{ padding:'5rem 2rem' }}>
        <div className="section-inner">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }} className="why-grid">
            <div>
              <div className="section-label">{h.whyLabel}</div>
              <h2 className="section-title">{h.whyTitle}</h2>
              <ul style={{ listStyle:'none', marginTop:'2rem', display:'flex', flexDirection:'column', gap:'1.2rem' }}>
                {t.common.whyItems.map((w, i) => (
                  <li key={w.title} style={{ display:'flex', gap:'1rem', alignItems:'flex-start' }}>
                    <div style={{ background:'var(--primary-light)', borderRadius:10, width:42, height:42, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <div style={{ width:20, height:20, color:'var(--primary)' }}>{whySvgs[i]}</div>
                    </div>
                    <div>
                      <h4 style={{ fontWeight:800, color:'var(--text)', marginBottom:'.2rem' }}>{w.title}</h4>
                      <p style={{ fontSize:'.9rem', color:'var(--muted)', lineHeight:1.5 }}>{w.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Owner photo panel */}
            <div style={{ borderRadius:20, overflow:'hidden', position:'relative', minHeight:420, background:'var(--charcoal)' }}>
              <ImgPlaceholder height={420} label="Photo of Jose Hernandez" style={{ borderRadius:0, border:'none', background:'#252b24' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(4,4,3,.9) 0%,rgba(4,4,3,.4) 55%,transparent 100%)', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'2rem' }}>
                <div style={{ fontSize:'.75rem', letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(255,255,255,.45)', marginBottom:'.3rem' }}>{h.ownerLabel}</div>
                <div style={{ fontFamily:'Lora,serif', fontSize:'1.5rem', color:'#fff', marginBottom:'.2rem' }}>Jose Hernandez</div>
                <div style={{ fontSize:'.9rem', color:'rgba(255,255,255,.5)', marginBottom:'1.2rem' }}>{h.ownerSub}</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'.75rem' }}>
                  {h.stats.map(([num, label]) => (
                    <div key={label} style={{ background:'rgba(157,219,173,.1)', border:'1px solid rgba(157,219,173,.2)', borderRadius:10, padding:'1rem', textAlign:'center', backdropFilter:'blur(6px)' }}>
                      <div style={{ fontSize:'1.7rem', fontWeight:800, color:'var(--green-accent)' }}>{num}</div>
                      <div style={{ fontSize:'.78rem', color:'rgba(255,255,255,.55)', marginTop:'.2rem' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section style={{ padding:'5rem 2rem', background:'var(--gray)' }}>
        <div className="section-inner">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'2rem', flexWrap:'wrap', gap:16 }}>
            <div>
              <div className="section-label">{h.galleryLabel}</div>
              <h2 className="section-title" style={{ marginBottom:0 }}>{h.galleryTitle}</h2>
            </div>
            <Link href="/gallery" className="btn-dark">{h.galleryBtn}</Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gridTemplateRows:'240px 240px', gap:12 }}>
            <ImgPlaceholder height="100%" label="Featured Project" style={{ gridRow:'1/3', height:'100%', borderRadius:16 }} />
            <ImgPlaceholder height="100%" label="Project Photo" style={{ height:'100%', borderRadius:16 }} />
            <ImgPlaceholder height="100%" label="Project Photo" style={{ height:'100%', borderRadius:16 }} />
            <ImgPlaceholder height="100%" label="Project Photo" style={{ height:'100%', borderRadius:16 }} />
            <ImgPlaceholder height="100%" label="Project Photo" style={{ height:'100%', borderRadius:16 }} />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding:'5rem 2rem', background:'var(--black)' }}>
        <div className="section-inner">
          <div className="section-label">{h.areasLabel}</div>
          <h2 className="section-title" style={{ color:'#fff' }}>{h.areasTitle}</h2>
          <p className="section-sub" style={{ color:'rgba(255,255,255,.5)' }}>{h.areasSub}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.75rem', marginTop:'2rem' }}>
            {t.common.areas.map(a => (
              <span key={a} style={{ background:'rgba(142,184,151,.1)', border:'1px solid rgba(142,184,151,.25)', color:'rgba(255,255,255,.88)', borderRadius:50, padding:'.45rem 1.1rem', fontSize:'.9rem', fontWeight:700 }}>{a}</span>
            ))}
          </div>
          <p style={{ color:'rgba(255,255,255,.35)', fontSize:'.9rem', marginTop:'1.5rem' }}>{h.areasFootnote}</p>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <h2>{h.ctaTitle}</h2>
        <p>{h.ctaSub}</p>
        <a href="tel:+14155550000" className="cta-phone">{t.common.ctaPhone}</a>
        <Link href="/contact" className="btn-dark">{h.ctaBtn}</Link>
      </div>

      <style>{`@media(max-width:768px){.why-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
