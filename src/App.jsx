const artists = [
  {
    name: 'Astra Vale',
    genre: 'Indie Pop',
    status: 'New single out',
    accent: 'violet',
  },
  {
    name: 'Nova Bloom',
    genre: 'R&B / Soul',
    status: 'On tour',
    accent: 'blue',
  },
  {
    name: 'Kairo West',
    genre: 'Afrobeat',
    status: 'Collab open',
    accent: 'green',
  },
  {
    name: 'Luna Echo',
    genre: 'Electronic',
    status: 'Live set this week',
    accent: 'orange',
  },
];

const features = [
  {
    title: 'Create artist profiles',
    text: 'Showcase your voice, visuals, releases, and story in one polished portfolio.',
  },
  {
    title: 'Discover talent',
    text: 'Browse emerging artists, upcoming releases, and new collaborations across genres.',
  },
  {
    title: 'Build communities',
    text: 'Connect fans, collaborators, promoters, and creative teams in one connected hub.',
  },
];

const stats = [
  { label: 'Artists', value: '2.4K+' },
  { label: 'Releases', value: '8.1K' },
  { label: 'Communities', value: '320' },
  { label: 'Engagement', value: '94%' },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">D</div>
          <span>Dee-manta-trend</span>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#artists">Artists</a>
          <a href="#features">Features</a>
          <a href="#join">Join</a>
        </nav>

        <button className="primary-btn">Get Started</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Music. Community. Momentum.</span>
            <h1>Where artists find their next wave.</h1>
            <p>
              Dee-manta-trend is a creative network built for musicians, creators,
              and fans to discover new talent, share releases, and grow together.
            </p>

            <div className="cta-row">
              <button className="primary-btn large">Join the network</button>
              <button className="secondary-btn large">Explore artists</button>
            </div>

            <div className="stat-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-box">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card main-card">
              <div className="mini-header">
                <span className="live-dot" />
                Live now
              </div>

              <div className="track-info">
                <span className="tag">Featured artist</span>
                <h3>Nova Bloom</h3>
                <p>Midnight Echo</p>
              </div>

              <div className="wave-bars" aria-label="music visualizer">
                <span style={{ height: '30%' }} />
                <span style={{ height: '65%' }} />
                <span style={{ height: '45%' }} />
                <span style={{ height: '80%' }} />
                <span style={{ height: '55%' }} />
                <span style={{ height: '90%' }} />
                <span style={{ height: '70%' }} />
              </div>
            </div>

            <div className="floating-card">
              <span>New release</span>
              <strong>Deep Current</strong>
              <small>Astra Vale • 2.8M plays</small>
            </div>
          </div>
        </section>

        <section id="about" className="info-panel">
          <div>
            <span className="eyebrow subtle">Built for creators</span>
            <h2>A hub for modern artist discovery.</h2>
          </div>
          <p>
            Dee-manta-trend brings together music lovers, rising stars, and creative
            teams in one collaborative experience designed to help artists grow,
            connect, and be discovered.
          </p>
        </section>

        <section id="artists" className="artist-section">
          <div className="section-heading">
            <span className="eyebrow">Featured artists</span>
            <h2>Trending on the network</h2>
          </div>

          <div className="artist-grid">
            {artists.map((artist) => (
              <article key={artist.name} className="artist-card">
                <div className={`artist-avatar ${artist.accent}`}>
                  {artist.name.charAt(0)}
                </div>
                <div className="artist-meta">
                  <h3>{artist.name}</h3>
                  <span>{artist.genre}</span>
                </div>
                <p>{artist.status}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="section-heading">
            <span className="eyebrow">Why it matters</span>
            <h2>Everything artists need to grow.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-badge" />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="join" className="cta-banner">
          <div>
            <span className="eyebrow">Start today</span>
            <h2>Build your next music community.</h2>
          </div>
          <button className="primary-btn large">Launch your profile</button>
        </section>
      </main>
    </div>
  );
}
