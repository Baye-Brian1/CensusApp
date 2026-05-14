import WorkflowCard from "./WorkflowCard";


export default function Workflow(){
    return(
    <section id="workflow" className="pt-20 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-4 font-inter">
            Powerful CensusSys Workflow
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-500 font-space">
            Simple Workflow of how the CensusSys works
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 items-center justify-center">
        <WorkflowCard
        value={1}
        title={"Register Household"}
        text={"Add new household and capture basic information"}
        />
        <WorkflowCard
        value={2}
        title={"Add Individuals"}
        text={"Record individuals details within each household"}
        />
        <WorkflowCard
        value={3}
        title={"Manage & Analyze"}
        text={"View, manage and analyze data to generate reports"}
        hasRightBorder={false}
        />
      </div>
      </section>
    );
}