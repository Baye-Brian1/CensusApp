import { ArrowRight } from "lucide-react";

export default function HeroCensus() {
  return (
    <section className="pt-22 pb-22 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl mb-2 font-inter text-[#111] text-balance tracking-tight leading-tight">
          Accurate Data. Better <br />
          Decisions. Stronger Community
        </h1>

        <p className="text-balance mx-auto text-xl text-gray-500 max-w-3xl leading-relaxed">
          CensusSys helps field workers collect, manage and analyze population
          data efficiently and securely with end-to-end encryption and team
          collaboration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <button className="px-4 py-2.5 outline-none gap-2 bg-[#111] text-sm cursor-pointer text-white font-mono font-medium hover:bg-gray-800 transition">
            Get Started
          </button>
          <button className=" flex gap-2 items-center px-4 py-2.5 border border-gray-300 text-gray-700 font-medium font-mono  hover:border-gray-400 hover:bg-gray-50 transition text-sm">
            Learn More
            <ArrowRight className="w-4 h-4"/>
          </button>
        </div>
      </div>
    </section>
  );
}
