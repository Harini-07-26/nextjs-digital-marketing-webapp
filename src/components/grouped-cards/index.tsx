import { LucideIcon } from "lucide-react";

interface Props {
  name: string;
  icon: LucideIcon;
}

const IndustryCard = ({ name, icon: Icon }: Props) => {
  return (
    <div
      className="
        group relative rounded-xl bg-zinc-900 
        border border-zinc-800 
        p-6 text-center
        transition-all duration-300
        hover:border-purple-500/40
        hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]
      "
    >
      {/* Icon */}
      <div
        className="
          mx-auto flex h-14 w-14 items-center justify-center 
          rounded-lg bg-zinc-800
          group-hover:bg-pink-500/10
          transition-colors
        "
      >
        <Icon className="h-7 w-7 text-yellow-400" />
      </div>

      {/* Title */}
      <p className="mt-4 text-sm font-medium gradient-text">
        {name}
      </p>
    </div>
  );
}

export default IndustryCard;
