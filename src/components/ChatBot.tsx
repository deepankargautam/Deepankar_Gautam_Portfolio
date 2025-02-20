import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, Loader2 } from 'lucide-react';
import { nlpProcessor } from '../utils/nlp';
import profileImage from "../assets/photo.png";

interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

const TypeWriter: React.FC<{ text: string; onComplete: () => void }> = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20);

      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  return (
    <div>
      {displayText.split('\n').map((line, i) => (
        <p key={i} className="whitespace-pre-wrap">
          {line}
        </p>
      ))}
    </div>
  );
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingMessage, setCurrentTypingMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      showWelcomeMessage();
    }
  }, [isOpen]);

  const showWelcomeMessage = () => {
    setIsTyping(true);
    setCurrentTypingMessage("👋 Hi! I'm Deepankar's AI assistant. Ask me about my skills, experience, or projects!");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await nlpProcessor.processQuery(input);
      setCurrentTypingMessage(response);
    } catch (error) {
      setCurrentTypingMessage("I'm having trouble connecting to the server ok. Please try again later."+error);
    }
  };

  const handleTypingComplete = () => {
    if (currentTypingMessage) {
      const botMessage: Message = {
        content: currentTypingMessage,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      setCurrentTypingMessage(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
      >
        <Bot size={24} className="animate-pulse" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 w-96 bg-gray-900 rounded-lg shadow-2xl flex flex-col transform transition-all duration-300 ease-in-out ${
      isMinimized ? 'h-16' : 'h-[600px]'
    }`}>
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg flex justify-between items-center cursor-pointer"
           onClick={toggleMinimize}>
        <div className="flex items-center gap-2">
          <Bot size={24} className={`transition-transform duration-300 ${isMinimized ? 'rotate-0' : 'rotate-360'}`} />
          <h2 className="font-semibold">Deepankar's AI Assistant</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMinimize();
            }}
            className="text-white hover:text-gray-200 transition-colors"
          >
            {isMinimized ? '+' : '-'}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
              >
                {message.sender === 'bot' && (
                  <img
                    src={profileImage}
                    alt="Bot Avatar"
                    className="w-8 h-8 rounded-full mr-2 self-end"
                  />
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-none transform hover:scale-102 transition-transform'
                      : 'bg-gray-800 text-gray-100 rounded-bl-none hover:bg-gray-700 transition-colors'
                  }`}
                >
                  {message.content.split('\n').map((line, i) => (
                    <p key={i} className="whitespace-pre-wrap">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && currentTypingMessage && (
              <div className="flex justify-start items-start gap-2 animate-fade-in">
                <img
                  src={profileImage}
                  alt="Bot Avatar"
                  className="w-8 h-8 rounded-full mr-2 self-end"
                />
                <div className="bg-gray-800 p-3 rounded-lg rounded-bl-none text-gray-100">
                  <TypeWriter 
                    text={currentTypingMessage} 
                    onComplete={handleTypingComplete} 
                  />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-800 bg-gray-900 rounded-b-lg">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about my experience..."
                className="flex-1 p-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:ring-opacity-20 transition-all placeholder-gray-500"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg transition-all duration-300 ${
                  isTyping || !input.trim()
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-lg hover:scale-105'
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}