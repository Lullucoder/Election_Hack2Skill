/**
 * Indian Election Education Data
 * All data is contextualised for the Indian democratic process,
 * covering Lok Sabha, Vidhan Sabha, Panchayat, and Municipal elections.
 */

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi (NCT)', 'Jammu & Kashmir', 'Ladakh', 'Puducherry',
  'Chandigarh', 'Andaman & Nicobar', 'Dadra & Nagar Haveli and Daman & Diu', 'Lakshadweep'
];

// Keep backward-compatible export name
export const STATES = INDIAN_STATES;

export const VOTER_JOURNEY_STEPS = [
  {
    id: 1,
    title: 'Check Your Eligibility',
    description: 'Confirm you meet the requirements set by the Election Commission of India (ECI). You must be an Indian citizen aged 18+ on the qualifying date.',
    iconKey: 'search',
    status: 'info',
    details: [
      'Must be an Indian citizen',
      'Must be 18 years of age or older as on 1st January of the year of revision of the electoral roll',
      'Must be a resident of the constituency where you wish to vote',
      'Must not be disqualified under any law (e.g., unsound mind, corrupt practices)',
      'NRIs can also register as overseas voters under Section 20A of the RP Act'
    ]
  },
  {
    id: 2,
    title: 'Register as a Voter (EPIC)',
    description: 'Apply for your Voter ID (EPIC – Elector Photo Identity Card) via the National Voters\' Service Portal (NVSP) or Voter Helpline App.',
    iconKey: 'register',
    status: 'primary',
    details: [
      'Online: Apply on voters.eci.gov.in or the Voter Helpline App using Form 6',
      'Offline: Submit Form 6 at your nearest Electoral Registration Office (ERO)',
      'Documents needed: Proof of age (Aadhaar, Birth Certificate, etc.) & address proof',
      'Track your application status on the NVSP portal or Voter Helpline App',
      'Once approved, collect your EPIC card or download the e-EPIC from the portal'
    ]
  },
  {
    id: 3,
    title: 'Learn About EVM & VVPAT',
    description: 'India uses Electronic Voting Machines (EVMs) and Voter Verifiable Paper Audit Trail (VVPAT) for secure, transparent elections.',
    iconKey: 'evm',
    status: 'accent',
    details: [
      'EVM has two units: Control Unit (with polling officer) and Ballot Unit (in the booth)',
      'Press the button next to your chosen candidate\'s name and symbol on the Ballot Unit',
      'VVPAT displays a paper slip for 7 seconds showing whom you voted for — verify it',
      'EVMs are standalone, not connected to any network — ensuring tamper-proof voting',
      'Mock polls are conducted before every election to ensure EVM accuracy'
    ]
  },
  {
    id: 4,
    title: 'Understand Election Types',
    description: 'India holds elections at multiple levels — Lok Sabha (Parliament), Vidhan Sabha (State Assembly), Panchayat, and Municipal.',
    iconKey: 'parliament',
    status: 'info',
    details: [
      'Lok Sabha (General Elections): Elects 543 MPs to the lower house of Parliament — held every 5 years',
      'Vidhan Sabha (State Assembly): Elects MLAs for state legislatures — schedule varies by state',
      'Panchayat & Municipal Elections: Local self-government bodies — conducted by State Election Commissions',
      'Rajya Sabha: Upper house members elected by state legislators (not direct public vote)',
      'By-elections: Held to fill casual vacancies in any of the above'
    ]
  },
  {
    id: 5,
    title: 'Prepare for Voting Day',
    description: 'Check your name in the voter list, find your polling booth, and gather your identification documents.',
    iconKey: 'checklist',
    status: 'success',
    details: [
      'Verify your name in the electoral roll on voters.eci.gov.in or the Voter Helpline App',
      'Find your assigned polling booth using the ECI Booth Locator or SMS service',
      'Carry your EPIC / Voter ID card (or any of the 12 alternative IDs allowed by ECI)',
      'Polling hours are typically 7:00 AM to 6:00 PM (varies by region)',
      'On Election Day, a public holiday is declared — plan your visit accordingly'
    ]
  },
  {
    id: 6,
    title: 'Cast Your Vote',
    description: 'Visit your assigned polling booth, get your finger inked, and cast your vote on the EVM. You can also choose NOTA.',
    iconKey: 'vote',
    status: 'accent',
    details: [
      'Show your ID at the polling booth — the officer verifies your identity',
      'Indelible ink is applied to your left index finger to prevent double voting',
      'Enter the voting compartment and press the button against your chosen candidate on the EVM',
      'Verify your vote on the VVPAT slip displayed for 7 seconds',
      'You have the right to choose NOTA (None of the Above) if you don\'t prefer any candidate'
    ]
  },
  {
    id: 7,
    title: 'Counting & Results',
    description: 'After all phases of polling are completed, votes are counted under strict ECI supervision with representatives from all parties.',
    iconKey: 'stats',
    status: 'primary',
    details: [
      'Counting takes place on a designated day after all polling phases are over',
      'EVMs are stored in strong rooms under 24/7 CCTV surveillance and armed security',
      'Counting agents from each party are present to observe the process',
      'VVPAT slips from randomly selected booths (5 per constituency) are cross-verified',
      'Results are announced constituency by constituency on the ECI results portal'
    ]
  },
  {
    id: 8,
    title: 'Government Formation',
    description: 'The party or coalition with a majority of seats forms the government. The leader is invited by the President/Governor to take oath.',
    iconKey: 'government',
    status: 'success',
    details: [
      'Lok Sabha: A party needs 272+ seats (simple majority of 543) to form the central government',
      'The President invites the majority leader to form the government and become Prime Minister',
      'Vidhan Sabha: Majority of total seats in the state assembly is needed',
      'The Governor invites the majority leader to become Chief Minister',
      'If no party gets a majority, coalition governments can be formed with allied parties'
    ]
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'What is the minimum age to vote in Indian elections?',
    options: ['16 years', '17 years', '18 years', '21 years'],
    correctAnswer: 2,
    explanation: 'As per the Constitution of India (Article 326), every Indian citizen who has attained the age of 18 years on the qualifying date is eligible to be registered as a voter.'
  },
  {
    id: 2,
    question: 'Which body conducts and supervises elections in India?',
    options: ['Supreme Court of India', 'Election Commission of India (ECI)', 'NITI Aayog', 'Ministry of Home Affairs'],
    correctAnswer: 1,
    explanation: 'The Election Commission of India (ECI), established under Article 324 of the Constitution, is the autonomous constitutional authority responsible for administering election processes in India.'
  },
  {
    id: 3,
    question: 'What does EPIC stand for?',
    options: ['Electronic Poll Identification Code', 'Elector Photo Identity Card', 'Election Process Information Certificate', 'Electronic Photo ID Card'],
    correctAnswer: 1,
    explanation: 'EPIC stands for Elector Photo Identity Card, commonly known as the Voter ID card. It is the primary identity document for voting in Indian elections.'
  },
  {
    id: 4,
    question: 'How many seats are there in the Lok Sabha?',
    options: ['435 seats', '500 seats', '543 seats', '545 seats'],
    correctAnswer: 2,
    explanation: 'The Lok Sabha has 543 elected seats. Members are directly elected by the people from single-member constituencies using the First-Past-The-Post (FPTP) system.'
  },
  {
    id: 5,
    question: 'What is NOTA in Indian elections?',
    options: ['A political party', 'None of the Above — an option to reject all candidates', 'A type of voting machine', 'A voter registration form'],
    correctAnswer: 1,
    explanation: 'NOTA (None of the Above) was introduced by the Supreme Court of India in 2013. It allows voters to officially express dissatisfaction with all candidates. However, even if NOTA gets the most votes, the candidate with the most votes among parties still wins.'
  },
  {
    id: 6,
    question: 'What is the purpose of VVPAT in elections?',
    options: ['To speed up counting', 'To allow remote voting', 'To provide a paper trail to verify the vote cast on EVM', 'To prevent voter fraud by biometric scan'],
    correctAnswer: 2,
    explanation: 'VVPAT (Voter Verifiable Paper Audit Trail) is attached to the EVM and prints a slip showing the candidate\'s name and symbol. The voter can verify their vote for 7 seconds before the slip drops into a sealed box.'
  },
  {
    id: 7,
    question: 'Which form is used for new voter registration in India?',
    options: ['Form 1', 'Form 6', 'Form 8', 'Form 17C'],
    correctAnswer: 1,
    explanation: 'Form 6 is used for new voter registration in India. It can be submitted online via the NVSP portal (voters.eci.gov.in) or through the Voter Helpline App.'
  },
  {
    id: 8,
    question: 'What is the indelible ink used for during elections?',
    options: ['To sign the ballot paper', 'To mark the voter\'s finger and prevent repeat voting', 'To seal the EVM', 'To stamp the voter ID card'],
    correctAnswer: 1,
    explanation: 'Indelible ink (containing silver nitrate) is applied to the left index finger of voters. It prevents individuals from voting more than once and typically lasts several days.'
  },
  {
    id: 9,
    question: 'What majority is needed to form the central government in India?',
    options: ['Two-thirds majority (362 seats)', 'Simple majority (272 seats)', 'Absolute majority (400 seats)', 'Any number of seats'],
    correctAnswer: 1,
    explanation: 'To form the government at the centre, a party or coalition needs a simple majority — at least 272 seats out of the 543 elected Lok Sabha seats.'
  },
  {
    id: 10,
    question: 'Which Article of the Indian Constitution grants the right to vote?',
    options: ['Article 14', 'Article 19', 'Article 324', 'Article 326'],
    correctAnswer: 3,
    explanation: 'Article 326 of the Constitution of India provides for universal adult suffrage — every citizen of India who is not less than 18 years of age shall be entitled to be registered as a voter.'
  },
  {
    id: 11,
    question: 'Who appoints the Chief Election Commissioner of India?',
    options: ['Prime Minister', 'Chief Justice of India', 'President of India', 'Parliament'],
    correctAnswer: 2,
    explanation: 'The Chief Election Commissioner and other Election Commissioners are appointed by the President of India. The CEC can only be removed through impeachment by Parliament.'
  },
  {
    id: 12,
    question: 'What is the Model Code of Conduct (MCC)?',
    options: ['A law passed by Parliament', 'Guidelines issued by ECI for parties and candidates during elections', 'A code for EVM manufacturers', 'A training manual for polling officers'],
    correctAnswer: 1,
    explanation: 'The Model Code of Conduct (MCC) is a set of guidelines issued by the ECI that comes into effect from the date elections are announced. It governs the behavior of political parties, candidates, and the ruling government to ensure free and fair elections.'
  }
];

export const VOTER_CHECKLIST = [
  { id: 'eligible', label: 'I am an Indian citizen aged 18 or above', iconKey: 'usercheck' },
  { id: 'registered', label: 'I have registered and received my EPIC (Voter ID) card', iconKey: 'register' },
  { id: 'voter_list', label: 'I have verified my name in the electoral roll', iconKey: 'search' },
  { id: 'polling_booth', label: 'I know my assigned polling booth location', iconKey: 'location' },
  { id: 'id_ready', label: 'I have my Voter ID or one of the 12 approved ID documents', iconKey: 'voterID' },
  { id: 'evm_knowledge', label: 'I understand how to use the EVM and VVPAT', iconKey: 'evm' },
  { id: 'candidates', label: 'I have researched the candidates in my constituency', iconKey: 'learn' },
  { id: 'schedule', label: 'I know my polling date and have planned to visit', iconKey: 'calendar' },
];

export const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: 'urgent',
    title: 'Electoral Roll Revision in Progress',
    message: 'The ECI has started the annual revision of electoral rolls. Verify your details on voters.eci.gov.in before the deadline.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
    iconKey: 'warning'
  },
  {
    id: 2,
    type: 'info',
    title: 'Polling Date Announced for Your State',
    message: 'The Election Commission has announced polling dates. Check the ECI website for your constituency\'s schedule.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    read: false,
    iconKey: 'calendar'
  },
  {
    id: 3,
    type: 'success',
    title: 'Quiz Badge Earned!',
    message: 'Congratulations! You earned the "Election Expert" badge by scoring 80%+ on the quiz.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    read: true,
    iconKey: 'badge'
  },
  {
    id: 4,
    type: 'info',
    title: 'AI Assistant: Updated with Latest ECI Guidelines',
    message: 'Our election assistant now has the latest information on voter registration, EVM procedures, and MCC guidelines.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
    read: true,
    iconKey: 'assistant'
  },
  {
    id: 5,
    type: 'warning',
    title: 'Model Code of Conduct in Effect',
    message: 'The MCC is now in effect for your state. Political advertisements and rallies are subject to ECI guidelines.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72),
    read: true,
    iconKey: 'shield'
  }
];

export const BADGES = [
  {
    id: 'registered_voter',
    name: 'Registered Voter',
    description: 'Verified your voter registration status',
    iconKey: 'register',
    color: '#6366f1',
    requirement: 'Complete voter registration check'
  },
  {
    id: 'quiz_master',
    name: 'Election Expert',
    description: 'Scored 80%+ on the election quiz',
    iconKey: 'badge',
    color: '#f59e0b',
    requirement: 'Score 10/12 or higher on the quiz'
  },
  {
    id: 'checklist_complete',
    name: 'Vote Ready',
    description: 'Completed the entire voter readiness checklist',
    iconKey: 'verified',
    color: '#10b981',
    requirement: 'Check off all checklist items'
  },
  {
    id: 'journey_explorer',
    name: 'Journey Explorer',
    description: 'Explored all steps of the voter journey',
    iconKey: 'explorer',
    color: '#8b5cf6',
    requirement: 'View every step of the voter journey'
  },
  {
    id: 'ai_curious',
    name: 'Curious Citizen',
    description: 'Asked 5+ questions to the AI assistant',
    iconKey: 'chat',
    color: '#3b82f6',
    requirement: 'Ask 5 or more questions'
  },
  {
    id: 'early_bird',
    name: 'Early Bird',
    description: 'One of the first users to try ElectionIQ',
    iconKey: 'earlybird',
    color: '#ec4899',
    requirement: 'Sign up during launch period'
  }
];

export const FEATURE_HIGHLIGHTS = [
  {
    title: 'AI Election Assistant',
    description: 'Ask any question about the Indian election process and get instant, non-partisan answers powered by Google Gemini AI.',
    iconKey: 'assistant',
    color: '#6366f1'
  },
  {
    title: 'Voter Journey Timeline',
    description: 'Interactive step-by-step guide through the entire Indian voting process — from EPIC registration to government formation.',
    iconKey: 'journey',
    color: '#8b5cf6'
  },
  {
    title: 'Election Knowledge Quiz',
    description: 'Test your knowledge of EVMs, VVPAT, ECI, NOTA, and the Indian Constitution with gamified quizzes. Earn digital badges!',
    iconKey: 'quiz',
    color: '#f59e0b'
  },
  {
    title: 'Voter Readiness Checklist',
    description: 'Track your preparation with a personalized checklist — from EPIC verification to polling booth discovery.',
    iconKey: 'checklist',
    color: '#10b981'
  },
  {
    title: 'Smart Notifications',
    description: 'Get timely reminders about electoral roll revision deadlines, polling dates, and MCC updates for your state.',
    iconKey: 'notification',
    color: '#ef4444'
  },
  {
    title: 'EVM & VVPAT Education',
    description: 'Learn how India\'s Electronic Voting Machines and Voter Verifiable Paper Audit Trail ensure free and fair elections.',
    iconKey: 'evm',
    color: '#3b82f6'
  }
];

/**
 * EVM/VVPAT educational data — a new feature addition
 */
export const EVM_VVPAT_INFO = {
  title: 'Understanding EVM & VVPAT',
  description: 'India pioneered the use of EVMs for nationwide elections. Learn how these machines ensure your vote is secure and verifiable.',
  sections: [
    {
      title: 'What is an EVM?',
      content: 'An Electronic Voting Machine (EVM) is a portable device used to record votes. It has two parts: the Control Unit (operated by the polling officer) and the Ballot Unit (used by the voter in the booth).',
      facts: [
        'First used in 1982 in Kerala (Parur Assembly constituency)',
        'Nationwide use since 2004 General Elections',
        'Battery-operated — works without electricity',
        'Can record up to 2,000 votes',
        'Not connected to any network — completely standalone'
      ]
    },
    {
      title: 'What is VVPAT?',
      content: 'Voter Verifiable Paper Audit Trail (VVPAT) is a printer attached to the EVM that generates a paper slip showing the candidate name and symbol. The voter can verify their vote for 7 seconds.',
      facts: [
        'Mandatory in all elections since 2019',
        'Paper slip displayed for 7 seconds',
        'Slips from 5 randomly selected booths per constituency are cross-checked',
        'Provides transparency and builds voter confidence',
        'Upheld by the Supreme Court of India'
      ]
    }
  ]
};

/**
 * Indian election timeline phases (for a general election)
 */
export const ELECTION_PHASES = [
  { phase: 1, label: 'Announcement', description: 'ECI announces election schedule, MCC comes into effect', color: '#6366f1' },
  { phase: 2, label: 'Nominations', description: 'Candidates file nominations, scrutiny and withdrawal period', color: '#8b5cf6' },
  { phase: 3, label: 'Campaigning', description: 'Political campaigns, rallies, and canvassing under MCC rules', color: '#f59e0b' },
  { phase: 4, label: 'Polling', description: 'Voting day(s) — often in multiple phases across states', color: '#10b981' },
  { phase: 5, label: 'Counting', description: 'Votes counted under ECI supervision with party agents present', color: '#3b82f6' },
  { phase: 6, label: 'Results', description: 'Winners declared, government formation process begins', color: '#ef4444' },
];
