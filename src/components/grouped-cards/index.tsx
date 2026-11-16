import { LucideIcon } from 'lucide-react';

interface Props {
  name: string;
  icon: LucideIcon;
}

const IndustryCard = ({ name, icon: Icon }: Props) => {
  return (
    <div
      className="
        group relative rounded-xl bg-card 
        border border-border 
        p-3.5 sm:p-5 md:p-6 text-center
        transition-all duration-300
        hover:border-primary/50
        hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.2)]
      "
    >
      {/* Icon */}
      <div
        className="
          mx-auto flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center 
          rounded-lg bg-primary/10 border border-primary/20
          group-hover:bg-primary/20
          transition-colors
        "
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
      </div>

      {/* Title */}
      <h3 className="mt-2.5 sm:mt-4 text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
        {name}
      </h3>
    </div>
  );
};

export default IndustryCard;
