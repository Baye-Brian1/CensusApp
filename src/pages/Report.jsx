import { useContext } from "react";
import { CensusContext } from "../context/CensusContext";
import { FileText, Download, Printer, Users, Home, UserCheck, BarChart3 } from "lucide-react";

const Reports = () => {
  const { households, individuals, enumerators } = useContext(CensusContext);

  const householdsArray = Array.isArray(households) ? households : [];
  const individualsArray = Array.isArray(individuals) ? individuals : [];
  const enumeratorsArray = Array.isArray(enumerators) ? enumerators : [];

  // Calculate statistics
  const maleCount = individualsArray.filter(i => i?.gender === 'Male').length;
  const femaleCount = individualsArray.filter(i => i?.gender === 'Female').length;
  
  const ageGroups = {
    '0-14': individualsArray.filter(i => i?.age >= 0 && i?.age <= 14).length,
    '15-24': individualsArray.filter(i => i?.age >= 15 && i?.age <= 24).length,
    '25-44': individualsArray.filter(i => i?.age >= 25 && i?.age <= 44).length,
    '45-64': individualsArray.filter(i => i?.age >= 45 && i?.age <= 64).length,
    '65+': individualsArray.filter(i => i?.age >= 65).length,
  };

  const locationCount = {};
  householdsArray.forEach(h => {
    const loc = h?.location || 'Unknown';
    locationCount[loc] = (locationCount[loc] || 0) + 1;
  });

  const generateReport = (type) => {
    let content = `${type.toUpperCase()} REPORT\n`;
    content += `="""="""="""="""="""="""="""="""="""="""\n`;
    content += `Generated: ${new Date().toLocaleString()}\n\n`;
    
    switch(type) {
      case "Population":
        content += `Total Population: ${individualsArray.length}\n`;
        content += `Male: ${maleCount} (${((maleCount/individualsArray.length)*100).toFixed(1)}%)\n`;
        content += `Female: ${femaleCount} (${((femaleCount/individualsArray.length)*100).toFixed(1)}%)\n\n`;
        content += `Age Group Distribution:\n`;
        Object.entries(ageGroups).forEach(([group, count]) => {
          const percent = individualsArray.length ? ((count/individualsArray.length)*100).toFixed(1) : 0;
          content += `  ${group}: ${count} (${percent}%)\n`;
        });
        break;
      case "Household":
        content += `Total Households: ${householdsArray.length}\n`;
        content += `Average Household Size: ${householdsArray.length ? (individualsArray.length / householdsArray.length).toFixed(1) : 0}\n\n`;
        content += `Households by Location:\n`;
        Object.entries(locationCount).forEach(([loc, count]) => {
          content += `  ${loc}: ${count}\n`;
        });
        break;
      case "Enumerator":
        content += `Total Enumerators: ${enumeratorsArray.length}\n`;
        content += `Active: ${enumeratorsArray.filter(e => e?.status === 'Active').length}\n`;
        content += `Inactive: ${enumeratorsArray.filter(e => e?.status === 'Inactive').length}\n`;
        break;
    }
    
    alert(content);
  };

  const downloadReport = (type) => {
    let content = `${type.toUpperCase()} REPORT\n`;
    content += `="""="""="""="""="""="""="""="""="""="""\n`;
    content += `Generated: ${new Date().toLocaleString()}\n\n`;
    
    switch(type) {
      case "Population":
        content += `Total Population: ${individualsArray.length}\n`;
        content += `Male: ${maleCount}\n`;
        content += `Female: ${femaleCount}\n\n`;
        content += `Age Groups:\n`;
        Object.entries(ageGroups).forEach(([group, count]) => {
          content += `${group}: ${count}\n`;
        });
        break;
      case "Household":
        content += `Total Households: ${householdsArray.length}\n`;
        content += `Average Size: ${householdsArray.length ? (individualsArray.length / householdsArray.length).toFixed(1) : 0}\n\n`;
        content += `By Location:\n`;
        Object.entries(locationCount).forEach(([loc, count]) => {
          content += `${loc}: ${count}\n`;
        });
        break;
      case "Enumerator":
        content += `Total Enumerators: ${enumeratorsArray.length}\n`;
        content += `Active: ${enumeratorsArray.filter(e => e?.status === 'Active').length}\n`;
        break;
    }
    
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${type.toLowerCase()}_report_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reportCards = [
    { title: "Population Report", icon: Users, color: "bg-blue-500", type: "Population", description: "Demographic breakdown by age and gender" },
    { title: "Household Report", icon: Home, color: "bg-green-500", type: "Household", description: "Household distribution and composition" },
    { title: "Enumerator Report", icon: UserCheck, color: "bg-purple-500", type: "Enumerator", description: "Enumerator performance and coverage" },
  ];

  return (
    <div className="max-w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-500 mt-1">Generate and download census reports</p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Population</p>
              <p className="text-2xl font-bold">{individualsArray.length}</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Households</p>
              <p className="text-2xl font-bold">{householdsArray.length}</p>
            </div>
            <Home className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Enumerators</p>
              <p className="text-2xl font-bold">{enumeratorsArray.length}</p>
            </div>
            <UserCheck className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg Household Size</p>
              <p className="text-2xl font-bold">
                {householdsArray.length ? (individualsArray.length / householdsArray.length).toFixed(1) : 0}
              </p>
            </div>
            <BarChart3 className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>
      
      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {reportCards.map((report) => (
          <div key={report.title} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`${report.color} h-2`} />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <report.icon className="w-10 h-10 text-gray-700" />
                <div className="flex gap-2">
                  <button
                    onClick={() => generateReport(report.type)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="View Report"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => downloadReport(report.type)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Download Report"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
              <p className="text-sm text-gray-500">{report.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Quick Preview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Total Individuals Registered</span>
            <span className="font-semibold">{individualsArray.length}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Total Households Created</span>
            <span className="font-semibold">{householdsArray.length}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-gray-600">Active Enumerators</span>
            <span className="font-semibold text-green-600">{enumeratorsArray.filter(e => e?.status === 'Active').length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;