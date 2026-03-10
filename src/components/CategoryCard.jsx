import Icon from './Icon';

export default function CategoryCard({ icon, title, text }) {
  return (
    <article className="category-card">
      <div className="category-card__icon">
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#contact">
        Learn more <Icon name="arrowRight" className="inline-icon--small" />
      </a>
    </article>
  );
}
