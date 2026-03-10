import Icon from './Icon';

export default function FeatureCard({ icon, title, text }) {
  return (
    <article className="feature-card">
      <Icon name={icon} className="feature-card__icon-svg" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
