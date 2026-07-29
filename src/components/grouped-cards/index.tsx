import { LucideIcon } from "lucide-react";

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
        p-6 text-center
        transition-all duration-300
        hover:border-primary/50
        hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.2)]
      "
    >
      {/* Icon */}
      <div
        className="
          mx-auto flex h-14 w-14 items-center justify-center 
          rounded-lg bg-primary/10 border border-primary/20
          group-hover:bg-primary/20
          transition-colors
        "
      >
        <Icon className="h-7 w-7 text-primary" />
      </div>

      {/* Title */}
      <p className="mt-4 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {name}
      </p>
    </div>
  );
}

export default IndustryCard;

