const Table = ({ columns, data, actions }) => {
  if (!data || data.length === 0)
    return (
      <div className="text-center py-8 text-gray0-500 border border-gray-200 rounded-lg">
        No data available
      </div>
    );
    return(
        <div className="overflow-x-auto">
           <table className="min-w-full border border-gray-200 rounde-lg">
            <thead className="bg-gray-50">
                <tr>
                  {columns.map((col, idx)=>(
                   <th key={idx} className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    {col}
                   </th>
                  ))}
                </tr>
            </thead>
            <tbody>
              {data.map((row, idx)=>(
                <tr key={idx} className="hover:bg-gray-50">
                {columns.map((col, colIdx)=>(
                    <td key={colIdx}>
                        {row[col] !== undefined  ? row[col] : 'N/A'}
                    </td>
                ))}
                {actions && (
                    <td className="px-4 py-3 text-sm border-b border-gray-200">
                        {actions(row)}
                    </td>
                )}

                </tr>
              ))}
            </tbody>
           </table>
        </div>
    )
};

export default Table;
