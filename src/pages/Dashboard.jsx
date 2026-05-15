import { useContext } from "react";
import { CensusContext } from "../context/CensusContext";
import StatsCard from "../component/StatsCard";
import { Users, User, Home, Clipboard, PieChart, TrendingUp } from "lucide-react";
import Table from "../component/Table";

const Dashboard = () => {
  const { households, individuals, enumerators } = useContext(CensusContext);
  
  // Ensure we have arrays even if context returns undefined
  const householdsArray = Array.isArray(households) ? households : [];
  const individualsArray = Array.isArray(individuals) ? individuals : [];
  const enumeratorsArray = Array.isArray(enumerators) ? enumerators : [];
  
  const maleCount = individualsArray.filter(i => i?.gender === 'Male').length;
  const femaleCount = individualsArray.filter(i => i?.gender === 'Female').length;
  const totalPopulation = individualsArray.length;
  
  const recentIndividuals = [...individualsArray].slice(-5).reverse();
  const recentHouseholds = [...householdsArray].slice(-5).reverse();

  // Age group calculations with safe checking
  const getAgeGroupCount = (min, max) => {
    if (individualsArray.length === 0) return 0;
    return individualsArray.filter(i => {
      const age = i?.age;
      if (!age) return false;
      if (max) return age >= min && age <= max;
      return age >= min;
    }).length;
  };

  const ageGroups = [
    { label: '0-14', min: 0, max: 14, color: 'bg-blue-500' },
    { label: '15-24', min: 15, max: 24, color: 'bg-green-500' },
    { label: '25-44', min: 25, max: 44, color: 'bg-yellow-500' },
    { label: '45-64', min: 45, max: 64, color: 'bg-orange-500' },
    { label: '65+', min: 65, max: null, color: 'bg-red-500' }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's your census overview.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Population" value={totalPopulation} icon={Users} />
        <StatsCard title="Total Households" value={householdsArray.length} icon={Home} />
        <StatsCard title="Individuals" value={totalPopulation} icon={User} />
        <StatsCard title="Active Enumerators" value={enumeratorsArray.length} icon={Clipboard} />
      </div>
      
      {/* Gender Distribution Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Gender Distribution</h2>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full border-8 border-blue-500 flex items-center justify-center">
                <span className="text-2xl font-bold">{maleCount}</span>
              </div>
              <p className="mt-2 font-medium">Male</p>
              <p className="text-sm text-gray-500">
                {totalPopulation > 0 ? ((maleCount / totalPopulation) * 100).toFixed(1) : 0}%
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full border-8 border-pink-500 flex items-center justify-center">
                <span className="text-2xl font-bold">{femaleCount}</span>
              </div>
              <p className="mt-2 font-medium">Female</p>
              <p className="text-sm text-gray-500">
                {totalPopulation > 0 ? ((femaleCount / totalPopulation) * 100).toFixed(1) : 0}%
              </p>
            </div>
          </div>
        </div>
        
        {/* Age Groups */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Age Groups</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {ageGroups.map(group => {
              const count = getAgeGroupCount(group.min, group.max);
              const percentage = totalPopulation > 0 ? (count / totalPopulation) * 100 : 0;
              
              return (
                <div key={group.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{group.label}</span>
                    <span>{count} ({percentage.toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${group.color} rounded-full h-2 transition-all`} 
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Recent Entries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Individuals</h2>
          <Table
            columns={['Name', 'Household', 'Age', 'Gender']}
            data={recentIndividuals.map(i => ({
              'Name': i?.name || 'N/A',
              'Household': i?.household || 'N/A',
              'Age': i?.age || 'N/A',
              'Gender': i?.gender || 'N/A'
            }))}
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Households</h2>
          <Table
            columns={['Household Name', 'Head', 'Location', 'Members']}
            data={recentHouseholds.map(h => ({
              'Household Name': h?.householdName || 'N/A',
              'Head': h?.headOfHousehold || 'N/A',
              'Location': h?.location || 'N/A',
              'Members': h?.members || 0
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;