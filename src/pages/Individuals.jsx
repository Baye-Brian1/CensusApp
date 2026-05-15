import { useContext, useState } from "react";
import { CensusContext } from "../context/CensusContext";
import Table from "../component/Table";
import IndividualForm from "../component/IndividualForm";
import { Search, Plus, Filter, Trash2, Edit } from "lucide-react";

const Individuals = () => {
  const { individuals, setIndividuals, households } = useContext(CensusContext);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [filterGender, setFilterGender] = useState("");

  // Ensure arrays exist
  const individualsArray = Array.isArray(individuals) ? individuals : [];
  const householdsArray = Array.isArray(households) ? households : [];

  const filtered = individualsArray.filter(i => {
    const matchesSearch = (i?.name || '').toLowerCase().includes(search.toLowerCase());
    const matchesGender = !filterGender || i?.gender === filterGender;
    return matchesSearch && matchesGender;
  });

  const addIndividual = (newIndividual) => {
    setIndividuals([...individualsArray, newIndividual]);
    setShowForm(false);
  };

  const deleteIndividual = (index) => {
    if (window.confirm("Are you sure you want to delete this individual?")) {
      const updated = [...individualsArray];
      updated.splice(index, 1);
      setIndividuals(updated);
    }
  };

  const maleCount = individualsArray.filter(i => i?.gender === 'Male').length;
  const femaleCount = individualsArray.filter(i => i?.gender === 'Female').length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Individuals</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          <Plus className="w-4 h-4" />
          Add Individual
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        
        <select
          value={filterGender}
          onChange={(e) => setFilterGender(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Individuals</p>
          <p className="text-2xl font-bold">{individualsArray.length}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Male</p>
          <p className="text-2xl font-bold text-blue-600">{maleCount}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Female</p>
          <p className="text-2xl font-bold text-pink-600">{femaleCount}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Avg Age</p>
          <p className="text-2xl font-bold">
            {individualsArray.length ? (individualsArray.reduce((sum, i) => sum + (i?.age || 0), 0) / individualsArray.length).toFixed(0) : 0}
          </p>
        </div>
      </div>

      {/* Table */}
      <Table
        columns={['Full Name', 'Household', 'Age', 'Gender', 'Relationship', 'Occupation', 'Date Added', 'Actions']}
        data={filtered.map((i, idx) => ({
          'Full Name': i?.name || 'N/A',
          'Household': i?.household || 'N/A',
          'Age': i?.age || 'N/A',
          'Gender': i?.gender || 'N/A',
          'Relationship': i?.relationship || 'N/A',
          'Occupation': i?.occupation || 'N/A',
          'Date Added': i?.dateAdded || 'N/A',
          'Actions': idx
        }))}
        actions={(row) => (
          <div className="flex gap-2">
            <button
              onClick={() => deleteIndividual(row.Actions)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button className="p-1 text-gray-600 hover:bg-gray-100 rounded">
              <Edit className="w-4 h-4" />
            </button>
          </div>
        )}
      />

      {showForm && (
        <IndividualForm
          onClose={() => setShowForm(false)}
          onSubmit={addIndividual}
          households={householdsArray}
        />
      )}
    </div>
  );
};

export default Individuals;