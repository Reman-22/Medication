import { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import ServiceCard from './components/ServiceCard';
import CategoryCard from './components/CategoryCard';
import FeatureCard from './components/FeatureCard';
import ContactBlock from './components/ContactBlock';
import Icon from './components/Icon';

const services = [
  {
    icon: 'alphabet',
    title: 'Medicine by alphabet',
    text: 'Browse treatments quickly through a clean alphabetical index that helps users reach the right medicine page faster.'
  },
  {
    icon: 'capsules',
    title: 'Common medicine',
    text: 'Highlight the most frequently used medicines with a clear summary, practical details, and easy-to-read organization.'
  },
  {
    icon: 'stethoscope',
    title: 'Medicine by condition',
    text: 'Discover medicine suggestions grouped by health condition so visitors can navigate information in a more logical way.'
  }
];

const categories = [
  {
    icon: 'heartPulse',
    title: 'Health care',
    text: 'General wellness, daily care tips, and trusted medical information presented in a simple and helpful layout.'
  },
  {
    icon: 'firstAid',
    title: 'First aid',
    text: 'Fast access to urgent care basics and essential first-aid guidance for everyday situations and emergencies.'
  },
  {
    icon: 'childCare',
    title: 'Child care',
    text: 'Friendly content blocks for parents with concise, accessible information focused on children and family care.'
  }
];

const features = [
  {
    icon: 'lightbulb',
    title: 'tell us your idea',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed ut possimus ipsum eos architecto.'
  },
  {
    icon: 'gem',
    title: 'we will do all the work ',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed ut possimus ipsum eos architecto.'
  },
  {
    icon: 'shieldHeart',
    title: 'your product is worldwide',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed ut possimus ipsum eos architecto.'
  }
];

export default function Index() {
  const [search, setSearch] = useState('');

  const normalizedSearch = search.trim().toLowerCase();

  const filteredServices = useMemo(() => {
    if (!normalizedSearch) return services;
    return services.filter((item) =>
      `${item.title} ${item.text}`.toLowerCase().includes(normalizedSearch)
    );
  }, [normalizedSearch]);

  const filteredCategories = useMemo(() => {
    if (!normalizedSearch) return categories;
    return categories.filter((item) =>
      `${item.title} ${item.text}`.toLowerCase().includes(normalizedSearch)
    );
  }, [normalizedSearch]);

  return (
    <div className="page-shell">
      <Header search={search} onSearchChange={setSearch} />

      <main>
        <Hero search={search} resultsCount={filteredServices.length + filteredCategories.length} />

        <section className="section services" id="services">
          <div className="container">
            <SectionTitle
              eyebrow="Healthcare support"
              title="Services"
              description="Clear, fast, and more professional access to the most important medicine-related content."
            />

            <div className="services-layout">
              <div className="services-list">
                {filteredServices.length ? (
                  filteredServices.map((service) => <ServiceCard key={service.title} {...service} />)
                ) : (
                  <div className="empty-state">
                    <Icon name="info" />
                    <p>No matching services found for this search.</p>
                  </div>
                )}
              </div>

              <aside className="services-panel" aria-label="Medication guide summary">
                <div className="services-panel__badge">Smart medical directory</div>
                <h3>Designed to guide users with less effort and better clarity.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed ut possimus ipsum eos architecto.
                </p>
                <div className="panel-highlights">
                  <span>Auto-complete</span>
                  <span>generics</span>
                  <span>drug interaction</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section--muted" id="sort">
          <div className="container">
            <SectionTitle
              eyebrow="Main categories"
              title="Sorts"
              description="Content is grouped into key sections so visitors can quickly scan and choose the right area."
            />

            <div className="cards-grid">
              {filteredCategories.length ? (
                filteredCategories.map((category) => <CategoryCard key={category.title} {...category} />)
              ) : (
                <div className="empty-state empty-state--wide">
                  <Icon name="search" />
                  <p>No matching categories found for this search.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about-layout">
            <div className="about-copy">
              <SectionTitle
                eyebrow="About the project"
                title="About"
                description="A medication guide website ."
                align="left"
              />
              <p className="lead-paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde tempora, aspernatur odio a debitis suscipit veniam laborum molestiae officia consectetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt fugit mollitia labore cum quibusdam architecto illum cumque eligendi veniam exercitationem aspernatur, magnam eum, reprehenderit quaerat deserunt, porro magni? Laudantium?
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <strong>Number of medications</strong>
                <span>more than 5000 drug type</span>
              </div>
              <div className="stat-card">
                <strong>Services</strong>
                <span>50 different services</span>
              </div>
              <div className="stat-card">
                <strong>Medical article</strong>
                <span>more than 300 reference articles explaining treatment cases</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section features section--soft">
          <div className="container">
            <SectionTitle
              eyebrow="Why this version is better"
              title="Highlights"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt fugit mollitia labore cum quibusdam architecto ."
            />
            <div className="features-grid">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <SectionTitle
              eyebrow="Need support?"
              title="Contact"
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed ut possimus ipsum eos architecto.'
            />
            <ContactBlock />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__content">
          <p>
            &copy; 2026 <span>Medication Guide</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
