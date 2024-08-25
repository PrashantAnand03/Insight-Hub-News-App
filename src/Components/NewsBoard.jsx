import { useEffect, useState } from "react";
import NewsItems from './NewsItems';

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message); // Set the error message
      }
    };

    fetchArticles();
  }, [category]);

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.length === 0 ? (
        <p>No articles available</p>
      ) : (
        articles.map((news, index) => (
          <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))
      )}
    </div>
  );
}

export default NewsBoard;
