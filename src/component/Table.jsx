const Table = ({ columns, data, actions }) => {
  return (
    <table className="min-w-full border border-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((col) => <th key={col} className="p-2 border-b">{col}</th>)}
          {actions && <th className="p-2 border-b">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50">
            {columns.map((col) => <td key={col} className="p-2 border-b">{row[col]}</td>)}
            {actions && <td className="p-2 border-b flex gap-2">{actions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;