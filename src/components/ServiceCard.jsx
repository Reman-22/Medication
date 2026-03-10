import Icon from './Icon';

export default function ServiceCard({ icon, title, text }) {
  return (
    <article className="service-card">
      <div className="icon-wrap">
        <Icon name={icon} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
