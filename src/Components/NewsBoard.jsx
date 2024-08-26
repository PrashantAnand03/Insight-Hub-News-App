import { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`;
        console.log(`Fetching URL: ${url}`);

        const response = await fetch(url);
        if (!response.ok) {
          // Handle HTTP errors
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);

        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError(error.message);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))
      ) : (
        <div className="alert alert-info">No articles available.</div>
      )}
    </div>
  );
};

export default NewsBoard;
