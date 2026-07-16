export default function ImgPlaceholder({ height = 300, label = 'Add Image', style = {}, className = '' }) {
  return (
    <div className={`img-placeholder ${className}`} style={{ height, ...style }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".4">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
