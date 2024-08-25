import image from "../assets/news.png";
import './newsitems.css';

import PropTypes from 'prop-types';

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="cards bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "365px", cursor: "pointer" }}
    >
      <img
        src={src || image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="cards-img-top"
        alt="news"
      />
      <div className="cards-body">
        <h5 className="cards-title">{title.slice(0, 50)}</h5>
        <p className="cards-text">
          {(description || "News is related to current events. It provides an idea about the event that has happened.").slice(0, 90)}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

NewsItems.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string,
};

NewsItems.defaultProps = {
  title: "",
  description: "",
  src: "",
  url: "#",
};

export default NewsItems;