import { useContext, useState } from "react";
import { CensusContext } from "../context/CensusContext";
import Table from "../component/Table";

const Households = () => {
  const { households, setHouseholds } = useContext(CensusContext);
  const [search, setSearch] = useState("");

  const filtered = households.filter(h => h.householdName.toLowerCase().includes(search.toLowerCase()));

  const addHousehold = () => {
    const name = prompt("Household Name");
    if (!name) return;
    setHouseholds([...households, { householdName: name, location: "Unknown", members: 0, dateAdded: new Date().toLocaleDateString() }]);
  };

  return (
    <div className="p-6 flex-1">
      <h1 className="text-2xl font-bold mb-4">Households</h1>
      <div className="flex mb-4">
        <input type="text" placeholder="Search..." value={search} onChange={e=>setSearch(e.target.value)}
          className="border p-2 flex-1 mr-2"/>
        <button onClick={addHousehold} className="bg-black text-white px-4">+ Add Household</button>
      </div>
      <Table
        columns={['Household Name','Head of Household','Location','Members','Date Added']}
        data={filtered.map(h=>({
          'Household Name': h.householdName,
          'Head of Household': h.head || 'N/A',
          'Location': h.location,
          'Members': h.members,
          'Date Added': h.dateAdded
        }))}
        actions={()=><div>...</div>}
      />
    </div>
  );
};

export default Households;