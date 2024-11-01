import { FaPlus } from "react-icons/fa";
import CardTable from "../../components/CardTable";
import HeaderFunction from "../../components/HeaderFunction";
import TableComponent from "../../components/TableComponents";
import { useState } from "react";
import KaryawanForm from "./form";
interface Karyawan {
  name: string;
  position: string;
}

const Content = () => {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState<Karyawan[]>([]);

  const handleAddEmployee = (newEmployee: Karyawan) => {
    setEmployees([...employees, { ...newEmployee }]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };
  const columns: { key: keyof Karyawan; label: string }[] = [
    { key: "name", label: "Name" },
    { key: "position", label: "Jabatan" },

    // Example column for "id" field
  ];

  const data: Karyawan[] = [
    { name: "Rizky Maulana", position: "Administrator" },
    { name: "John Doe", position: "Manager" },
    { name: "John Doe", position: "Manager" },
    { name: "John Doe", position: "Manager" },
    { name: "John Doe", position: "Manager" },
    { name: "John Doe", position: "Manager" },
    { name: "John Doe", position: "Manager" },
    { name: "John Doe", position: "Manager" },
    // Add more sample data here
  ];

  const handleAdd = () => {
    console.log("Tambah Karyawan clicked!");
  };

  return (
    <div
      className="container-xxl position-absolute justify-content-center align-items-center"
      style={{
        top: "16%", // Position from the top
        left: "55%", // Center horizontally
        transform: "translateX(-50%)", // Center the container horizontally
      }}
    >
      {showForm ? (
        <KaryawanForm onSubmit={handleAddEmployee} onCancel={handleCancel} />
      ) : (
        <CardTable>
          <HeaderFunction
            btn_text="Tambah Karyawan"
            text="Data Karyawan"
            icon={<FaPlus />}
            onFunc={() => setShowForm(true)}
          />
          <hr className="size-2 text-black" />
          <TableComponent columns={columns} data={data} onAdd={handleAdd} />
        </CardTable>
      )}
    </div>
  );
};

export default Content;
