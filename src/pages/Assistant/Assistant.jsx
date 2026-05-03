import { useState, useRef, useEffect } from 'react';
import { getAIResponse, SUGGESTED_QUESTIONS } from '../../services/aiService';
import Icon from '../../components/Icons/IconResolver';
import { Send, Loader2, Info } from 'lucide-react';
import './Assistant.css';

export default function Assistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "Namaste! I'm ElectionIQ, your AI-powered guide to understanding the Indian election process. I'm here to help you learn about voter registration (EPIC), EVMs, election timelines, and your rights as a voter.\n\nFeel free to ask me anything about Indian elections, or try one of the suggested questions below!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setQuestionCount(prev => prev + 1);

    try {
      const response = await getAIResponse(text);
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
    setIsTyping(false);
    inputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (question) => {
    sendMessage(question);
  };

  const formatMessage = (content) => {
    // Simple markdown-like formatting
    return content.split('\n').map((line, i) => {
      // Bold
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Bullet points
      if (line.startsWith('• ') || line.startsWith('- ')) {
        return `<li key="${i}">${line.slice(2)}</li>`;
      }
      // Numbered lists
      const numMatch = line.match(/^(\d+)\.\s+(.*)/);
      if (numMatch) {
        return `<li key="${i}"><strong>${numMatch[1]}.</strong> ${numMatch[2]}</li>`;
      }
      return line;
    }).join('\n');
  };

  return (
    <div className="assistant-page" id="assistant-page">
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>

      <div className="assistant-container">
        {/* Sidebar */}
        <div className="assistant-sidebar glass-card">
          <div className="sidebar-header">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Icon name="assistant" size={24} /> AI Assistant
            </h2>
            <p>Ask me about Indian elections!</p>
          </div>

          <div className="sidebar-stats">
            <div className="sidebar-stat">
              <span className="sidebar-stat-value">{questionCount}</span>
              <span className="sidebar-stat-label">Questions Asked</span>
            </div>
            <div className="sidebar-stat">
              <span className="sidebar-stat-value">{messages.filter(m => m.role === 'assistant').length}</span>
              <span className="sidebar-stat-label">Answers Given</span>
            </div>
          </div>

          <div className="sidebar-topics">
            <h3>Popular Topics</h3>
            <div className="topic-tags">
              <span className="topic-tag" onClick={() => handleSuggestion('How do I get an EPIC card?')}>EPIC Registration</span>
              <span className="topic-tag" onClick={() => handleSuggestion('How do EVMs and VVPAT work?')}>EVM & VVPAT</span>
              <span className="topic-tag" onClick={() => handleSuggestion("What are the phases of election?")}>MCC & Phases</span>
              <span className="topic-tag" onClick={() => handleSuggestion('What is NOTA?')}>NOTA Option</span>
              <span className="topic-tag" onClick={() => handleSuggestion('Difference between Lok Sabha and Vidhan Sabha?')}>Election Types</span>
            </div>
          </div>

          <div className="sidebar-disclaimer">
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Non-Partisan Notice:</strong> This assistant provides strictly educational, factual information about the Indian democratic process. It does not endorse any candidate or party.</span>
            </p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="assistant-chat glass-card">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <Icon name="assistant" size={20} />
              </div>
              <div>
                <h3>ElectionIQ Assistant</h3>
                <span className="chat-status">
                  <span className="status-dot"></span>
                  Powered by Google Gemini
                </span>
              </div>
            </div>
          </div>

          <div className="chat-messages" id="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`chat-message chat-message-${msg.role}`}>
                {msg.role === 'assistant' && (
                  <div className="chat-msg-avatar">
                    <Icon name="assistant" size={16} />
                  </div>
                )}
                <div className="chat-msg-bubble">
                  <div 
                    className="chat-msg-content"
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                  />
                  <span className="chat-msg-time">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message chat-message-assistant">
                <div className="chat-msg-avatar">
                  <Icon name="assistant" size={16} />
                </div>
                <div className="chat-msg-bubble">
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 2 && (
            <div className="chat-suggestions">
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  className="suggestion-chip"
                  onClick={() => handleSuggestion(q)}
                  id={`suggestion-${i}`}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="chat-input-area" id="chat-input-form">
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder="Ask me about Indian elections..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
              id="chat-input"
            />
            <button 
              type="submit" 
              className="btn btn-primary chat-send-btn" 
              disabled={!input.trim() || isTyping}
              id="chat-send"
              aria-label="Send message"
            >
              {isTyping ? <Loader2 size={18} className="spin" /> : <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
