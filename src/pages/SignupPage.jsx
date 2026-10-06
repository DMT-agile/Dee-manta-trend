export default function SignupPage({ onNavigate }) {
  return (
    <div className="auth-layout">
      <div className="auth-card">
        <button className="back-link" onClick={() => onNavigate('home')}>
          ← Back to home
        </button>

        <span className="eyebrow">Create account</span>
        <h1>Join Dee-manta-trend</h1>
        <p className="auth-subtitle">
          Start building your profile, discover artists, and grow your music community.
        </p>

        <form className="signup-form">
          <label>
            Full name
            <input type="text" placeholder="Your full name" />
          </label>

          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Artist or creator role
            <select defaultValue="">
              <option value="" disabled>
                Select your role
              </option>
              <option value="artist">Artist</option>
              <option value="producer">Producer</option>
              <option value="manager">Manager</option>
              <option value="fan">Fan</option>
            </select>
          </label>

          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>

          <button type="submit" className="primary-btn large full-width">
            Create account
          </button>
        </form>
      </div>

      <div className="auth-side-panel">
        <div className="side-panel-card">
          <span className="eyebrow subtle">Welcome</span>
          <h2>Grow your music network.</h2>
          <ul>
            <li>Build your artist profile</li>
            <li>Discover new collaborators</li>
            <li>Share releases and updates</li>
            <li>Connect with your audience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
