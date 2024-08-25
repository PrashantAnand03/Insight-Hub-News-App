import "./about.css";
import AboutUs from "../assets/AboutUs.jpeg";
import Ourmission from "../assets/Ourmission.jpg";
import Ourstory from "../assets/Ourstory.jpg";
import Reviews from './Reviews'

const About = () => {
  return (
    <div className="container py-5">
      {/* First Section: About Us */}
      <div className="row align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            <span style={{ color: "#007bff" }}>About Us</span>
          </h1>
          <p className="lead">
            <span style={{ fontWeight: "bold"}}>
              At Insight Hub, we serve up a feast of the latest and most
              compelling news from around the globe.
            </span>
          </p>

          <p className="lead mb-4">
            <span>
              Experience the world through Insight Hub — Discover the news that
              matters.
            </span>
          </p>

          <p className="lead mb-4">
            <span>
              Dive into a world of positive trends, groundbreaking innovations,
              and the remarkable strides made through human creativity and
              collaboration.
            </span>
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src={AboutUs}
            className="d-block mx-lg-auto img-fluid"
            alt="News Overview"
            style={{
              display: "block",
              margin: "auto",
              backgroundColor: "hsl(0, 0%, 90%)",
              transition: "background-color 300ms",
            }}
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>

      {/* Second Section: Our Mission */}
      <div className="row align-items-center g-5 py-5">
        <div className="col-lg-6">
          <img
            src={Ourmission}
            className="d-block mx-lg-auto img-fluid"
            alt="Our Mission"
            style={{
              display: "block",
              margin: "auto",
              backgroundColor: "hsl(0, 0%, 90%)",
              transition: "background-color 300ms",
            }}
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            <span style={{ color: "#007bff" }}>Our Mission</span>
          </h1>
          <p className="lead">
            <span style={{ fontWeight: "bold"}}>
              Our mission is to provide insightful and accurate news coverage,
              promoting informed discussions and positive change.
            </span>
          </p>

          <p className="lead mb-4">
            As an{" "}
            <span >
              open-source news platform
            </span>
            <span>
              , we are dedicated to delivering a diverse menu of timely updates
              and insightful stories, crafted to keep you informed and engaged
              with the world’s unfolding events.
            </span>
          </p>

          <p className="lead mb-4">
            <span>
              Experience the world through a different lens with Insight Hub —
              where every story is carefully prepared to enrich your
              understanding and inspire your curiosity.
            </span>
          </p>
        </div>
      </div>

      {/* Third Section: Our Story */}
      <div className="row align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            <span style={{ color: "#007bff" }}>Our Story</span>
          </h1>
          <p className="lead">
            <span style={{ fontWeight: "bold"}}>
              Discover the journey of Insight Hub and how we have evolved to
              become a leading source of global news.
            </span>
          </p>

          <p className="lead mb-4">
            <span>
              In 2024, inspired by advancements in News APIs and modern
              development frameworks, Prashant Anand, a Computer Science
              Engineering Sophomore, created Insight Hub. This platform
              addresses the need for real-time, comprehensive news, leveraging
              technology to provide timely updates and engaging stories, keeping
              users informed about global events.
            </span>
          </p>

          <p className="lead mb-4">
            <span>
              Our journey showcases our commitment to innovation, offering a
              vital resource for staying updated with global news in a rapidly
              evolving digital world.
            </span>
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src={Ourstory}
            className="d-block mx-lg-auto img-fluid"
            alt="Our Story"
            style={{
              display: "block",
              margin: "auto",
              backgroundColor: "hsl(0, 0%, 90%)",
              transition: "background-color 300ms",
            }}
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>

      {/* Jumbotron Section: Our Services */}
      <div
        className="jumbotron text-center py-5"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <h2 className="display-4 mb-4">Our Services</h2>
        <p className="lead mb-4">
          We provide comprehensive news coverage with real-time updates,
          in-depth analysis, and a range of multimedia content to keep you
          informed and engaged.
        </p>
        <div className="categories mb-4">
          <span className="badge badge-category">Technology</span>
          <span className="badge badge-category">Business</span>
          <span className="badge badge-category">Politics</span>
          <span className="badge badge-category">Sports</span>
          <span className="badge badge-category">Health</span>
        </div>
        <p className="lead mb-4">
          <strong>Satisfied Users:</strong> 1,000,000+ <br />
          <strong>Rating:</strong> 4.8/5
        </p>
        <div className="rating-stars mb-4">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
      </div>
      <Reviews/>
    </div>
  );
};

export default About;
