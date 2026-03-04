import {
  Store,
  Building2,
  Plane,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Rocket,
  Film,
  Landmark,
  HandHelping,
  Truck,
  Factory,
  Banknote,
  Clock,
  Car,
  Gamepad2,
  Megaphone,
  Utensils,
  Scale,
  Trophy,
  Dumbbell,
  Home,
} from "lucide-react";
import IndustryCard from "../grouped-cards";

const industries = [
  { name: "Retail", icon: Store },
  { name: "Real Estate", icon: Building2 },
  { name: "Travel & Tourism", icon: Plane },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Startups", icon: Rocket },
  { name: "Media", icon: Film },
  { name: "Govt. & Public", icon: Landmark },
  { name: "Nonprofits & NGOs", icon: HandHelping },
  { name: "Logistics", icon: Truck },
  { name: "Manufacturing", icon: Factory },
  { name: "Finance", icon: Banknote },
  { name: "On-Demand", icon: Clock },
  { name: "Automotive", icon: Car },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Advertising", icon: Megaphone },
  { name: "Food & Beverages", icon: Utensils },
  { name: "Legal Services", icon: Scale },
  { name: "Sports", icon: Trophy },
  { name: "Fitness", icon: Dumbbell },
  { name: "Rentals", icon: Home },
];

const IndustriesWeServe = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-foreground">
          Industries We Serve
        </h2>

        <p className="mt-4 text-center text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
          We serve a diverse range of industries including retail, real estate,
          travel & tourism, healthcare, education, e-commerce, startups, media,
          government & public, nonprofits & NGOs, logistics, manufacturing,
          finance, on-demand, automotive, gaming, advertising, food & beverages,
          legal services, sports, fitness, and rentals.
        </p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {industries.map((item) => (
            <IndustryCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesWeServe;