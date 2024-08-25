import { useEffect, useRef } from 'react';
import './about.css'; // Ensure this file contains the necessary CSS
import User1 from '../assets/User1.webp';
import User2 from '../assets/User2.webp';
import User3 from '../assets/User3.webp';
import User4 from '../assets/User4.webp';

const Reviews = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth;

          if (isAtEnd) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: clientWidth, behavior: 'smooth' });
          }
        }
      }, 3000); // Adjust the speed as needed
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="reviews-container text-center py-5">
      <h2 className="display-4 mb-4">Reviews</h2>
      <div className="review-scroll-container" ref={scrollContainerRef}>
        <div className="review-item">
          <img src={User1} alt="User 1" />
          <p>
            Insight Hub has been a game changer for staying updated with
            <br />
            global news. Highly recommend!
          </p>
          <div>
           <footer>- Alice Johnson</footer>
         </div>
         <div className="rating-stars mb-4">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        </div>
        <div className="review-item">
          <img src={User2} alt="User 2" />
          <p>
            An excellent platform with diverse news sources and great user
            <br />
            experience.
          </p>
          <footer>- John Doe</footer>
          <div className="rating-stars mb-4">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        </div>
        <div className="review-item">
          <img src={User3} alt="User 3" />
          <p>
            Always my go-to source for reliable and up-to-date news.
          </p>
          <footer>- Jane Smith</footer>
          <div className="rating-stars mb-4">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        </div>
        <div className="review-item">
          <img src={User4} alt="User 4" />
          <p>
            Fantastic service, very informative and easy to navigate.
          </p>
          <footer>- Michael Brown</footer>
          <div className="rating-stars mb-4">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
