import './loader.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import NewsItems from './NewsItems';
import { BallTriangle } from 'react-loader-spinner';

const NewsBoard = ({ category }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY; // Your API key from environment variables
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

        console.log(`Fetching URL: ${url}`);

        const response = await axios.get(proxyUrl);

        console.log('API Response:', response);
        const data = JSON.parse(response.data.contents);

        console.log('Articles:', data.articles);

        if (data && data.articles) {
          setNews(data.articles); // Update state with fetched news
        } else {
          setNews([]);
        }
      } catch (err) {
        console.error('Error fetching news:', err);

        if (err.response) {
          console.error('Error Response:', err.response);
          setError(`HTTP error! Status: ${err.response.status}. Message: ${err.response.data.message}`);
        } else if (err.request) {
          console.error('Error Request:', err.request);
          setError('No response received from the server');
        } else {
          console.error('Error Message:', err.message);
          setError(err.message);
        }
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="news-board d-flex flex-wrap">
      {loading ? (
        <div className="loading-container">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <p>Loading...</p>
        </div>
      ) : error ? (
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
