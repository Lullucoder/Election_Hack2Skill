import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
// Using Vite environment variables (VITE_GEMINI_API_KEY)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || 'mock-key-for-dev');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

export const SYSTEM_PROMPT = `You are ElectionIQ, a non-partisan, educational AI assistant focused exclusively on explaining the Indian democratic election process. You provide factual, accurate information about:
- Indian voter registration (EPIC, Form 6, NVSP)
- Election Commission of India (ECI) procedures
- Electronic Voting Machines (EVMs) and VVPAT
- Types of elections: Lok Sabha, Vidhan Sabha, Panchayat, Municipal
- Constitutional provisions related to elections (Articles 324-329)
- Model Code of Conduct (MCC)
- NOTA (None of the Above)
- Electoral rolls and voter lists
- Polling procedures and voter rights

You NEVER:
- Express political opinions or preferences
- Endorse or criticise any political party, leader, or candidate
- Make partisan or biased statements
- Predict election outcomes
- Discuss religion, caste, or communal issues in an electoral context

You always remain neutral, educational, factual, and helpful. You cite official ECI sources when relevant. Keep your responses concise, highly structured, and use bullet points where necessary. Format output in Markdown.`;

// Maintain a chat history in memory for conversational context
let chatHistory = [
  {
    role: "user",
    parts: [{ text: "System prompt: " + SYSTEM_PROMPT }],
  },
  {
    role: "model",
    parts: [{ text: "Understood. I will strictly act as ElectionIQ, a non-partisan educational assistant for Indian elections, adhering to all guidelines provided." }],
  }
];

export async function getAIResponse(message) {
  try {
    // If no API key is provided, gracefully fallback to a simulated response
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      console.warn('VITE_GEMINI_API_KEY is missing. Falling back to mock response.');
      await new Promise(resolve => setTimeout(resolve, 1500));
      return "I am currently running in mock mode because the Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env file to enable live AI responses. \n\nHowever, I can still tell you that you can register to vote in India using Form 6 on the NVSP portal!";
    }

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.2, // Low temperature for factual, consistent answers
      },
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();
    
    // Update local history
    chatHistory.push({ role: "user", parts: [{ text: message }] });
    chatHistory.push({ role: "model", parts: [{ text: responseText }] });
    
    // Keep history from getting too large (keep last 10 interactions + 2 system prompts)
    if (chatHistory.length > 22) {
      chatHistory = [chatHistory[0], chatHistory[1], ...chatHistory.slice(-20)];
    }

    return responseText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am experiencing technical difficulties connecting to my knowledge base. Please try asking your question again in a moment.";
  }
}

export const SUGGESTED_QUESTIONS = [
  "How do I register as a voter in India?",
  "How does the EVM and VVPAT work?",
  "What is NOTA?",
  "What are the types of elections in India?",
  "What is the election timeline?",
  "What ID do I need to vote?",
];
