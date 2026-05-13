import FeatureCard from "./FeatureCard";
import { Users, User, Shield, BarChart} from "lucide-react";

export default function FeatureCensus() {
  return (
    <section id="feature" className="pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-4 font-inter">
            Powerful Features for Your Census
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-500 font-space">
            Everything you need for Modern Census Management
          </p>
        </div>
      </div>
      <div className="items-center grid grid-cols-4">
        <FeatureCard
          icon={Users}
          title={"Household Registration"}
          text={"Easily register and manage household information"}
        />
        <FeatureCard
          icon={User}
          title={"Individual Records"}
          text={"Capture and maintain detailed individual information"}
        />
        <FeatureCard
          icon={Shield}
          title={"Secure & Reliable"}
          text={"Your data is protected with robust security and backup"}
        />
        <FeatureCard
          icon={BarChart}
          title={"Reports & Analytics"}
          text={"Generate insights and report for better decision making"}
          hasRightBorder={false}
        />
      </div>
    </section>
  );
}
