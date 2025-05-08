function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to TechTrends - Your Digital Innovation Partner</h1>
        <p>Transforming Ideas into Digital Reality</p>
      </section>
      
      <section className="features">
        <h2>Our Services</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Web Development</h3>
            <p>Custom websites and web applications built with modern technologies.</p>
          </div>
          <div className="feature-card">
            <h3>Mobile Apps</h3>
            <p>Native and cross-platform mobile applications for iOS and Android.</p>
          </div>
          <div className="feature-card">
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure and deployment services.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 