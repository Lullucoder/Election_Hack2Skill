/**
 * AI Service for ElectionIQ
 * Indian Election Education Assistant
 * Mock responses for development — ready for Google Gemini API integration via Cloud Functions
 */

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

You always remain neutral, educational, factual, and helpful. You cite official ECI sources when relevant.`;

const MOCK_RESPONSES = {
  greeting: [
    "Namaste! I'm ElectionIQ, your AI-powered guide to understanding the Indian election process. I'm here to help you learn about voter registration, EVMs, election timelines, and your rights as a voter.\n\nFeel free to ask me anything about Indian elections, or try one of the suggested questions below!",
  ],
  registration: [
    "Great question about voter registration in India!\n\n**Eligibility:**\n• Must be an Indian citizen\n• Must be 18 years or older as on 1st January of the qualifying year\n• Must be a resident of the constituency\n\n**How to Register:**\n1. **Online:** Visit voters.eci.gov.in and fill Form 6\n2. **App:** Use the Voter Helpline App (available on Android & iOS)\n3. **Offline:** Submit Form 6 at your nearest Electoral Registration Office (ERO)\n\n**Documents Required:**\n• Proof of age (Aadhaar, Birth Certificate, Class 10 Marksheet)\n• Proof of address (Aadhaar, Utility Bill, Bank Passbook)\n• Passport-size photograph\n\n**After Registration:**\n• Track your application on NVSP portal\n• Once approved, collect your EPIC card or download e-EPIC\n• Verify your name in the electoral roll before every election\n\nWould you like to know more about any specific step?",
  ],
  evm: [
    "India uses Electronic Voting Machines (EVMs) for elections — here's how they work:\n\n**EVM Components:**\n1. **Control Unit** — with the Presiding Officer at the polling booth\n2. **Ballot Unit** — inside the voting compartment for the voter\n\n**How to Vote on EVM:**\n• Find the candidate name and party symbol on the Ballot Unit\n• Press the blue button next to your chosen candidate\n• A light and beep confirm your vote has been recorded\n\n**VVPAT (Paper Audit Trail):**\n• A paper slip with candidate name and symbol is displayed for 7 seconds\n• Verify your vote on this slip\n• The slip drops into a sealed box for potential cross-verification\n\n**Security Features:**\n• EVMs are standalone — NOT connected to any network\n• One-time programmable chips — cannot be reprogrammed\n• Mock polls conducted before every election\n• Strong room storage with 24/7 CCTV and armed security\n• VVPAT slips from 5 random booths per constituency are cross-checked\n\nWould you like to learn about NOTA or election counting?",
  ],
  timeline: [
    "Here's how an Indian general election unfolds:\n\n**Phase 1 — Announcement:**\n• ECI announces election schedule and dates\n• Model Code of Conduct (MCC) comes into immediate effect\n• Existing government cannot make policy announcements\n\n**Phase 2 — Nominations:**\n• Candidates file nomination papers with the Returning Officer\n• Scrutiny of nominations by the RO\n• Last date for withdrawal of candidature\n\n**Phase 3 — Campaigning:**\n• Political rallies, door-to-door canvassing, media campaigns\n• Campaign must stop 48 hours before polling (silence period)\n• No liquor distribution, voter bribery, or communal appeals\n\n**Phase 4 — Polling Day:**\n• Voting on EVMs with VVPAT at assigned polling booths\n• Typically 7:00 AM to 6:00 PM (varies by region)\n• Public holiday declared\n\n**Phase 5 — Counting Day:**\n• Usually a few days after the last phase of polling\n• Postal ballots counted first, then EVM results\n• VVPAT cross-verification of 5 booths per constituency\n\n**Phase 6 — Results & Government Formation:**\n• Winners declared constituency by constituency\n• Party/coalition with 272+ Lok Sabha seats forms government\n• President invites majority leader to become Prime Minister\n\nShall I explain any phase in more detail?",
  ],
  nota: [
    "NOTA — None of the Above — is an important option for Indian voters.\n\n**What is NOTA?**\n• A button on the EVM allowing voters to reject all candidates\n• Introduced after the Supreme Court ruling in September 2013 (PUCL v. Union of India)\n• Symbolised by a ballot paper with a cross mark\n\n**How to use NOTA:**\n• NOTA is the last option on the Ballot Unit of the EVM\n• Press the button next to the NOTA symbol to register your choice\n• Your vote is recorded and counted like any other vote\n\n**Important to Know:**\n• Even if NOTA receives the most votes, the candidate with the highest votes still wins\n• NOTA does NOT invalidate an election\n• It is a powerful way to express dissatisfaction with all candidates\n• Several states have seen NOTA votes in thousands\n\n**Why NOTA Matters:**\n• It provides a democratic way to register protest\n• It maintains vote secrecy — unlike boycotting the election\n• It pressures parties to field better candidates\n\nWould you like to learn about voter rights or election types?",
  ],
  voter_id: [
    "The EPIC (Elector Photo Identity Card) is your Voter ID in India.\n\n**What is EPIC?**\n• Issued by the Election Commission of India\n• Contains your name, photo, address, and unique EPIC number\n• Primary document for voter identification at polling booths\n\n**How to Get Your EPIC:**\n1. Fill Form 6 online at voters.eci.gov.in\n2. Upload your photograph, age proof, and address proof\n3. A Booth Level Officer (BLO) may visit for verification\n4. Once approved, collect your physical EPIC or download e-EPIC\n\n**e-EPIC (Digital Voter ID):**\n• Available as a downloadable PDF with QR code\n• Can be stored on your phone\n• Equally valid as the physical card for voting\n\n**Alternative IDs Accepted for Voting (12 documents):**\n• Aadhaar Card\n• Passport\n• Driving License\n• PAN Card\n• Service Identity Card (Government employees)\n• Bank/Post Office Passbook with photo\n• And 6 more documents approved by ECI\n\nNeed help checking your voter registration status?",
  ],
  types: [
    "India conducts several types of elections:\n\n**1. Lok Sabha Elections (General Elections)**\n• Elects 543 Members of Parliament (MPs)\n• Uses First-Past-The-Post (FPTP) system\n• Conducted every 5 years unless dissolved earlier\n• 272+ seats needed for majority\n\n**2. Vidhan Sabha Elections (State Assembly)**\n• Elects Members of Legislative Assembly (MLAs)\n• Number of seats varies by state (e.g., UP: 403, Goa: 40)\n• Also uses FPTP system\n• Schedule varies by state\n\n**3. Rajya Sabha Elections**\n• Upper house of Parliament — 245 members\n• Not directly elected by the public\n• MLAs vote to elect Rajya Sabha members\n• Members serve 6-year terms, one-third retire every 2 years\n\n**4. Panchayat Elections (Rural)**\n• Three-tier system: Gram Panchayat, Block, District\n• Conducted by State Election Commissions\n• Reservation for SC/ST and women candidates\n\n**5. Municipal Elections (Urban)**\n• Municipal Corporations, Councils, and Nagar Panchayats\n• Also conducted by State Election Commissions\n\nWhich type would you like to learn more about?",
  ],
  default: [
    "That's a great question! Let me point you to some helpful resources:\n\n**Official Resources:**\n• voters.eci.gov.in — National Voters' Service Portal\n• eci.gov.in — Election Commission of India\n• Voter Helpline App — Available on Android & iOS\n• Toll-free helpline: 1950\n\n**You can ask me about:**\n• Voter Registration (EPIC / Form 6)\n• How EVMs and VVPAT work\n• Election timeline and phases\n• Types of elections in India\n• NOTA and voter rights\n• Voter ID requirements\n• Model Code of Conduct\n\nWhat would you like to explore?",
  ]
};

function getTopicFromMessage(message) {
  const lower = message.toLowerCase();
  
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('namaste') || lower.includes('start') || lower.includes('help')) {
    return 'greeting';
  }
  if (lower.includes('register') || lower.includes('registration') || lower.includes('form 6') || lower.includes('nvsp') || lower.includes('enrol')) {
    return 'registration';
  }
  if (lower.includes('evm') || lower.includes('voting machine') || lower.includes('vvpat') || lower.includes('paper trail') || lower.includes('how to vote') || lower.includes('ballot unit')) {
    return 'evm';
  }
  if (lower.includes('timeline') || lower.includes('when') || lower.includes('date') || lower.includes('schedule') || lower.includes('phase') || lower.includes('mcc') || lower.includes('model code')) {
    return 'timeline';
  }
  if (lower.includes('nota') || lower.includes('none of the above') || lower.includes('reject')) {
    return 'nota';
  }
  if (lower.includes('voter id') || lower.includes('epic') || lower.includes('id card') || lower.includes('e-epic') || lower.includes('identification') || lower.includes('aadhaar')) {
    return 'voter_id';
  }
  if (lower.includes('lok sabha') || lower.includes('vidhan sabha') || lower.includes('rajya sabha') || lower.includes('type') || lower.includes('panchayat') || lower.includes('municipal') || lower.includes('assembly') || lower.includes('parliament')) {
    return 'types';
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
  "How do I register as a voter in India?",
  "How does the EVM and VVPAT work?",
  "What is NOTA?",
  "What are the types of elections in India?",
  "What is the election timeline?",
  "What ID do I need to vote?",
];
