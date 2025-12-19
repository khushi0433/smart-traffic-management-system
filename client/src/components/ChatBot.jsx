import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your STMS assistant. I can help you with questions about our Smart Traffic Management System. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    greeting: {
      keywords: ['hello', 'hi', 'hey', 'greetings'],
      response: "Hello! Welcome to STMS. I'm here to help you understand our Smart Traffic Management System. What would you like to know?"
    },
    features: {
      keywords: ['feature', 'what can', 'capabilities', 'what does'],
      response: "STMS offers several key features:\n\n• AI-powered traffic optimization\n• Real-time traffic monitoring\n• Predictive analytics\n• Emergency response optimization\n• Congestion reduction by up to 40%\n• Interactive dashboard and analytics\n\nWhich feature would you like to know more about?"
    },
    pricing: {
      keywords: ['price', 'cost', 'pricing', 'how much'],
      response: "STMS offers enterprise-grade solutions tailored to your city's needs. Pricing depends on:\n\n• City size and number of intersections\n• Required features and integrations\n• Support level needed\n\nWould you like to schedule a demo or speak with our sales team?"
    },
    demo: {
      keywords: ['demo', 'trial', 'test', 'try'],
      response: "Great! You can request a demo by:\n\n1. Clicking 'Request Enterprise Demo' on our homepage\n2. Visiting our Contact page\n3. Signing up for a free account\n\nOur team typically responds within 24 hours. Would you like help with anything else?"
    },
    contact: {
      keywords: ['contact', 'support', 'help', 'reach'],
      response: "You can reach us through:\n\n📧 Email: contact@stms.ai\n📞 Phone: +1 (555) 123-4567\n💬 Support: support@stms.ai\n\nOur support team is available 24/7 for enterprise clients!"
    },
    howItWorks: {
      keywords: ['how', 'work', 'process', 'function'],
      response: "STMS works through these steps:\n\n1. **Data Collection**: Real-time traffic data from sensors and cameras\n2. **AI Analysis**: Machine learning algorithms analyze patterns\n3. **Optimization**: Adaptive signal timing adjustments\n4. **Monitoring**: Live dashboard for traffic managers\n5. **Prediction**: Forecasting congestion before it happens\n\nWould you like details on any specific step?"
    },
    benefits: {
      keywords: ['benefit', 'advantage', 'why', 'improve'],
      response: "Key benefits of STMS:\n\n✅ 40% reduction in traffic congestion\n✅ 25% decrease in commute times\n✅ 30% lower vehicle emissions\n✅ 35% faster emergency response\n✅ Real-time monitoring and control\n✅ Predictive analytics for planning\n\nWhich benefit interests you most?"
    },
    security: {
      keywords: ['secure', 'security', 'safe', 'privacy', 'data protection'],
      response: "Security is our top priority:\n\n🔒 Military-grade encryption\n🔒 GDPR & CCPA compliant\n🔒 ISO 27001 certified\n🔒 24/7 security monitoring\n🔒 Regular security audits\n🔒 Zero-trust architecture\n\nYour data is completely secure with STMS!"
    },
    integration: {
      keywords: ['integrate', 'integration', 'compatible', 'work with'],
      response: "STMS integrates seamlessly with:\n\n• Municipal traffic systems\n• Emergency services\n• Public transit networks\n• Navigation apps (Waze, Google Maps)\n• IoT sensors and cameras\n• Weather data systems\n\nOur APIs make integration straightforward!"
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for matches in predefined responses
    for (const [key, value] of Object.entries(predefinedResponses)) {
      if (value.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return value.response;
      }
    }
    
    // Default response
    return "I'm here to help! You can ask me about:\n\n• STMS features and capabilities\n• Pricing and demos\n• How the system works\n• Benefits and improvements\n• Security and privacy\n• Integration options\n• Contact information\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What features does STMS offer?",
    "How much does it cost?",
    "Can I schedule a demo?",
    "How does it work?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">STMS Assistant</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-br from-blue-100 to-emerald-100' 
                      : 'bg-gradient-to-br from-blue-600 to-emerald-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-blue-600" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white'
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 px-2">
                      {message.timestamp.toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="px-4 py-3 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-end space-x-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows="1"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                style={{ maxHeight: '100px' }}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="p-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Press Enter to send • Shift + Enter for new line
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;