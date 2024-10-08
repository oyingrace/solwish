"use client"

import React, { useState } from 'react';

const AskMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 focus:outline-none"
      >
        Ask me!
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="mt-4 bg-white rounded-lg shadow-lg w-80 p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-700">Ask Me</h3>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
              ✖
            </button>
          </div>
          <div className="mt-2">
            <p className="text-gray-600">Hi there! How can I assist you today?</p>
            <textarea
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
              placeholder="Type your message here..."
            ></textarea>
            <button className="w-full mt-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AskMe;