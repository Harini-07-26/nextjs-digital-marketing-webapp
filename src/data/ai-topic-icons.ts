import {
  Bot,
  Brain,
  MessageSquare,
  Eye,
  Languages,
  Sparkles,
  Workflow,
  LineChart,
  Database,
  Cpu,
  Headphones,
  GitBranch,
  Shield,
  Cloud,
  Mic,
  Layers,
  Wrench,
  Smartphone,
  Lock,
  type LucideIcon
} from 'lucide-react';

export const aiTopicIcons: Record<string, LucideIcon> = {
  Brain,
  Bot,
  MessageSquare,
  Sparkles,
  Workflow,
  Eye,
  Languages,
  LineChart,
  Database,
  Cpu,
  GitBranch,
  Headphones,
  Cloud,
  Layers,
  Mic,
  Wrench,
  Smartphone,
  Lock,
  Shield
};

export function getAiTopicIcon(name: string): LucideIcon {
  return aiTopicIcons[name] ?? Bot;
}
