/**
 * Icon Resolver — maps iconKey strings from data to actual Lucide SVG components.
 * This is used across all pages to render icons from mockData icon keys.
 */
import {
  SearchIcon, RegisterIcon, LearnIcon, ChecklistIcon, VoteIcon,
  StatsIcon, GovernmentIcon, ParliamentIcon, BadgeIcon, LocationIcon,
  NotificationIcon, AssistantIcon, QuizIcon, JourneyIcon,
  WarningIcon, CalendarIcon, ShieldIcon, ChatIcon, ExplorerIcon,
  EarlyBirdIcon, VerifiedIcon, UserCheckIcon, DashboardIcon, HomeIcon,
  CheckIcon, CloseIcon, ArrowRightIcon, SendIcon, SpinnerIcon,
  LogoutIcon, InfoIcon, DeleteIcon, ChevronDownIcon, CorrectIcon, WrongIcon,
  RetryIcon, SparklesIcon, RocketIcon, FlagIcon, TargetIcon, ZapIcon,
  LockIcon, EducationIcon, EVMIcon,
  EVMMachineIcon, VoterIDIcon, LogoIcon, AshokaChakra,
} from './Icons';

const ICON_MAP = {
  search: SearchIcon,
  register: RegisterIcon,
  learn: LearnIcon,
  checklist: ChecklistIcon,
  vote: VoteIcon,
  stats: StatsIcon,
  government: GovernmentIcon,
  parliament: ParliamentIcon,
  badge: BadgeIcon,
  location: LocationIcon,
  notification: NotificationIcon,
  assistant: AssistantIcon,
  quiz: QuizIcon,
  journey: JourneyIcon,
  warning: WarningIcon,
  calendar: CalendarIcon,
  shield: ShieldIcon,
  chat: ChatIcon,
  explorer: ExplorerIcon,
  earlybird: EarlyBirdIcon,
  verified: VerifiedIcon,
  usercheck: UserCheckIcon,
  dashboard: DashboardIcon,
  home: HomeIcon,
  check: CheckIcon,
  close: CloseIcon,
  arrowRight: ArrowRightIcon,
  send: SendIcon,
  spinner: SpinnerIcon,
  logout: LogoutIcon,
  info: InfoIcon,
  delete: DeleteIcon,
  chevronDown: ChevronDownIcon,
  correct: CorrectIcon,
  wrong: WrongIcon,
  retry: RetryIcon,
  sparkles: SparklesIcon,
  rocket: RocketIcon,
  flag: FlagIcon,
  target: TargetIcon,
  zap: ZapIcon,
  lock: LockIcon,
  education: EducationIcon,
  evm: EVMIcon,
  evmMachine: EVMMachineIcon,
  voterID: VoterIDIcon,
  logo: LogoIcon,
  ashoka: AshokaChakra,
};

/**
 * Renders an SVG icon from a string key.
 * @param {string} iconKey - The key from the data (e.g., 'search', 'vote')
 * @param {object} props - Props to pass to the icon (size, className, etc.)
 */
export default function Icon({ name, size = 20, className = '', ...props }) {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) {
    // Fallback to a generic icon
    return <InfoIcon size={size} className={className} {...props} />;
  }
  return <IconComponent size={size} className={className} {...props} />;
}

export { ICON_MAP };
