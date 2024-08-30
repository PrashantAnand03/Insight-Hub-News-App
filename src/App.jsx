import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import Footer from "./Components/Footer";
import ChatAssistant from "./ChatAssistant/ChatAssistant";
import About from "./Components/About"; // Import the About component
import './Components/darkmode.css'; // Ensure you have the dark mode CSS imported

const App = () => {
  const [category, setCategory] = useState("general");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar setCategory={setCategory} darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<NewsBoard category={category} isDarkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
};

export default App;
