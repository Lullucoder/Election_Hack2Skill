// Mock data for the Election AI assistant
// This simulates responses that would come from Vertex AI / Gemini

const SYSTEM_PROMPT = `You are ElectionIQ, a non-partisan, educational AI assistant focused exclusively on explaining democratic election processes. You provide factual, accurate information about:
- Voter registration procedures
- Election timelines and deadlines
- Voting methods (in-person, mail-in, early voting)
- How votes are counted
- Electoral systems and processes
- Polling place information
- Voter ID requirements

You NEVER:
- Express political opinions
- Endorse any candidate or party
- Make partisan statements
- Discuss who to vote for

You always remain neutral, educational, and helpful.`;

// Pre-built responses for common questions (used when Gemini API is not connected)
const MOCK_RESPONSES = {
  greeting: [
    "Hello! 👋 I'm ElectionIQ, your friendly election education assistant. I'm here to help you understand the voting process, registration deadlines, and everything you need to know about participating in democracy. What would you like to learn about today?",
    "Welcome to ElectionIQ! 🗳️ I can help you with voter registration, election timelines, voting procedures, and more. Ask me anything about the democratic process!",
  ],
  registration: [
    "Great question about voter registration! 📋\n\nHere's what you need to know:\n\n**General Requirements:**\n• You must be a U.S. citizen\n• You must be 18 years old by Election Day\n• You must meet your state's residency requirements\n\n**How to Register:**\n1. **Online:** Visit vote.gov to register online (available in most states)\n2. **By Mail:** Download and mail the National Voter Registration Form\n3. **In Person:** Visit your local election office or DMV\n\n**Deadlines vary by state** – most states require registration 15-30 days before an election. Some states offer same-day registration!\n\nWould you like to know the specific deadline for your state?",
  ],
  timeline: [
    "Here's a typical election timeline: 📅\n\n**6-12 Months Before:**\n• Candidate filing deadlines\n• Primary election season begins\n\n**3-6 Months Before:**\n• Primary elections held\n• Party conventions\n\n**30 Days Before:**\n• Voter registration deadline (most states)\n• Mail-in ballot requests open\n\n**2 Weeks Before:**\n• Early voting begins (varies by state)\n• Mail-in ballots start arriving\n\n**Election Day:**\n• Polls typically open 6-7 AM, close 7-8 PM\n• Results begin coming in after polls close\n\n**After Election Day:**\n• Official canvassing and certification\n• Recounts if necessary\n\nWant me to explain any of these steps in more detail?",
  ],
  voting_methods: [
    "There are several ways to cast your vote! 🗳️\n\n**1. In-Person Voting (Election Day)**\n• Go to your assigned polling place\n• Bring required ID (varies by state)\n• Cast your ballot privately\n\n**2. Early Voting**\n• Available in most states\n• Usually 1-2 weeks before Election Day\n• Same process as Election Day voting\n• Often at designated locations (not your regular polling place)\n\n**3. Mail-In / Absentee Voting**\n• Request a ballot from your local election office\n• Some states send ballots automatically\n• Fill out at home and mail it back or drop it off\n• Deadlines vary – check your state's rules!\n\n**4. Provisional Ballot**\n• Used when there's a question about eligibility\n• Your vote is set aside and verified later\n\nWhich method would you like to learn more about?",
  ],
  counting: [
    "Great question about vote counting! 🔢\n\nThe process is designed to be transparent and secure:\n\n**1. Closing the Polls**\n• Election workers seal ballot boxes\n• Voting machines are shut down\n• All materials are secured\n\n**2. Counting Methods**\n• **Optical Scanners:** Paper ballots are fed through machines that read your marks\n• **Electronic Tabulation:** Digital voting machine results are compiled\n• **Hand Counting:** Some jurisdictions still count by hand\n\n**3. Verification**\n• Results are tallied at the precinct level\n• Transmitted to county election offices\n• Bipartisan observers monitor the process\n• Multiple verification checks are performed\n\n**4. Certification**\n• Provisional and absentee ballots are verified\n• Official results are certified days/weeks later\n• Recounts may occur in close races\n\nThe whole process has multiple safeguards to ensure accuracy!",
  ],
  id_requirements: [
    "Voter ID requirements vary significantly by state! 🪪\n\n**Strict Photo ID States:**\n• Must show government-issued photo ID\n• Examples: Driver's license, passport, military ID\n\n**Non-Strict Photo ID States:**\n• Photo ID requested but alternatives available\n• Can often sign an affidavit instead\n\n**Non-Photo ID States:**\n• Accept various forms of identification\n• Utility bills, bank statements, etc.\n\n**No ID Required States:**\n• Some states don't require any ID\n• You just state your name and address\n\n**Pro Tip:** Even if your state doesn't require ID, it's always a good idea to bring some form of identification to avoid any issues.\n\nWould you like to know the specific requirements for your state?",
  ],
  default: [
    "That's an interesting question! 🤔\n\nWhile I'd love to give you a detailed answer, let me share some helpful resources:\n\n• **vote.gov** - Official U.S. voting information\n• **ballotpedia.org** - Non-partisan election encyclopedia\n• **Your state's Secretary of State website** - State-specific rules\n\nYou can also ask me about:\n• 📋 Voter registration\n• 📅 Election timelines\n• 🗳️ Voting methods\n• 🔢 How votes are counted\n• 🪪 ID requirements\n\nWhat would you like to explore?",
  ]
};

// Simple keyword matching for mock responses
function getTopicFromMessage(message) {
  const lower = message.toLowerCase();
  
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('start') || lower.includes('help')) {
    return 'greeting';
  }
  if (lower.includes('register') || lower.includes('registration') || lower.includes('sign up') || lower.includes('enroll')) {
    return 'registration';
  }
  if (lower.includes('timeline') || lower.includes('when') || lower.includes('date') || lower.includes('deadline') || lower.includes('schedule')) {
    return 'timeline';
  }
  if (lower.includes('how to vote') || lower.includes('mail') || lower.includes('absentee') || lower.includes('early voting') || lower.includes('in-person') || lower.includes('method')) {
    return 'voting_methods';
  }
  if (lower.includes('count') || lower.includes('tally') || lower.includes('result') || lower.includes('how are votes')) {
    return 'counting';
  }
  if (lower.includes('id') || lower.includes('identification') || lower.includes('photo') || lower.includes('document') || lower.includes('require')) {
    return 'id_requirements';
  }
  return 'default';
}

export async function getAIResponse(message) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500));
  
  const topic = getTopicFromMessage(message);
  const responses = MOCK_RESPONSES[topic];
  const response = responses[Math.floor(Math.random() * responses.length)];
  
  return response;
}

export const SUGGESTED_QUESTIONS = [
  "How do I register to vote?",
  "What's the election timeline?",
  "What are the different ways to vote?",
  "How are votes counted?",
  "What ID do I need to vote?",
  "When is the registration deadline?"
];

export { SYSTEM_PROMPT };
