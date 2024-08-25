import image from "../assets/news.png";
import './newsitems.css';

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="cards bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "100%", cursor: "pointer" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="cards-img-top"
        alt="..."
      />
      <div className="cards-body">
        <h5 className="cards-title">{title.slice(0, 50)}</h5>
        <p className="cards-text">
          {description
            ? description.slice(0, 90)
            : "News is related to current event. It provides the idea about the event that has happened."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
