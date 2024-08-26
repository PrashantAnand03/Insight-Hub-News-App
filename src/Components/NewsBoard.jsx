import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import NewsItems from './NewsItems';

const NewsBoard = ({ category }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await axios.get(url);
        console.log(response.data.articles); // Log the response to verify
        if (response.data.articles) {
          setNews(response.data.articles); // Update state with fetched news
        } else {
          setNews([]);
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        if (err.response) {
          setError(`HTTP error! Status: ${err.response.status}`);
        } else if (err.request) {
          setError('No response received from the server');
        } else {
          setError(err.message);
        }
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="news-board d-flex flex-wrap">
      {error ? (
        <p>{error}</p>
      ) : (
        news.length > 0 ? (
          news.map((item, index) => (
            <NewsItems
              key={index}
              title={item.title}
              description={item.description}
              src={item.urlToImage}
              url={item.url}
            />
          ))
        ) : (
          <p>No news available</p>
        )
      )}
    </div>
  );
};

NewsBoard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default NewsBoard;
