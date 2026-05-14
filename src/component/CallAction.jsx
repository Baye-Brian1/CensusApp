import { ArrowRight } from "lucide-react";

export default function CallAction() {
  return (
    <section id="callaction" className="py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl mb-6 font-inter">
          Ready to Transform Your Census Process
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Join thousands of Organisation using CensusSys to collect accurate
          data and build stronger Communities
        </p>
        <div className="item-center flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <button className="font-mono px-4 py-2 outline-none cursor-pointer bg-[#111] text-white text-sm font-medium hover:bg-gray-800 transition">
            Get Started
          </button>
          <button className=" font-mono text-gray-700 outline-none border border-gray-300 text-sm cursor-pointer font-medium px-4 py-2 items-center flex gap-2 hover:border-gray-400 hover:bg-gray-50 transition">
            Learn More
            <ArrowRight className="w-4 h-4"/>
          </button>
        </div>
      </div>
    </section>
  );
}
