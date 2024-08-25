import PropTypes from 'prop-types';
import image from "../assets/news.png";

const NewsItems = ({ title, description, src, url }) => {
    return (
        <div
            className="cards bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
            style={{ maxWidth: "360px", cursor: "pointer" }}
        >
            <img
                src={src || image}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
                className="cards-img-top"
                alt="News"
            />
            <div className="cards-body">
                <h5 className="cards-title">{title || "No Title"}</h5>
                <p className="cards-text">
                    {description || "No description available."}
                </p>
                <a href={url} className="btn btn-primary">
                    Read More
                </a>
            </div>
        </div>
    );
}

NewsItems.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
    url: PropTypes.string
};

export default NewsItems;
