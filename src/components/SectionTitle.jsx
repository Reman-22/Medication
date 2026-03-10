export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      <span className="section-title__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
