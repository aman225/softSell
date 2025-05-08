// ChatWidget.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaPaperPlane } from 'react-icons/fa';

// Mock AI responses based on keywords in questions
const getMockResponse = (question) => {
  const lowerQuestion = question.toLowerCase();
  
  // Define common responses
  if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi')) {
    return "Hello! I'm SoftSell's virtual assistant. How can I help you with software license resale today?";
  }
  if (lowerQuestion.includes('how') && lowerQuestion.includes('sell')) {
    return "To sell your software license, simply fill out our contact form with your license details. Our team will evaluate it and send you a competitive quote within 24 hours. Once you accept, we'll transfer payment to you right away!";
  }
  if (lowerQuestion.includes('price') || lowerQuestion.includes('worth') || lowerQuestion.includes('how much')) {
    return "License values vary based on software type, version, and remaining subscription time. Once you submit your license details through our form, we'll provide a free valuation within 24 hours.";
  }
  if (lowerQuestion.includes('license') && lowerQuestion.includes('type')) {
    return "We buy various software licenses including Microsoft Windows, Office, Adobe Creative Cloud, enterprise antivirus solutions, and many other business software packages. Please specify your license type in the contact form.";
  }
  if (lowerQuestion.includes('process') || lowerQuestion.includes('how long')) {
    return "Our process is simple: 1) Submit license details 2) Receive a quote (usually within 24 hours) 3) Accept the offer 4) Get paid immediately. The entire process typically takes 1-3 business days.";
  }
  if (lowerQuestion.includes('safe') || lowerQuestion.includes('secure')) {
    return "Absolutely! We use enterprise-grade encryption for all transactions. Your license information is protected, and we follow strict compliance protocols to ensure complete security and confidentiality.";
  }
  
  // Default response
  return "Thanks for your question. Our team can provide more specific information about selling your software licenses. Please provide details through our contact form, or ask another question about our services.";
};

// Suggested questions component
const SuggestedQuestions = ({ onSelectQuestion }) => {
  const questions = [
    "How do I sell my license?",
    "What types of licenses do you buy?",
    "How much is my license worth?",
    "Is the process safe and secure?"
  ];
  
  return (
    <div className="mt-4">
      <p className="text-xs text-gray-500 mb-2">Common questions:</p>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full hover:bg-blue-100 transition"
            onClick={() => onSelectQuestion(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "👋 Hi there! How can I help you with software license resale today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectQuestion = (question) => {
    handleSendMessage(question);
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages([...messages, { sender: 'user', text }]);
    setInputValue('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const response = getMockResponse(text);
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-30 hover:bg-blue-700"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-xl z-20 overflow-hidden flex flex-col"
            style={{ height: "450px" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-medium">SoftSell Assistant</h3>
              <p className="text-xs opacity-75">Ask us about selling software licenses</p>
            </div>
            
            {/* Messages container */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-[80%] ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start mb-3">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg rounded-bl-none max-w-[80%]">
                    <span className="inline-block animate-pulse">...</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
              
              {/* Show suggested questions only after initial greeting */}
              {messages.length <= 2 && !isTyping && (
                <SuggestedQuestions onSelectQuestion={handleSelectQuestion} />
              )}
            </div>
            
            {/* Input area */}
            <div className="border-t p-3 flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}