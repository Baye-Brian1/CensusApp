import { useContext, useState } from "react";
import { CensusContext } from "../context/CensusContext";
import Table from "../component/Table";

const Individuals = () => {
  const { individuals, setIndividuals, households } = useContext(CensusContext);
  const [search, setSearch] = useState("");

  const filtered = individuals.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  const addIndividual = () => {
    const name = prompt("Full Name:");
    if (!name) return;
    const age = prompt("Age:");
    const gender = prompt("Gender (Male/Female):");
    const household = prompt("Household Name:");
    setIndividuals([
      ...individuals,
      { name, age, gender, household, location: "Unknown", dateAdded: new Date().toLocaleDateString() }
    ]);
  };

  return (
    <div className="p-6 flex-1">
      <h1 className="text-2xl font-bold mb-4">Individuals</h1>
      <div className="flex mb-4">
        <input type="text" placeholder="Search individuals..." value={search} onChange={e => setSearch(e.target.value)}
          className="border p-2 flex-1 mr-2"/>
        <button onClick={addIndividual} className="bg-black text-white px-4">+ Add Individual</button>
      </div>

      <Table
        columns={['Full Name','Household','Age','Gender','Location','Date Added']}
        data={filtered.map(i => ({
          'Full Name': i.name,
          'Household': i.household,
          'Age': i.age,
          'Gender': i.gender,
          'Location': i.location,
          'Date Added': i.dateAdded
        }))}
        actions={() => <div>...</div>}
      />
    </div>
  );
};

export default Individuals;