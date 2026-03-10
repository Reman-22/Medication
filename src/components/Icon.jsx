const svgProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

function Svg({ children, viewBox = '0 0 24 24' }) {
  return (
    <svg viewBox={viewBox} aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

const icons = {
  pills: (
    <Svg>
      <path {...svgProps} d="M7 8a4 4 0 0 1 5.66 0l3.34 3.34a4 4 0 1 1-5.66 5.66L7 13.66A4 4 0 0 1 7 8Z" />
      <path {...svgProps} d="m9 10 5 5" />
      <path {...svgProps} d="M6.2 17.8 3 21" />
    </Svg>
  ),
  search: (
    <Svg>
      <circle {...svgProps} cx="11" cy="11" r="6" />
      <path {...svgProps} d="m20 20-4.2-4.2" />
    </Svg>
  ),
  alphabet: (
    <div className="icon-text">A-Z</div>
  ),
  capsules: (
    <Svg>
      <rect {...svgProps} x="4" y="6" width="8" height="12" rx="4" />
      <rect {...svgProps} x="12" y="6" width="8" height="12" rx="4" />
      <path {...svgProps} d="M8 6v12" />
      <path {...svgProps} d="M16 6v12" />
    </Svg>
  ),
  stethoscope: (
    <Svg>
      <path {...svgProps} d="M7 4v6a4 4 0 0 0 8 0V4" />
      <path {...svgProps} d="M7 4H5" />
      <path {...svgProps} d="M17 4h2" />
      <path {...svgProps} d="M15 15a4 4 0 1 0 4 4v-1" />
      <circle {...svgProps} cx="19" cy="14" r="2" />
    </Svg>
  ),
  heartPulse: (
    <Svg>
      <path {...svgProps} d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
      <path {...svgProps} d="m8.5 12 1.4 0 1.1-2.2 1.6 4 1.1-1.8H16" />
    </Svg>
  ),
  firstAid: (
    <Svg>
      <rect {...svgProps} x="4" y="6" width="16" height="12" rx="3" />
      <path {...svgProps} d="M12 9v6" />
      <path {...svgProps} d="M9 12h6" />
    </Svg>
  ),
  childCare: (
    <Svg>
      <circle {...svgProps} cx="12" cy="8" r="3" />
      <path {...svgProps} d="M7 19a5 5 0 0 1 10 0" />
      <path {...svgProps} d="M5 14c1.5-.6 2.5-1.2 3-2" />
      <path {...svgProps} d="M19 14c-1.5-.6-2.5-1.2-3-2" />
    </Svg>
  ),
  lightbulb: (
    <Svg>
      <path {...svgProps} d="M9 18h6" />
      <path {...svgProps} d="M10 21h4" />
      <path {...svgProps} d="M8.5 15.5c-1.2-1-2-2.5-2-4.2a5.5 5.5 0 1 1 11 0c0 1.7-.8 3.2-2 4.2-.6.5-1 1.2-1.1 2H9.6c-.1-.8-.5-1.5-1.1-2Z" />
    </Svg>
  ),
  gem: (
    <Svg>
      <path {...svgProps} d="M6 9 9 4h6l3 5-6 11-6-11Z" />
      <path {...svgProps} d="m9 4 3 5 3-5" />
      <path {...svgProps} d="M6 9h12" />
    </Svg>
  ),
  shieldHeart: (
    <Svg>
      <path {...svgProps} d="M12 3c2.6 2 5.4 2.5 7 2.7v5.5c0 4.4-2.9 7.3-7 9.8-4.1-2.5-7-5.4-7-9.8V5.7C6.6 5.5 9.4 5 12 3Z" />
      <path {...svgProps} d="M12 15.5s-2.5-1.4-2.5-3.5a1.5 1.5 0 0 1 2.5-1.1 1.5 1.5 0 0 1 2.5 1.1c0 2.1-2.5 3.5-2.5 3.5Z" />
    </Svg>
  ),
  bottle: (
    <Svg>
      <path {...svgProps} d="M10 3h4" />
      <path {...svgProps} d="M10 3v3l-2 2v9a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V8l-2-2V3" />
      <path {...svgProps} d="M9 10h6" />
    </Svg>
  ),
  mobile: (
    <Svg>
      <rect {...svgProps} x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path {...svgProps} d="M11 18.5h2" />
    </Svg>
  ),
  arrowRight: (
    <Svg>
      <path {...svgProps} d="M5 12h14" />
      <path {...svgProps} d="m13 7 6 5-6 5" />
    </Svg>
  ),
  info: (
    <Svg>
      <circle {...svgProps} cx="12" cy="12" r="9" />
      <path {...svgProps} d="M12 10v6" />
      <path {...svgProps} d="M12 7.5h.01" />
    </Svg>
  ),
  youtube: (
    <Svg>
      <rect {...svgProps} x="3.5" y="6.5" width="17" height="11" rx="3" />
      <path {...svgProps} d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
    </Svg>
  ),
  facebook: (
    <div className="icon-text icon-text--brand">f</div>
  ),
  x: (
    <div className="icon-text icon-text--brand">X</div>
  )
};

export default function Icon({ name, className = '' }) {
  return <span className={`inline-icon ${className}`.trim()}>{icons[name] ?? null}</span>;
}
