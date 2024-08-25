import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state
    const [error, setError] = useState(null); // Add an error state

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Ensure that API key is available and correct
                if (!import.meta.env.VITE_API_KEY) {
                    throw new Error('API key is missing.');
                }

                // Define URLs for all API requests
                const sourcesUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;
                const indiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
                const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

                // Fetch data from all APIs simultaneously
                const [newsResponse, sourcesResponse, indiResponse] = await Promise.all([
                    fetch(newsUrl),
                    fetch(sourcesUrl),
                    fetch(indiUrl),
                ]);

                // Check if responses are JSON
                const isNewsJson = newsResponse.headers.get('content-type')?.includes('application/json');
                const isSourcesJson = sourcesResponse.headers.get('content-type')?.includes('application/json');
                const isIndiJson = indiResponse.headers.get('content-type')?.includes('application/json');
                
                if (isNewsJson && isSourcesJson && isIndiJson) {
                    const newsData = await newsResponse.json();
                    const sourcesData = await sourcesResponse.json();
                    const indiData = await indiResponse.json();

                    if (newsResponse.ok && sourcesResponse.ok && indiResponse.ok) {
                        // Combine articles from all responses
                        const combinedArticles = [
                            ...(newsData.articles || []),
                            ...(sourcesData.articles || []),
                            ...(indiData.articles || [])
                        ];
                        setArticles(combinedArticles);
                    } else {
                        throw new Error('Failed to fetch news from one or more sources.');
                    }
                } else {
                    throw new Error('Unexpected response type. Expected JSON.');
                }
            } catch (err) {
                console.error('Error fetching news:', err);
                setError('Failed to fetch news. Please try again later.'); // Update error state
                setArticles([]); // Clear articles on error
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchNews();
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {loading ? ( // Show loading state if still fetching
                <p className="text-center">Loading news...</p>
            ) : error ? ( // Show error message if there is an error
                <p className="text-center">{error}</p>
            ) : (
                articles.length > 0 ? (
                    articles.map((news, index) => (
                        <NewsItems
                            key={index}
                            title={news.title}
                            description={news.description}
                            src={news.urlToImage}
                            url={news.url}
                        />
                    ))
                ) : (
                    <p className="text-center">No news available.</p>
                )
            )}
        </div>
    );
};

export default NewsBoard;
