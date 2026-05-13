import { ArrowRight } from "lucide-react"

export default function CallAction(){
    <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
           <h2 className="text-4xl md:text-6xl mb-6">Ready to Transform Your Census Process</h2>
           <p>Join thousands of Organisation using CensusSys to collect accurate data and build stronger Communities</p>
           <div className="item-center flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <button className="font-mono px-4 py-2 outline-none cursor-pointer bg-[#111] text-white text-sm font-medium hover:bg-gray-800 transition">Get Started</button>
            <button className=" font-mono text-[#111] outline-none border text-sm cursor-pointer font-medium px-4 py-2 items-center flex gap-2">
                Learn More
                <ArrowRight/>
            </button>
           </div>
        </div>

    </section>
}