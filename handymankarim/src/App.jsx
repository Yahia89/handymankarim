import "./App.css";
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Gallery from "./components/Gallery";

function App() {
  return (
    <HelmetProvider>
      <SEO 
        title="Handyman Karim - Professional Home Repair & Maintenance Services"
        description="Professional handyman and contractor services in Los Angeles. Expert home repairs, renovations, and maintenance services with quality workmanship guaranteed. We speak English, Spanish, French, Italian and Arabic."
        keywords="handyman, contractor, home repair, renovation, maintenance, home improvement, professional handyman, Los Angeles contractor, multilingual handyman"
      />
      <div className="App">
        {/* Hero Section */}
        <header className="hero">
          <div className="container">
            <h1 className="hero-title">Welcome to HandyMan Karim</h1>
            <p>
              please note that the website is heavily under construction, i can be
              reached here (24/7) for any questions (call or text){" "}
              <a
                style={{ color: "white", fontWeight: "bold" }}
                href="tel:+18405887369"
              >
                +1 (840) 588-7369
              </a>
            </p>
            <p
              style={{ color: "white", fontWeight: "bold" }}
              className="hero-description"
            >
              We are based in Los Angeles, California areas we work from anywhere
              in the US. Family-owned and operated, grounded in family values, and
              committed to treating our team like one of our own, we speak
              English, Spanish, French, Italian and Arabic Fluently.
            </p>
            <p className="hero-description">
              Your trusted solution and your <p style={{fontWeight:"bold", color:"black", fontStyle:"italic"}} >go-to</p> for all home repair and improvement needs. We
              provide professional, reliable, and efficient services tailored to
              your requirements.
            </p>
            {/* <button className="cta-button">Get a Quote</button> */}
          </div>
        </header>
        {/* About Section */}
        <section className="about">
          <div className="container">
            <h2>About Us</h2>
            <p>
              With 20+ Years of experience at HandyMan Karim, we specialize in making your life easier. From
              plumbing to electrical work, carpentry to painting, our skilled
              professionals are equipped to handle all your home repair and
              maintenance needs. Customer satisfaction is our top priority, and we
              ensure every job is done to the highest standards.
            </p>
          </div>
          <p style={{textAlign:"center", fontWeight:"bold"}} >Quick look at our work</p>
        <Gallery/>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>Plumbing</h3>
                <p>
                  Leaky faucets, clogged drains, or pipe installations? We’ve got
                  you covered.
                </p>
              </div>
              <div className="service-item">
                <h3>Electrical</h3>
                <p>
                  From wiring to appliance installations, our electricians handle
                  it all.
                </p>
              </div>
              <div className="service-item">
                <h3>Painting</h3>
                <p>
                  Transform your spaces with our professional interior and
                  exterior painting services.
                </p>
              </div>
              <div className="service-item">
                <h3>Carpentry</h3>
                <p>
                  Custom furniture, repairs, and installations with attention to
                  detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              Ready to get started? Reach out to us today and let HandyMan Karim
              take care of your home improvement needs.
            </p>
            {/* <button className="cta-button">Contact Us</button> */}
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} HandyMan Karim. All rights
              reserved.
            </p>
            
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
