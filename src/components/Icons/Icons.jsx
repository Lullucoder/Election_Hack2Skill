/**
 * Centralized SVG Icon Components
 * Uses Lucide React for consistent, accessible SVG icons throughout the app.
 * No emojis - all icons are proper SVGs for professional UI.
 */
import {
  Vote, Search, ClipboardList, BookOpen, CheckSquare, PartyPopper,
  BarChart3, Award, MapPin, Bell, BotMessageSquare, Brain, Shield,
  ChevronDown, ChevronRight, ArrowRight, Send, Loader2, LogOut,
  Home, User, Lock, Mail, Eye, EyeOff, X, Check, AlertTriangle,
  Clock, Calendar, FileText, Users, Building2, Landmark, Scale,
  Fingerprint, Monitor, Cpu, Globe2, Sparkles, Rocket,
  MessageCircle, CircleCheck, CircleX, RotateCcw, Info, Inbox,
  Trash2, Settings, Star, Zap, Target, Flag, Hash, Layers,
  ShieldCheck, UserCheck, Compass, Bird, HelpCircle, GraduationCap,
  LayoutDashboard, Map
} from 'lucide-react';

// Re-export commonly used icons with semantic names for our app
export {
  // Navigation
  Home as HomeIcon,
  LayoutDashboard as DashboardIcon,
  Map as JourneyIcon,
  BotMessageSquare as AssistantIcon,
  Brain as QuizIcon,
  Bell as NotificationIcon,
  LogOut as LogoutIcon,
  Settings as SettingsIcon,

  // Election specific
  Vote as VoteIcon,
  Landmark as ParliamentIcon,
  Scale as BalanceIcon,
  Building2 as GovernmentIcon,
  Users as CitizensIcon,
  Flag as FlagIcon,
  Fingerprint as BiometricIcon,
  Monitor as EVMIcon,
  Cpu as VVPATIcon,
  Globe2 as IndiaIcon,

  // Actions
  Search as SearchIcon,
  ClipboardList as RegisterIcon,
  BookOpen as LearnIcon,
  CheckSquare as ChecklistIcon,
  PartyPopper as CelebrateIcon,
  BarChart3 as StatsIcon,
  Award as BadgeIcon,
  MapPin as LocationIcon,
  Send as SendIcon,
  ArrowRight as ArrowRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon,
  Loader2 as SpinnerIcon,
  X as CloseIcon,
  Check as CheckIcon,
  CircleCheck as CorrectIcon,
  CircleX as WrongIcon,
  RotateCcw as RetryIcon,
  Trash2 as DeleteIcon,
  Info as InfoIcon,
  Inbox as InboxIcon,
  HelpCircle as HelpIcon,
  GraduationCap as EducationIcon,

  // Status
  AlertTriangle as WarningIcon,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  FileText as DocumentIcon,
  Shield as ShieldIcon,
  ShieldCheck as VerifiedIcon,
  UserCheck as UserCheckIcon,
  Compass as ExplorerIcon,
  Bird as EarlyBirdIcon,
  Star as StarIcon,
  Zap as ZapIcon,
  Target as TargetIcon,
  Hash as HashIcon,
  Layers as LayersIcon,
  Sparkles as SparklesIcon,
  Rocket as RocketIcon,
  MessageCircle as ChatIcon,

  // Auth
  User as UserIcon,
  Lock as LockIcon,
  Mail as MailIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
};

/**
 * Custom Ashoka Chakra SVG - Symbol of Indian democracy
 */
export function AshokaChakra({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ashoka Chakra"
      role="img"
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x1 = 50 + 12 * Math.cos(angle);
        const y1 = 50 + 12 * Math.sin(angle);
        const x2 = 50 + 42 * Math.cos(angle);
        const y2 = 50 + 42 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
}

/**
 * Custom EVM Machine Icon
 */
export function EVMMachineIcon({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="EVM Machine"
      role="img"
    >
      <rect x="3" y="2" width="18" height="20" rx="2" />
      <line x1="3" y1="7" x2="21" y2="7" />
      <circle cx="8" cy="11" r="1.2" fill="currentColor" />
      <circle cx="8" cy="14.5" r="1.2" fill="currentColor" />
      <circle cx="8" cy="18" r="1.2" fill="currentColor" />
      <line x1="11" y1="11" x2="18" y2="11" />
      <line x1="11" y1="14.5" x2="18" y2="14.5" />
      <line x1="11" y1="18" x2="18" y2="18" />
      <rect x="6" y="3.5" width="12" height="2" rx="0.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

/**
 * Custom Voter ID Card Icon
 */
export function VoterIDIcon({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Voter ID Card"
      role="img"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <circle cx="8" cy="11" r="2.5" />
      <line x1="14" y1="9" x2="20" y2="9" />
      <line x1="14" y1="12" x2="20" y2="12" />
      <line x1="14" y1="15" x2="18" y2="15" />
      <line x1="5" y1="17" x2="11" y2="17" />
    </svg>
  );
}

/**
 * Logo icon for ElectionIQ brand
 */
export function LogoIcon({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ElectionIQ Logo"
      role="img"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
      <path
        d="M10 22V10h3v4.5h2.5L18.5 10H22l-4 5.5L22 22h-3.5l-2.5-4.5H13V22h-3z"
        fill="white"
        opacity="0.9"
      />
      <circle cx="24" cy="8" r="3" fill="#f59e0b" />
    </svg>
  );
}
