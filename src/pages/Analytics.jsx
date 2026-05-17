import { useContext } from "react";
import { CensusContext } from "../context/CensusContext";
import { Users, Home, UserCheck, BarChart3, PieChart, TrendingUp, MapPin, Calendar } from "lucide-react";

const Analytics = () => {
  const {households, individuals, enumerators} = useContext(CensusContext);

  const householdsArray = Array.isArray(households)? households : [];
  const individualsArray = Array.isArray(individuals)? individuals : [];
  const enumeratorsArray = Array.isArray(enumerators)? enumerators : [];

  const totalPopulation = individualsArray.length;
  const maleCount = individualsArray.filter(i => i?.gender === "Male").length;
  const femaleCount = individualsArray.filter(i => i?.gender === "Female").length;
  const malePercentage= totalPopulation > 0 ? (maleCount / totalPopulation * 100).toFixed(1) : (0);
  const femalePercentage = totalPopulation > 0 ? (femaleCount / totalPopulation * 100).toFixed(1) : 0;

  const ageGroups = {
    '0-14': individualsArray.filter(i => i?.age >= 0 && i?.age <= 14).length,
    '15-24': individualsArray.filter(i => i?.age>=15 && i?.age<=24).length,
    '25-44': individualsArray.filter(i => i?.age>=25 && i?.age<=44).length,
    '45-64': individualsArray.filter(i => i?.age >= 45 && i?.age <= 64).length,
    '65+': individualsArray.filter(i => i?.age >= 65).length,
  };

const locationPopulation={};
householdsArray.forEach(household => {
  const location = household?.location || "unknown";
  const members = household?.maembers || 0;
  locationPopulation[location]=(locationPopulation[location] || 0) + members;
});

  const maritalStatus = {
    'Single': individualsArray.filter(i => i?.maritalStatus === 'Single').length,
    'Married': individualsArray.filter(i => i?.maritalStatus === 'Married').length,
    'Divorced': individualsArray.filter(i => i?.maritalStatus === 'Divorced').length,
    'Widowed': individualsArray.filter(i => i?.maritalStatus === 'Widowed').length,
  };

  const educationLevels = {
    'None': individualsArray.filter(i => i?.educationLevel === 'None').length,
    'Primary': individualsArray.filter(i => i?.educationLevel === 'Primary').length,
    'Secondary': individualsArray.filter(i => i?.educationLevel === 'Secondary').length,
    'University': individualsArray.filter(i => i?.educationLevel === 'University').length,
  };

  // Calculate average age
  const averageAge = totalPopulation > 0 
    ? (individualsArray.reduce((sum, i) => sum + (i?.age || 0), 0) / totalPopulation).toFixed(1)
    : 0;

  const maxAgeGroup = Math.max(...Object.values(ageGroups));  
  const maxLocation = Math.max(...Object.values(locationPopulation));
  const maxMarital = Math.max(...Object.values(maritalStatus));
  const maxEducation = Math.max(...Object.values(educationLevels));

  return (
    <div className="max-w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-500 mt-1">Comprehensive census data analysis and insights</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">Total Population</p>
            <Users className="w-5 h-5 text-[#111]" />
          </div>
          <p className="text-2xl font-bold">{totalPopulation.toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-1">Registered individuals</p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">Households</p>
            <Home className="w-5 h-5 text-[#111]" />
          </div>
          <p className="text-2xl font-bold">{householdsArray.length.toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-1">Average size: {householdsArray.length ? (totalPopulation / householdsArray.length).toFixed(1) : 0}</p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">Average Age</p>
            <Calendar className="w-5 h-5 text-[#111]" />
          </div>
          <p className="text-2xl font-bold">{averageAge}</p>
          <p className="text-xs text-gray-400 mt-1">Years</p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">Enumerators</p>
            <UserCheck className="w-5 h-5 text-[#111]" />
          </div>
          <p className="text-2xl font-bold">{enumeratorsArray.length}</p>
          <p className="text-xs text-gray-400 mt-1">Active: {enumeratorsArray.filter(e => e?.status === 'Active').length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Gender Distribution</h2>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex items-center justify-around">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="16"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#292828"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 56 * (malePercentage / 100)} ${2 * Math.PI * 56}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <p className="text-2xl font-bold">{maleCount}</p>
                    <p className="text-xs text-gray-500">Male</p>
                  </div>
                </div>
              </div>
              <p className="mt-2 font-medium">{malePercentage}%</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="16"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#111"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 56 * (femalePercentage / 100)} ${2 * Math.PI * 56}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <p className="text-2xl font-bold">{femaleCount}</p>
                    <p className="text-xs text-gray-500">Female</p>
                  </div>
                </div>
              </div>
              <p className="mt-2 font-medium">{femalePercentage}%</p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span>Male</span>
              <span className="font-medium">{maleCount} ({malePercentage}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-[#292828] rounded-full h-2" style={{ width: `${malePercentage}%` }} />
            </div>
            <div className="flex justify-between text-sm mt-3">
              <span>Female</span>
              <span className="font-medium">{femaleCount} ({femalePercentage}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-[#111] rounded-full h-2" style={{ width: `${femalePercentage}%` }} />
            </div>
          </div>
        </div>

        {/* Age Distribution */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Age Distribution</h2>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {Object.entries(ageGroups).map(([group, count]) => {
              const percentage = totalPopulation > 0 ? (count / totalPopulation * 100).toFixed(1) : 0;
              const barWidth = maxAgeGroup > 0 ? (count / maxAgeGroup * 100) : 0;
              return (
                <div key={group}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{group}</span>
                    <span className="font-medium">{count} ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-black rounded-full h-2 transition-all"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Location Distribution */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Population by Location</h2>
          <MapPin className="w-5 h-5 text-gray-400" />
        </div>
        {Object.keys(locationPopulation).length === 0 ? (
          <p className="text-center text-gray-500 py-8">No location data available</p>
        ) : (
          <div className="space-y-4">
            {Object.entries(locationPopulation).map(([location, count]) => {
              const percentage = totalPopulation > 0 ? (count / totalPopulation * 100).toFixed(1) : 0;
              const barWidth = maxLocation > 0 ? (count / maxLocation * 100) : 0;
              return (
                <div key={location}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{location}</span>
                    <span className="font-medium">{count.toLocaleString()} ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#292828] rounded-full h-2 transition-all"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Social Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Marital Status */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Marital Status</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {Object.entries(maritalStatus).map(([status, count]) => {
              const percentage = totalPopulation > 0 ? (count / totalPopulation * 100).toFixed(1) : 0;
              const barWidth = maxMarital > 0 ? (count / maxMarital * 100) : 0;
              return (
                <div key={status}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{status}</span>
                    <span className="font-medium">{count} ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#111] rounded-full h-2 transition-all"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Level */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Education Level</h2>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {Object.entries(educationLevels).map(([level, count]) => {
              const percentage = totalPopulation > 0 ? (count / totalPopulation * 100).toFixed(1) : 0;
              const barWidth = maxEducation > 0 ? (count / maxEducation * 100) : 0;
              return (
                <div key={level}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{level}</span>
                    <span className="font-medium">{count} ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gray-800 rounded-full h-2 transition-all"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="mt-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm opacity-80">Gender Ratio</p>
            <p className="text-2xl font-bold">
              {totalPopulation > 0 ? (maleCount / femaleCount).toFixed(2) : 0}
            </p>
            <p className="text-xs opacity-70">Males per female</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Dependency Ratio</p>
            <p className="text-2xl font-bold">
              {totalPopulation > 0 
                ? ((ageGroups['0-14'] + ageGroups['65+']) / (totalPopulation - ageGroups['0-14'] - ageGroups['65+']) * 100).toFixed(1)
                : 0}%
              </p>
            <p className="text-xs opacity-70">Young + Elderly / Working Age</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Household Density</p>
            <p className="text-2xl font-bold">
              {householdsArray.length > 0 ? (totalPopulation / householdsArray.length).toFixed(1) : 0}
            </p>
            <p className="text-xs opacity-70">People per household</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;