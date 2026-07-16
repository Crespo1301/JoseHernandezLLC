import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';

export default function Contact() {
  const t = useTranslation();
  const c = t.contact;
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Connect to Formspree or Netlify Forms — see README
    setSent(true);
  };

  const inputStyle = {
    width:'100%', padding:'.75rem 1rem',
    fontFamily:'Nunito,sans-serif', fontSize:'1rem',
    borderRadius:10, border:'1.5px solid #c5d8c3',
    outline:'none', background:'var(--white)',
    boxSizing:'border-box', transition:'border-color .2s'
  };
  const labelStyle = {
    display:'block', fontWeight:800, fontSize:'.8rem',
    letterSpacing:'.06em', textTransform:'uppercase',
    color:'var(--text)', marginBottom:'.4rem'
  };

  return (
    <>
      <Head>
        <title>Contact | Jose Hernandez Handyman</title>
        <meta name="description" content="Contact Jose Hernandez for a free handyman estimate in San Francisco and the Bay Area." />
      </Head>

      <div className="page-hero">
        <h1>{c.heroTitle}</h1>
        <p>{c.heroSub}</p>
      </div>

      <section style={{ padding:'5rem 2rem' }}>
        <div className="section-inner">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'4rem', alignItems:'start' }} className="contact-grid">

            {/* Info */}
            <div>
              <div className="section-label">{c.infoLabel}</div>
              <h2 className="section-title">{c.infoTitle}</h2>
              {c.contactItems.map(item => (
                <div key={item.label} style={{ display:'flex', gap:'1rem', marginBottom:'1.25rem', padding:'1.25rem 1.5rem', background:'var(--gray)', borderRadius:16, alignItems:'flex-start' }}>
                  <span style={{ fontSize:22, flexShrink:0, marginTop:2 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize:'.75rem', fontWeight:800, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--primary)', marginBottom:'.2rem' }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ fontWeight:800, fontSize:'1rem', color:'var(--text)', display:'block', marginBottom:'.2rem' }}>{item.value}</a>
                      : <div style={{ fontWeight:800, fontSize:'1rem', marginBottom:'.2rem' }}>{item.value}</div>
                    }
                    <p style={{ fontSize:'.85rem', color:'var(--muted)' }}>{item.sub}</p>
                  </div>
                </div>
              ))}
              <div style={{ background:'var(--black)', borderRadius:16, padding:'1.5rem' }}>
                <div style={{ fontFamily:'Lora,serif', fontSize:'1.2rem', color:'#fff', marginBottom:'.5rem' }}>{c.freeEstimateTitle}</div>
                <p style={{ fontSize:'.9rem', color:'rgba(255,255,255,.6)', lineHeight:1.7 }}>{c.freeEstimateSub}</p>
              </div>
            </div>

            {/* Form */}
            <div style={{ background:'var(--white)', border:'1px solid #d5e3d3', borderRadius:20, padding:'2.5rem', boxShadow:'0 4px 24px rgba(0,0,0,.06)' }}>
              {sent ? (
                <div style={{ textAlign:'center', padding:'3rem 0' }}>
                  <div style={{ fontSize:54, marginBottom:16 }}>✅</div>
                  <h3 style={{ fontFamily:'Lora,serif', fontSize:'1.8rem', marginBottom:'.75rem' }}>{c.successTitle}</h3>
                  <p style={{ color:'var(--muted)', lineHeight:1.7 }}>{c.successMsg}</p>
                  <button onClick={() => { setSent(false); setForm({ name:'', phone:'', email:'', service:'', message:'' }); }}
                    style={{ marginTop:'1.5rem', background:'none', border:'none', color:'var(--primary)', fontWeight:700, cursor:'pointer', fontSize:'1rem', fontFamily:'Nunito,sans-serif' }}>
                    {c.successReset}
                  </button>
                </div>
              ) : (
                <>
                  <div className="section-label">{c.formLabel}</div>
                  <h2 style={{ fontFamily:'Lora,serif', fontSize:'1.6rem', marginBottom:'1.5rem' }}>{c.formTitle}</h2>
                  <form onSubmit={handleSubmit}>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1rem' }}>
                      <div>
                        <label style={labelStyle}>{c.fields.name} *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder={c.fields.namePlaceholder} style={inputStyle}
                          onFocus={e => e.target.style.borderColor='var(--primary)'}
                          onBlur={e => e.target.style.borderColor='#c5d8c3'} />
                      </div>
                      <div>
                        <label style={labelStyle}>{c.fields.phone}</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder={c.fields.phonePlaceholder} type="tel" style={inputStyle}
                          onFocus={e => e.target.style.borderColor='var(--primary)'}
                          onBlur={e => e.target.style.borderColor='#c5d8c3'} />
                      </div>
                    </div>
                    <div style={{ marginBottom:'1rem' }}>
                      <label style={labelStyle}>{c.fields.email} *</label>
                      <input name="email" value={form.email} onChange={handleChange} required placeholder={c.fields.emailPlaceholder} type="email" style={inputStyle}
                        onFocus={e => e.target.style.borderColor='var(--primary)'}
                        onBlur={e => e.target.style.borderColor='#c5d8c3'} />
                    </div>
                    <div style={{ marginBottom:'1rem' }}>
                      <label style={labelStyle}>{c.fields.service}</label>
                      <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, appearance:'none' }}
                        onFocus={e => e.target.style.borderColor='var(--primary)'}
                        onBlur={e => e.target.style.borderColor='#c5d8c3'}>
                        <option value="">{c.fields.servicePlaceholder}</option>
                        {c.services.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom:'1.5rem' }}>
                      <label style={labelStyle}>{c.fields.message} *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                        placeholder={c.fields.messagePlaceholder}
                        style={{ ...inputStyle, resize:'vertical' }}
                        onFocus={e => e.target.style.borderColor='var(--primary)'}
                        onBlur={e => e.target.style.borderColor='#c5d8c3'} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width:'100%', textAlign:'center', fontSize:'1rem', padding:'.9rem' }}>
                      {c.fields.submit}
                    </button>
                    <p style={{ fontSize:'.8rem', color:'var(--muted)', marginTop:'.75rem', textAlign:'center' }}>
                      {c.fields.responseTime}
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
