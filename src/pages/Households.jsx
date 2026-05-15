import { useContext, useState } from "react";
import { CensusContext } from "../context/CensusContext";
import Table from "../component/Table";
import HouseholdForm from "../component/HouseholdForm";
import { Search, Plus, Filter, Trash2, Edit } from "lucide-react";

const Households = () => {
  const { households, setHouseholds } = useContext(CensusContext);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [filterLocation, setFilterLocation] = useState("");

  // Ensure households is an array
  const householdsArray = Array.isArray(households) ? households : [];
  
  const filtered = householdsArray.filter(h => {
    const matchesSearch = (h?.householdName || '').toLowerCase().includes(search.toLowerCase()) ||
                          (h?.headOfHousehold || '').toLowerCase().includes(search.toLowerCase());
    const matchesLocation = !filterLocation || h?.location === filterLocation;
    return matchesSearch && matchesLocation;
  });

  const addHousehold = (newHousehold) => {
    setHouseholds([...householdsArray, newHousehold]);
    setShowForm(false);
  };

  const deleteHousehold = (index) => {
    if (window.confirm("Are you sure you want to delete this household?")) {
      const updated = [...householdsArray];
      updated.splice(index, 1);
      setHouseholds(updated);
    }
  };

  const locations = [...new Set(householdsArray.map(h => h?.location).filter(Boolean))];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Households</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          <Plus className="w-4 h-4" />
          Add Household
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by household name or head..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        
        <select
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">All Locations</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Households</p>
          <p className="text-2xl font-bold">{householdsArray.length}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Members</p>
          <p className="text-2xl font-bold">{householdsArray.reduce((sum, h) => sum + (h?.members || 0), 0)}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Average Size</p>
          <p className="text-2xl font-bold">
            {householdsArray.length ? (householdsArray.reduce((sum, h) => sum + (h?.members || 0), 0) / householdsArray.length).toFixed(1) : 0}
          </p>
        </div>
      </div>

      {/* Table */}
      <Table
        columns={['Household Name', 'Head of Household', 'Location', 'Members', 'Phone', 'Date Added', 'Actions']}
        data={filtered.map((h, idx) => ({
          'Household Name': h?.householdName || 'N/A',
          'Head of Household': h?.headOfHousehold || 'N/A',
          'Location': h?.location || 'N/A',
          'Members': h?.members || 0,
          'Phone': h?.phoneNumber || 'N/A',
          'Date Added': h?.dateAdded || 'N/A',
          'Actions': idx
        }))}
        actions={(row) => (
          <div className="flex gap-2">
            <button
              onClick={() => deleteHousehold(row.Actions)}
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
        <HouseholdForm
          onClose={() => setShowForm(false)}
          onSubmit={addHousehold}
        />
      )}
    </div>
  );
};

export default Households;