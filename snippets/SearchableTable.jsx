import { useState } from "react";

export const SearchableTable = ({ data }) => {
  const [query, setQuery] = useState("");

  const filtered = data.filter(row =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search input */}
      <div>
        <input
          type="text"
          placeholder="Search payment methods..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-100"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-sm">
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-left">
              {Object.keys(data[0]).map(key => (
                <th key={key} className="py-2 px-3 font-semibold">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length ? (
              filtered.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-t hover:bg-gray-50 even:bg-gray-50/30"
                >
                  {Object.values(row).map((val, i) => (
                    <td key={i} className="py-2 px-3 align-middle">
                      {val}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={Object.keys(data[0]).length}
                  className="py-4 px-3 text-center text-gray-500"
                >
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
