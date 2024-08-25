import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleHello=() => {
    const message = createChatBotMessage('Hello , I am Insight Hub ChatBot , Type your query..');
    updateState(message,handleHello);
  }

  const websiteDetails = () => {
    const message = createChatBotMessage('Insight Hub is a news website where you can browse and search for updated live news tailored to your daily needs. Created by dedicated developer Prashant Anand, our platform aims to keep users informed with the latest updates. For more details, visit our About Us section.');
    updateState(message,websiteDetails);
  }

  const contactUs=()=>{
    const message = createChatBotMessage('Want to get in touch? Find all our contact details in the footer section below. We are always here to help—feel free to reach out!');
    updateState(message,contactUs);
  }

  const contribute=()=>{
    const message = createChatBotMessage('You can browse and search for news in various categories such as Technology, Business, Sports, and more on Insight Hub.');
    updateState(message,contribute);
  }

  const greeting=()=>{
    const message = createChatBotMessage('We’re delighted to assist you! Don’t hesitate to visit our website again. Thank you for choosing us!');
    updateState(message,greeting);
  }

  return (
    <div>
        {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                actions: {
                    handleHello,
                    websiteDetails,
                    contactUs,
                    contribute,
                    greeting,
                },
            });
        })}
    </div>
   );
}; 

export default ActionProvider;