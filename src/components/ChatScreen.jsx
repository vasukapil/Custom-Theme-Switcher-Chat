import React, { useEffect, useState } from 'react';

function ChatScreen({ theme }) {
  const [messages, setMessages] = useState([]);
  const [delay, setDelay] = useState(2000);
  const [currentIndex, setCurrentIndex] = useState(0);

  const initialMessages = [
    {
      text: 'Hello! How are you?',
      type: 'bot',
    },
    {
      text: 'I am good, thanks!',
      type: 'user',
    },
    {
      text: 'What brings you here today?',
      type: 'bot',
    },
    {
      text: 'I need your help',
      type: 'user',
    },
    {
      text: "Of course! I'm here to help. What do you need assistance with? Are you looking for any particular category?",
      type: 'bot',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < initialMessages.length) {
        setMessages((prevMessages) => [...prevMessages, initialMessages[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [currentIndex, delay, initialMessages.length]);

  const handleDelayChange = (e) => {
    setDelay(parseInt(e.target.value));
  };

  return (
    <div className="h-screen flex justify-center" style={{ background: theme.background }}>
      <div className="max-w-md w-full p-4 rounded">
        <h1 className="text-3xl font-bold mb-4">Wysa Chat</h1>
        <div className="flex flex-col">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`bg-white p-3 m-2 rounded-md ${
                  message.type === 'bot' ? 'ml-4' : 'mr-4'
                } max-w-[250px]`}
              >
                <p className="text-xs font-semibold text-left">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <label className="mr-2">Delay (ms):</label>
        <input
          type="number"
          value={delay}
          onChange={handleDelayChange}
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
      </div>
    </div>
  );
}

export default ChatScreen;
