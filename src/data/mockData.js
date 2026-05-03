// Mock election data for timelines, quizzes, and notifications

export const STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
];

export const VOTER_JOURNEY_STEPS = [
  {
    id: 1,
    title: 'Check Your Eligibility',
    description: 'Confirm you meet the basic requirements: U.S. citizen, 18+ by Election Day, and meet your state\'s residency requirements.',
    icon: '🔍',
    status: 'info',
    details: [
      'Must be a U.S. citizen',
      'Must be 18 years old on or before Election Day',
      'Must meet your state\'s residency requirements',
      'Must not be serving a sentence for a felony conviction (varies by state)',
    ]
  },
  {
    id: 2,
    title: 'Register to Vote',
    description: 'Register online at vote.gov, by mail, or in person at your local election office or DMV.',
    icon: '📋',
    status: 'primary',
    details: [
      'Online: Visit vote.gov (available in most states)',
      'By mail: Download the National Voter Registration Form',
      'In person: Visit your local election office or DMV',
      'Deadline: Usually 15-30 days before the election',
    ]
  },
  {
    id: 3,
    title: 'Research Candidates & Issues',
    description: 'Learn about the candidates and ballot measures using non-partisan resources.',
    icon: '📚',
    status: 'accent',
    details: [
      'Visit ballotpedia.org for non-partisan candidate info',
      'Review your sample ballot before Election Day',
      'Attend local candidate forums and town halls',
      'Read official voter guides from your state',
    ]
  },
  {
    id: 4,
    title: 'Choose Your Voting Method',
    description: 'Decide whether to vote early, by mail, or on Election Day. Each state has different options.',
    icon: '🗳️',
    status: 'info',
    details: [
      'In-Person on Election Day: Go to your assigned polling place',
      'Early Voting: Available in most states, 1-2 weeks before',
      'Mail-In/Absentee: Request a ballot from your election office',
      'Check your state\'s specific options and deadlines',
    ]
  },
  {
    id: 5,
    title: 'Prepare for Voting Day',
    description: 'Gather required documents, find your polling place, and plan your trip.',
    icon: '✅',
    status: 'success',
    details: [
      'Check your state\'s ID requirements',
      'Find your polling place at vote.org/polling-place-locator',
      'Know the polling hours (typically 6AM - 8PM)',
      'Plan transportation to your polling place',
    ]
  },
  {
    id: 6,
    title: 'Cast Your Vote!',
    description: 'Head to the polls, cast your ballot, and get your "I Voted" sticker!',
    icon: '🎉',
    status: 'accent',
    details: [
      'Arrive at your polling place with required documents',
      'Check in with election workers',
      'Fill out your ballot carefully',
      'Submit your ballot and get your sticker!',
    ]
  },
  {
    id: 7,
    title: 'Votes Are Counted',
    description: 'After polls close, election workers count ballots under bipartisan observation.',
    icon: '🔢',
    status: 'primary',
    details: [
      'Polls close and ballot boxes are sealed',
      'Ballots are counted using optical scanners or by hand',
      'Bipartisan observers monitor the process',
      'Provisional and absentee ballots are verified',
    ]
  },
  {
    id: 8,
    title: 'Results Certified',
    description: 'Official results are certified by election officials after thorough verification.',
    icon: '📊',
    status: 'success',
    details: [
      'Results are tallied at precinct and county levels',
      'Recounts occur in very close races',
      'State officials certify the final results',
      'Elected officials prepare to take office',
    ]
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'What is the minimum age to vote in a U.S. federal election?',
    options: ['16 years old', '17 years old', '18 years old', '21 years old'],
    correctAnswer: 2,
    explanation: 'The 26th Amendment to the U.S. Constitution sets the minimum voting age at 18 for all federal, state, and local elections.'
  },
  {
    id: 2,
    question: 'Which website is the official U.S. government resource for voter registration?',
    options: ['voting.com', 'vote.gov', 'register.us', 'elections.gov'],
    correctAnswer: 1,
    explanation: 'Vote.gov is the official U.S. government website that helps citizens register to vote and find election information.'
  },
  {
    id: 3,
    question: 'What is a provisional ballot?',
    options: [
      'A ballot that counts double',
      'A ballot used when there\'s a question about a voter\'s eligibility',
      'A ballot only for primaries',
      'A ballot used in foreign elections'
    ],
    correctAnswer: 1,
    explanation: 'A provisional ballot is given to voters whose eligibility is in question. It is set aside and only counted after the voter\'s eligibility is verified.'
  },
  {
    id: 4,
    question: 'How many days before an election do most states require voter registration?',
    options: ['Same day', '7 days', '15-30 days', '60 days'],
    correctAnswer: 2,
    explanation: 'Most states require registration 15-30 days before an election. However, some states do offer same-day registration.'
  },
  {
    id: 5,
    question: 'What is early voting?',
    options: [
      'Voting before you\'re 18',
      'Voting at your polling place before Election Day',
      'Voting for primary elections only',
      'Voting by phone'
    ],
    correctAnswer: 1,
    explanation: 'Early voting allows registered voters to cast their ballots at designated locations before the official Election Day, typically 1-2 weeks before.'
  },
  {
    id: 6,
    question: 'Who typically oversees elections at the state level?',
    options: [
      'The President',
      'The Supreme Court',
      'The Secretary of State',
      'The FBI'
    ],
    correctAnswer: 2,
    explanation: 'In most states, the Secretary of State is the chief election official responsible for overseeing and administering elections.'
  },
  {
    id: 7,
    question: 'What is the purpose of the Electoral College?',
    options: [
      'To train election workers',
      'To elect members of Congress',
      'To formally elect the President and Vice President',
      'To count individual votes'
    ],
    correctAnswer: 2,
    explanation: 'The Electoral College is the system used to formally elect the President and Vice President. Each state has a set number of electors based on its congressional representation.'
  },
  {
    id: 8,
    question: 'Can you vote by mail in the United States?',
    options: [
      'No, only in-person voting is allowed',
      'Yes, in some states with an excuse',
      'Yes, all states offer some form of mail-in voting',
      'Only military personnel can vote by mail'
    ],
    correctAnswer: 2,
    explanation: 'All states offer some form of absentee or mail-in voting, though the specific rules and requirements vary by state.'
  },
  {
    id: 9,
    question: 'What happens if there\'s a tie in an election?',
    options: [
      'A coin flip decides',
      'The incumbent wins automatically',
      'A recount is typically conducted, followed by state-specific procedures',
      'The election is cancelled'
    ],
    correctAnswer: 2,
    explanation: 'In case of a tie or very close result, a recount is usually conducted. If still tied, procedures vary by state and may include special elections or random selection.'
  },
  {
    id: 10,
    question: 'What is gerrymandering?',
    options: [
      'A type of voter fraud',
      'The process of drawing electoral district boundaries for political advantage',
      'A voting machine brand',
      'A type of ballot'
    ],
    correctAnswer: 1,
    explanation: 'Gerrymandering is the practice of drawing electoral district boundaries to favor a particular political party or group, which can affect representation.'
  }
];

export const VOTER_CHECKLIST = [
  { id: 'eligible', label: 'I confirm I am eligible to vote (18+, U.S. citizen)', icon: '✅' },
  { id: 'registered', label: 'I am registered to vote in my state', icon: '📋' },
  { id: 'polling_place', label: 'I know my polling place location', icon: '📍' },
  { id: 'id_ready', label: 'I have the required identification documents', icon: '🪪' },
  { id: 'researched', label: 'I have researched the candidates and issues', icon: '📚' },
  { id: 'voting_method', label: 'I know how I plan to vote (in-person, mail, early)', icon: '🗳️' },
  { id: 'transportation', label: 'I have transportation to my polling place', icon: '🚗' },
  { id: 'schedule', label: 'I have time set aside on Election Day', icon: '📅' },
];

export const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: 'urgent',
    title: 'Registration Deadline Approaching!',
    message: 'Voter registration closes in 3 days for your state. Make sure you\'re registered!',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 min ago
    read: false,
    icon: '🚨'
  },
  {
    id: 2,
    type: 'info',
    title: 'Early Voting Starts Next Week',
    message: 'Early voting in your state begins on November 1st. You can vote at any early voting location.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: false,
    icon: '📅'
  },
  {
    id: 3,
    type: 'success',
    title: 'Quiz Badge Earned! 🏆',
    message: 'Congratulations! You earned the "Election Expert" badge by scoring 80%+ on the quiz.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: true,
    icon: '🏆'
  },
  {
    id: 4,
    type: 'info',
    title: 'New Feature: AI Assistant Updated',
    message: 'Our Election Assistant has been updated with the latest voting information for your state.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    read: true,
    icon: '🤖'
  },
  {
    id: 5,
    type: 'warning',
    title: 'Mail-In Ballot Deadline',
    message: 'If you\'re voting by mail, your ballot must be postmarked by November 5th.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72), // 3 days ago
    read: true,
    icon: '📬'
  }
];

export const BADGES = [
  {
    id: 'registered_voter',
    name: 'Registered Voter',
    description: 'Confirmed your voter registration',
    icon: '📋',
    color: '#6366f1',
    requirement: 'Complete voter registration check'
  },
  {
    id: 'quiz_master',
    name: 'Election Expert',
    description: 'Scored 80%+ on the election quiz',
    icon: '🏆',
    color: '#f59e0b',
    requirement: 'Score 8/10 or higher on the quiz'
  },
  {
    id: 'checklist_complete',
    name: 'Vote Ready',
    description: 'Completed the entire voter readiness checklist',
    icon: '✅',
    color: '#10b981',
    requirement: 'Check off all checklist items'
  },
  {
    id: 'journey_explorer',
    name: 'Journey Explorer',
    description: 'Viewed all steps of the voter journey',
    icon: '🗺️',
    color: '#8b5cf6',
    requirement: 'Explore every step of the voter journey'
  },
  {
    id: 'ai_curious',
    name: 'Curious Citizen',
    description: 'Asked 5+ questions to the AI assistant',
    icon: '🤖',
    color: '#3b82f6',
    requirement: 'Ask 5 or more questions'
  },
  {
    id: 'early_bird',
    name: 'Early Bird',
    description: 'One of the first users to try ElectionIQ',
    icon: '🐦',
    color: '#ec4899',
    requirement: 'Sign up during launch period'
  }
];

export const FEATURE_HIGHLIGHTS = [
  {
    title: 'AI Election Assistant',
    description: 'Ask any question about the election process and get instant, non-partisan answers powered by Google Gemini.',
    icon: '🤖',
    color: '#6366f1'
  },
  {
    title: 'Voter Journey Timeline',
    description: 'Follow an interactive, step-by-step visual guide through the entire voting process from registration to results.',
    icon: '🗺️',
    color: '#8b5cf6'
  },
  {
    title: 'Knowledge Quiz',
    description: 'Test your election knowledge with gamified quizzes and earn digital badges for your achievements.',
    icon: '🧠',
    color: '#f59e0b'
  },
  {
    title: 'Readiness Checklist',
    description: 'Track your voting preparation with a personalized checklist to make sure you\'re ready for Election Day.',
    icon: '✅',
    color: '#10b981'
  },
  {
    title: 'Smart Notifications',
    description: 'Get timely reminders about registration deadlines, early voting windows, and important election dates.',
    icon: '🔔',
    color: '#ef4444'
  },
  {
    title: 'State-Specific Info',
    description: 'Get voting information tailored to your state, including ID requirements, deadlines, and polling locations.',
    icon: '📍',
    color: '#3b82f6'
  }
];
