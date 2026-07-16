import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import ImgPlaceholder from '../components/ImgPlaceholder';
import useTranslation from '../hooks/useTranslation';

const galleryItems = [
  { id:1, categoryIndex:1, label:'Custom Shelving – Pacific Heights', tall:true },
  { id:2, categoryIndex:2, label:'Interior Repaint – Noe Valley', tall:false },
  { id:3, categoryIndex:3, label:'Bathroom Tile – Marina District', tall:false },
  { id:4, categoryIndex:4, label:'Full Bath Refresh – Mill Valley', tall:false },
  { id:5, categoryIndex:1, label:'Deck Repair – Tiburon', tall:false },
  { id:6, categoryIndex:2, label:'Exterior Paint – Sausalito', tall:true },
  { id:7, categoryIndex:5, label:'Fence Install – Daly City', tall:false },
  { id:8, categoryIndex:3, label:'Hardwood Repair – Castro', tall:false },
  { id:9, categoryIndex:4, label:'Vanity & Fixtures – Corte Madera', tall:false },
  { id:10, categoryIndex:1, label:'Built-in Bookcase – Russian Hill', tall:true },
  { id:11, categoryIndex:5, label:'Drywall Patch – Sunset District', tall:false },
  { id:12, categoryIndex:2, label:'Cabinet Painting – Bernal Heights', tall:false },
];

export default function Gallery() {
  const t = useTranslation();
  const g = t.gallery;
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = activeIndex === 0
    ? galleryItems
    : galleryItems.filter(item => item.categoryIndex === activeIndex);

  return (
    <>
      <Head>
        <title>Gallery | Jose Hernandez Handyman</title>
        <meta name="description" content="Browse photos of completed home repair and improvement projects by Jose Hernandez across the Bay Area." />
      </Head>

      <div className="page-hero">
        <h1>{g.heroTitle}</h1>
        <p>{g.heroSub}</p>
      </div>

      {/* FILTER */}
      <div style={{ background:'var(--gray)', borderBottom:'1px solid #d8e6d6', padding:'1.25rem 2rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', gap:'.5rem', flexWrap:'wrap' }}>
          {g.categories.map((cat, i) => (
            <button key={cat} onClick={() => setActiveIndex(i)} style={{
              fontFamily:'Nunito,sans-serif', fontSize:'.85rem', fontWeight:700,
              padding:'.45rem 1.1rem', borderRadius:50,
              border: activeIndex === i ? 'none' : '1.5px solid #c5d8c3',
              background: activeIndex === i ? 'var(--primary)' : 'var(--white)',
              color: activeIndex === i ? '#fff' : 'var(--text)',
              cursor:'pointer', transition:'all .2s'
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <section style={{ padding:'3rem 2rem 5rem', background:'var(--gray)' }}>
        <div className="section-inner">
          <div style={{ columns:'3 280px', columnGap:12 }}>
            {filtered.map(item => (
              <div key={item.id} style={{ breakInside:'avoid', marginBottom:12 }}>
                <div style={{ position:'relative', borderRadius:16, overflow:'hidden' }}
                  onMouseOver={e => e.currentTarget.querySelector('.overlay').style.opacity='1'}
                  onMouseOut={e => e.currentTarget.querySelector('.overlay').style.opacity='0'}
                >
                  {/*
                    TO ADD REAL PHOTOS: Replace ImgPlaceholder with:
                    <img src="/images/your-photo.jpg" alt={item.label}
                      style={{ width:'100%', height:item.tall?340:220, objectFit:'cover', display:'block' }} />
                  */}
                  <ImgPlaceholder height={item.tall ? 340 : 220} label={item.label} style={{ borderRadius:0, border:'none' }} />
                  <div className="overlay" style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(4,4,3,.85) 0%,transparent 55%)', opacity:0, transition:'opacity .25s', display:'flex', alignItems:'flex-end', padding:16 }}>
                    <div>
                      <div style={{ fontSize:'.72rem', fontWeight:800, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--green-accent)', marginBottom:3 }}>{g.categories[item.categoryIndex]}</div>
                      <div style={{ fontFamily:'Lora,serif', fontSize:'1rem', fontWeight:600, color:'#fff' }}>{item.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p style={{ textAlign:'center', color:'var(--muted)', padding:'4rem 0' }}>{g.empty}</p>
          )}
          <div style={{ background:'rgba(91,117,83,.08)', border:'1px solid rgba(91,117,83,.2)', borderRadius:12, padding:'1rem 1.5rem', marginTop:'2rem', textAlign:'center' }}>
            <p style={{ fontSize:'.85rem', color:'var(--muted)' }}>📸 {g.placeholderNote}</p>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>{g.ctaTitle}</h2>
        <p>{g.ctaSub}</p>
        <a href="tel:+14155550000" className="cta-phone">(415) 555-0000</a>
        <Link href="/contact" className="btn-dark">{g.ctaBtn}</Link>
      </div>
    </>
  );
}
