import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      <section className="hero">

        <div className="hero-content">

          <h1>Welcome to Meraj Travels</h1>

          <h2>
            Your Journey, Our Responsibility
          </h2>

          <p>
            Book comfortable and reliable bus transportation
            for your next journey.
          </p>

          <Link to="/routes">
            <button className="main-button">
              Explore Routes
            </button>
          </Link>

        </div>

        <div className="hero-bus">
          🚌
        </div>

      </section>


      <section className="features">

        <div className="feature-card">
          <h3>🚌 Comfortable Travel</h3>
          <p>
            Travel comfortably with Meraj Travels.
          </p>
        </div>

        <div className="feature-card">
          <h3>🎫 Easy Booking</h3>
          <p>
            Book your bus ticket quickly and easily.
          </p>
        </div>

        <div className="feature-card">
          <h3>🕐 On-Time Service</h3>
          <p>
            We provide convenient travel schedules.
          </p>
        </div>

      </section>

    </main>
  );
}

export default Home;