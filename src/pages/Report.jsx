import { useContext } from "react";
import { CensusContext } from "../context/CensusContext";

const Reports = () => {
  const { households, individuals, enumerators } = useContext(CensusContext);

  const generateReport = (type) => {
    switch(type){
      case "population":
        alert(`Population: ${individuals.length}`);
        break;
      case "household":
        alert(`Households: ${households.length}`);
        break;
      case "individual":
        alert(`Individuals: ${individuals.length}`);
        break;
      case "enumerator":
        alert(`Enumerators: ${enumerators.length}`);
        break;
      default:
        alert("Custom report generated");
    }
  };

  return (
    <div className="p-6 flex-1">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <button className="border p-4 text-left" onClick={()=>generateReport("population")}>Population Report</button>
        <button className="border p-4 text-left" onClick={()=>generateReport("household")}>Household Report</button>
        <button className="border p-4 text-left" onClick={()=>generateReport("individual")}>Individual Report</button>
        <button className="border p-4 text-left" onClick={()=>generateReport("enumerator")}>Enumerator Report</button>
        <button className="border p-4 text-left" onClick={()=>generateReport("custom")}>Custom Report</button>
      </div>
    </div>
  );
};

export default Reports;