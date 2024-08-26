import PropTypes from 'prop-types';
import image from "../assets/news.png"; // Default image if no image is provided

const NewsItems = ({ title, description, src, url }) => {
    return (
        <div
            className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
            style={{ maxWidth: "360px", cursor: "pointer" }}
        >
            <img
                src={src || image} // Use default image if src is not provided
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
                className="card-img-top"
                alt={title || "News"}
            />
            <div className="card-body">
                <h5 className="card-title">{title || "No Title"}</h5>
                {/* Conditionally render the description only if it's available */}
                {description && description.trim() ? (
                    <p className="card-text">{description}</p>
                ) : null}
                <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
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
