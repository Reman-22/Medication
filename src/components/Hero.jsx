import Icon from './Icon';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__content">
        <div className="hero__copy">
          <span className="eyebrow-pill">Modern healthcare landing page</span>
          <h1 >Medication guide To find all type of medicine or services.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam voluptatem esse cupiditate reiciendis laborum velit.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#services">
              Explore services
            </a>
            <a className="btn btn--secondary" href="#contact">
              Contact support
            </a>
          </div>

          <div className="hero__meta">
            <div>
              <strong>Number of medications</strong>
              <span> more than 5000 drug type</span>
            </div>
            <div>
              <strong>Services</strong>
              <span>50 different services</span>
            </div>
            <div>
              <strong>Medical article</strong>
              <span>more than 300 reference articles explaining treatment cases</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-card hero-card--primary">
            <Icon name="bottle" />
            <h3>Medicine lookup</h3>
            <p>A quick and easy guid to all types of treatment</p>
          </div>
          <div className="hero-card hero-card--secondary">
            <Icon name="heartPulse" />
            <span>Your health is in your hands</span>
          </div>
          <div className="hero-card hero-card--secondary">
            <Icon name="mobile" />
            <span>Mobile-first improvements</span>
          </div>
        </div>
      </div>
    </section>
  );
}
