export default function StatsCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <h2 className="text-2xl font-bold mt-2 text-gray-900">{value}</h2>
        </div>
        <div className="p-3 bg-gray-100 rounded-lg">
          {Icon && <Icon className="w-6 h-6 text-gray-700" />}
        </div>
      </div>
    </div>
  );
}