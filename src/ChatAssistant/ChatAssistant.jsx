import  { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../ChatBot/config.jsx';
import MessageParser from '../ChatBot/MessageParser';
import ActionProvider from '../ChatBot/ActionProvider';
import "./ChatAssistant.css";
import chatbotLogo from '../assets/chatbotLogo.jpeg';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-button" onClick={toggleChatbot}>
        <img className="chatbot-icon" src={chatbotLogo} alt="Chatbot Icon" />
      </div>
      {isOpen && (
        <>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
          <button className="chatbot-close-button" onClick={closeChatbot}>
            &times; {/* Unicode for '×' character */}
          </button>
        </>
      )}
    </div>
  );
};

export default ChatAssistant;

