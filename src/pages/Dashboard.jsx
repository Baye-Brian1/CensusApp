import { useContext } from "react";
import { CensusContext } from "../context/CensusContext";
import StatsCard from "../component/StatsCard";
import { Users, User, Home, Clipboard } from "lucide-react";
import Table from "../component/Table";

const Dashboard = () => {
  const { households, individuals, enumerators } = useContext(CensusContext);

  const recent = [...individuals, ...households].slice(-5);

  return (
    <div className="p-6 flex-1">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatsCard title="Total Population" value={individuals.length} icon={<Users />} />
        <StatsCard title="Total Households" value={households.length} icon={<Home />} />
        <StatsCard title="Individuals" value={individuals.length} icon={<User />} />
        <StatsCard title="Active Enumerators" value={enumerators.length} icon={<Clipboard />} />
      </div>

      <h2 className="text-xl font-semibold mb-2">Recent Entries</h2>
      <Table
        columns={['Name','Location','Type','Date Added']}
        data={recent.map(item => ({
          Name: item.name || item.householdName,
          Location: item.location,
          Type: item.type || (item.householdName ? 'Household' : 'Individual'),
          'Date Added': item.dateAdded || 'N/A'
        }))}
      />
    </div>
  );
};

export default Dashboard;