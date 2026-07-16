import Head from 'next/head';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';

const allSvgs = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:28,height:28}}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:28,height:28}}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:28,height:28}}><path d="M2 13.5V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5M22 13.5H2M7 13.5V2.5M17 13.5V2.5M12 2.5v11"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:28,height:28}}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:28,height:28}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:28,height:28}}><path d="M4 12h16M4 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M4 12V6a2 2 0 0 1 2-2h1"/><line x1="10" y1="3" x2="10" y2="7"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:28,height:28}}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:28,height:28}}><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 0-14.14 14.14A10 10 0 0 0 19.07 4.93"/></svg>,
];

export default function Services() {
  const t = useTranslation();
  const s = t.services;

  return (
    <>
      <Head>
        <title>Services | Jose Hernandez Handyman</title>
        <meta name="description" content="Handyman services in San Francisco and the Bay Area: carpentry, plumbing, painting, tile, electrical, and more." />
      </Head>

      <div className="page-hero">
        <h1>{s.heroTitle}</h1>
        <p>{s.heroSub}</p>
      </div>

      {/* SERVICE ROWS */}
      <section style={{ padding:'5rem 2rem' }}>
        <div className="section-inner">
          <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>
            {s.list.map((svc, i) => (
              <div key={svc.title} style={{ display:'grid', gridTemplateColumns:'72px 1fr', gap:'2rem', background:'var(--gray)', borderRadius:20, padding:'2.5rem', alignItems:'start', transition:'box-shadow .2s,border-left-color .2s', borderLeft:'4px solid transparent', cursor:'default' }}
                className="service-row"
                onMouseOver={e => { e.currentTarget.style.boxShadow='0 6px 28px rgba(0,0,0,.07)'; e.currentTarget.style.borderLeftColor='var(--primary)'; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderLeftColor='transparent'; }}
              >
                <div style={{ width:64, height:64, background:'var(--black)', borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:'var(--green-accent)' }}>
                  {allSvgs[i]}
                </div>
                <div>
                  <h3 style={{ fontSize:'1.25rem', fontWeight:800, color:'var(--text)', marginBottom:'.6rem' }}>{svc.title}</h3>
                  <p style={{ color:'var(--muted)', lineHeight:1.7, marginBottom:'1rem' }}>{svc.desc}</p>
                  <div style={{ display:'flex', gap:'.5rem', flexWrap:'wrap' }}>
                    {svc.tags.map(tag => (
                      <span key={tag} style={{ background:'var(--primary-light)', color:'var(--primary-dark)', borderRadius:50, padding:'.25rem .85rem', fontSize:'.8rem', fontWeight:700 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding:'5rem 2rem', background:'var(--gray)' }}>
        <div className="section-inner">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="section-label">{s.processLabel}</div>
            <h2 className="section-title">{s.processTitle}</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:0 }}>
            {s.steps.map((step, i, arr) => (
              <div key={step.num} style={{ padding:'2rem', borderRight: i < arr.length-1 ? '1px solid #d5e3d3' : 'none', textAlign:'center' }}>
                <div style={{ fontFamily:'Lora,serif', fontSize:42, fontWeight:600, color:'var(--primary)', opacity:.35, lineHeight:1, marginBottom:12 }}>{step.num}</div>
                <h3 style={{ fontWeight:800, fontSize:'1.05rem', marginBottom:'.5rem' }}>{step.title}</h3>
                <p style={{ fontSize:'.88rem', color:'var(--muted)', lineHeight:1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>{s.ctaTitle}</h2>
        <p>{s.ctaSub}</p>
        <a href="tel:+14155550000" className="cta-phone">(415) 555-0000</a>
        <Link href="/contact" className="btn-dark">{s.ctaBtn}</Link>
      </div>

      <style>{`@media(max-width:768px){.service-row{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
