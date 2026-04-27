import { 
  Mic2, 
  Target, 
  Code2, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Database 
} from 'lucide-react';

export const COLORS = {
  primary: '#0A2540', // Deep Navy
  secondary: '#00D1FF', // Glacier Blue
  accent: '#E2E8F0', // Soft Slate
  background: '#F8FAFC', // Frost
};

export const SERVICES = [
  {
    id: 'voice-ai',
    title: 'Nexus Voice AI',
    description: 'Indistinguishable 24/7 voice agents with <100ms latency for customer operations.',
    icon: Mic2,
    tag: 'Customer Ops',
    roi: '32% Resolution Uplift'
  },
  {
    id: 'sales-sdr',
    title: 'Pulse SDRs',
    description: 'Autonomous prospecting agents that qualify leads against your ICP and maintain CRM hygiene.',
    icon: Target,
    tag: 'Autonomous Sales',
    roi: 'Infinite Top-of-Funnel'
  },
  {
    id: 'legacy-refactor',
    title: 'Legacy Morph',
    description: 'Agentic refactoring systems that resolve technical debt and "Testing Debt Spirals" automatically.',
    icon: Code2,
    tag: 'Cyborg Engineering',
    roi: '30% Debt Reduction'
  },
  {
    id: 'agentlake',
    title: 'Stratosphere Analytics',
    description: 'Active reasoning layers sitting atop your data lake to provide proactive C-suite intelligence.',
    icon: BarChart3,
    tag: 'Executive Intel',
    roi: 'Zero-Latency Decisions'
  }
];

export const PILLARS = [
  {
    title: 'Agentlake Architecture',
    description: 'Moving beyond passive data storage to an active reasoning layer using LangGraph & CrewAI.',
    icon: Database
  },
  {
    title: 'Outcome-Based Pricing',
    description: 'Our success is tied to your results. No seats, just ROI-driven consumption models.',
    icon: Zap
  },
  {
    title: 'Supervisory Integrity',
    description: 'Multi-layer QA agents monitor for hallucinations and ensure operational guardrails.',
    icon: ShieldCheck
  },
  {
    title: 'Cyborg Methodology',
    description: 'Human-in-the-loop (HITL) governance ensures synthetic work remains strategically aligned.',
    icon: Cpu
  }
];

export const FIREBASE_PROMPT = `Act as an expert Full-Stack Developer and Firebase Architect. Generate a high-performance landing page for "AntartidaLabs", an AI-Agents-as-a-Service (AaaS) provider. 

Requirements:
1. Framework: React 18+ with Tailwind CSS and Framer Motion.
2. Backend: Firebase v10+ (Authentication, Firestore, and Hosting).
3. Theme: "Antarctic High-Tech" using Deep Navy (#0F172A), Glacier Blue (#0EA5E9), and Aurora Purple accents.
4. Structure:
   - Hero: Animated headline about "Synthetic Workforce Orchestration".
   - Service Grid: 4 cards for Voice AI, Sales SDRs, Legacy Refactoring, and Agentlake Analytics.
   - ROI Calculator: Simple interactive widget to calculate savings using the formula: ((Labor Savings + Efficiency Uplift) - Costs) / Costs.
   - Lead Capture: Firebase Firestore-connected form for "Proof of Concept" (PoC) enrollment.
   - Trust Layer: Security section detailing SOC2, GDPR, and "Zero-Data Retention" standards.
5. Technical Implementation:
   - Use 'firebase/firestore' for data persistence of leads.
   - Use 'framer-motion' for staggered entrance animations of service cards.
   - Implement responsive design (mobile-first).
   - Ensure accessibility and fast LCP.

Output the code in a modular file structure: App.tsx, firebaseConfig.ts, and Tailwind configuration.`;
