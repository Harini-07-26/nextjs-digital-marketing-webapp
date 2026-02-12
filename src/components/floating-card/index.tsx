import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import type { LucideIcon } from 'lucide-react';

interface FloatingCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  iconColor?: string;
  delay?: number;
  className?: string;
}

const FloatingCard = ({
  icon: Icon,
  label,
  value,
  iconColor = 'text-primary',
  delay = 0,
  className = ''
}: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay + 0.9 }}
      className={`floating-card rounded-2xl ${delay > 0 ? 'float-animation-delayed' : 'float-animation'} ${className}`}
    >
      <div className="flex flex-row gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-sm font-semibold text-foreground">{value}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCard;
