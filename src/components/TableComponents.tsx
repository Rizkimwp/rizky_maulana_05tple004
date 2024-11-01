import React, { useState, useMemo } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Column<T> {
  key: keyof T; // Ensures the key is a valid key of the data type
  label: string;
}

interface TableComponentProps<T> {
  columns: Column<T>[];
  data: T[];
  onAdd: () => void;
}

const TableComponent = <T,>({ columns, data }: TableComponentProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sorting function
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data; // If no sort key, return unsorted data

    const sortableData = [...data];
    sortableData.sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sortableData;
  }, [data, sortConfig]);

  // Filtered data for search
  const filteredData = sortedData.filter((row) =>
    columns.some((col) =>
      String(row[col.key]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handlers
  const handleSort = (key: keyof T) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);
  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setRowsPerPage(Number(e.target.value));

  return (
    <div className="table-responsive ">
      <div className="d-flex justify-content-between mb-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control w-25"
        />
      </div>

      <table className="table table-striped table-bordered ">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                className="p-3"
                key={String(col.key)}
                onClick={() => handleSort(col.key)}
                style={{ cursor: "pointer" }}
              >
                {col.label}
                {sortConfig.key === col.key
                  ? sortConfig.direction === "asc"
                    ? " ▲"
                    : " ▼"
                  : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td className="p-3" key={String(col.key)}>
                  {row[col.key] as React.ReactNode}
                </td>
              ))}
              <td>
                <button className="btn btn-sm btn-primary">
                  <FaEdit />
                </button>
                <button className="btn btn-sm btn-danger ms-2">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center">
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="form-select w-auto"
        >
          {[5, 10, 15].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>

        <div>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`btn btn-sm ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"} ms-1`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
