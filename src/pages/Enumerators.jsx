import { useContext, useState } from "react";
import { CensusContext } from "../context/CensusContext";
import Table from "../component/Table";

const Enumerators = () => {
  const { enumerators, setEnumerators } = useContext(CensusContext);
  const [search, setSearch] = useState("");

  const filtered = enumerators.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const addEnumerator = () => {
    const name = prompt("Name:");
    if (!name) return;
    const email = prompt("Email:");
    const phone = prompt("Phone:");
    const region = prompt("Region:");
    setEnumerators([
      ...enumerators,
      { name, email, phone, region, status: "Active" }
    ]);
  };

  return (
    <div className="p-6 flex-1">
      <h1 className="text-2xl font-bold mb-4">Enumerators</h1>
      <div className="flex mb-4">
        <input type="text" placeholder="Search enumerators..." value={search} onChange={e => setSearch(e.target.value)}
          className="border p-2 flex-1 mr-2"/>
        <button onClick={addEnumerator} className="bg-black text-white px-4">+ Add Enumerator</button>
      </div>

      <Table
        columns={['Name','Email','Phone','Region','Status']}
        data={filtered.map(e => ({
          'Name': e.name,
          'Email': e.email,
          'Phone': e.phone,
          'Region': e.region,
          'Status': e.status
        }))}
        actions={() => <div>...</div>}
      />
    </div>
  );
};

export default Enumerators;