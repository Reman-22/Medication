import Icon from './Icon';

export default function ContactBlock() {
  return (
    <div className="contact-card">
      <p className="contact-card__label">Need help finding medicine information or services?</p>
      <a className="contact-card__link" href="mailto:Medication_guide@gmail.com">
        Medication_guide@gmail.com
      </a>
      <div className="contact-card__social" aria-label="Social networks">
        <span>Find us on social networks</span>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
          <Icon name="youtube" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <Icon name="facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
          <Icon name="x" />
        </a>
      </div>
    </div>
  );
}
