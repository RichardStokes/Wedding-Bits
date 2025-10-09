import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState({ 
	id: 1, 
	text: "Hi Sarah! I'm your AI Wedding Planner. How can I help you today?", 
	sender: 'ai' 
	});
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { id: messages.length + 1, text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      setMessages((prev) => [...prev, { id: prev.length + 1, text: aiResponse, sender: 'ai' }]);
      setIsTyping(false);
    }, 800);
  };

  const generateAIResponse = (q) => {
    const query = q.toLowerCase();

    if (query.includes('budget')) {
      return 'For budget planning, consider setting a realistic overall budget first. Then, allocate percentages to key categories like venue (40-50%), catering (15-20%), and attire (5-10%). Track every expense to stay on track!';
    } else if (query.includes('vendor')) {
      return 'When choosing vendors, always read reviews, check their portfolios, and schedule consultations. Get at least three quotes for each service to compare. Our platform has a curated list of top Irish vendors!';
    } else if (query.includes('timeline')) {
      return 'A typical wedding planning timeline is 12-18 months. Start with booking your venue and key vendors. 6-9 months out, focus on attire and invitations. The last few months are for final details and confirmations.';
    } else if (query.includes('irish traditions')) {
      return 'Irish weddings often feature traditions like handfasting, the Claddagh ring, and ringing the wedding bells for good luck. Many couples also incorporate traditional Irish music and dancing!';
    } else if (query.includes('venues in ireland')) {
      return 'Ireland boasts stunning wedding venues! Consider historic castles like Ashford Castle or Dromoland Castle, charming country houses like Virginia Park Lodge, or scenic coastal resorts. What style are you looking for?';
    } else if (query.includes('rsvp')) {
      return "For RSVPs, it's best to set a deadline 4-6 weeks before the wedding. Our website builder includes an integrated RSVP system to make this easy for your guests!";
    } else if (query.includes('guest list')) {
      return 'Managing your guest list can be tricky. Categorize guests (A-list, B-list), collect addresses early, and use a spreadsheet or our built-in guest management tool to track RSVPs and dietary restrictions.';
    } else if (query.includes('wedding dress')) {
      return 'Finding your wedding dress is a magical experience! Start looking 9-12 months before your wedding. Consider different silhouettes, fabrics, and try on various styles to find what makes you feel beautiful.';
    } else if (query.includes('music')) {
      return "Music sets the mood! For your ceremony, consider a string quartet or traditional Irish musicians. For the reception, a lively band or DJ will keep your guests dancing. Don't forget your first dance song!";
    } else if (query.includes('gifts')) {
      return 'For gifts, many couples opt for a registry at a department store, a honeymoon fund, or a charity donation. Our platform can help you set up a seamless gift experience for your guests.';
    }
    return "I'm still learning, but I can help with many wedding planning topics! Try asking about budget, vendors, timeline, or Irish traditions.";
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    handleSend();
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-rose-gold text-white rounded-full p-4 shadow-lg hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2"
          aria-label="Open AI Assistant"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 h-[500px] flex flex-col">
          <div className="bg-deep-sage text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold text-lg">AI Wedding Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close AI Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    msg.sender === 'user' ? 'bg-rose-gold text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[70%] p-3 rounded-lg bg-gray-200 text-gray-800 animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-3">
              <span
                onClick={() => handleSuggestionClick('Budget planning advice')}
                className="cursor-pointer bg-champagne text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-100"
              >
                Budget planning advice
              </span>
              <span
                onClick={() => handleSuggestionClick('Vendor recommendations')}
                className="cursor-pointer bg-champagne text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-100"
              >
                Vendor recommendations
              </span>
              <span
                onClick={() => handleSuggestionClick('Irish traditions')}
                className="cursor-pointer bg-champagne text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-100"
              >
                Irish traditions
              </span>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold"
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-rose-gold text-white p-2 rounded-lg hover:opacity-90 transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
