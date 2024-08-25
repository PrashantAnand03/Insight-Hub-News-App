import React from 'react';

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') ||message.includes('Hi') ){
      actions.handleHello();
    }
    else if (
      message.includes('Tell me about your website') ||
      message.includes('about website') ||
      message.includes('About website') ||
      message.includes('Your website') ||
      message.includes('your website') ||
      message.includes('Mission of website') ||
      message.includes('mission of website')||
      message.includes('what does this website do?')||
      message.includes('What does this website do?')||
      message.includes('what is Insight Hub?')||
      message.includes('What is Insight Hub?')||
      message.includes('what is insight hub?')||
      message.includes('What is insight hub?')||
      message.includes('What is Insight Hub')||
      message.includes('what is Insight Hub')
    ){
      actions.websiteDetails();
    } 
    else if (
        message.includes('how to contact')||
        message.includes('How to contact')||
        message.includes('How to contact?')
    )  
    {
        actions.contactUs();
    }
    else if(
        message.includes('how to Browse')||
        message.includes('How to Browse')||
        message.includes('How to Browse?')||
        message.includes('How to Browse Your Website?')
    )  
    {
        actions.contribute();
    }
    
    else if(
        message.includes('thanks')||
        message.includes('thank you')||
        message.includes('thanks a lot')||
        message.includes('thanks for help')||
        message.includes('Thanks')||
        message.includes('Thank You')
    )  
    {
        actions.greeting();
    }
  } 

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;