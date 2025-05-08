import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About TechTrends - Our Story</title>
        <meta name="description" content="Learn about TechTrends Ltd, our mission, values, and commitment to innovation in technology solutions." />
      </Helmet>

      <div className="about-hero">
        <h1>About TechTrends</h1>
        <p>Innovating for a better tomorrow</p>
      </div>

      <div className="about-content">
        <section>
          <h2>Our Story</h2>
          <p>
            Founded in 2020, TechTrends has grown from a small startup to a leading technology solutions provider. 
            Our journey has been marked by innovation, dedication, and a commitment to excellence.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            We strive to empower businesses through innovative technology solutions, 
            making digital transformation accessible and effective for organizations of all sizes.
          </p>
        </section>

        <section>
          <h2>Our Values</h2>
          <ul className="values">
            <li>Innovation</li>
            <li>Excellence</li>
            <li>Integrity</li>
            <li>Customer Focus</li>
          </ul>
        </section>

        <section>
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.497487217754!2d30.0582!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 