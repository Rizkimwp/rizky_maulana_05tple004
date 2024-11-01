import { FaPlus } from "react-icons/fa";
import CardTable from "../../components/CardTable";
import HeaderFunction from "../../components/HeaderFunction";
import TableComponent from "../../components/TableComponents";
import { useState } from "react";
import Jabatan from "./index";
import JabatanForm from "./form";
interface Jabatan {
  no: number;
  kode_jabatan: string;
  name: string;
}

const Content = () => {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState<Jabatan[]>([]);

  const handleAddEmployee = (newEmployee: Jabatan) => {
    setEmployees([...employees, { ...newEmployee }]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };
  const columns: { key: keyof Jabatan; label: string }[] = [
    { key: "no", label: "No" },
    { key: "kode_jabatan", label: "Kode Jabatan" },
    { key: "name", label: "Jabatan" },

    // Example column for "id" field
  ];

  const data: Jabatan[] = [
    { no: 1, kode_jabatan: "TP01", name: "Bos" },
    { no: 2, kode_jabatan: "TP02", name: "Supervisor" },
    { no: 3, kode_jabatan: "TP03", name: "HRD" },
    { no: 4, kode_jabatan: "TP04", name: "Manajer" },
    { no: 5, kode_jabatan: "TP05", name: "Karyawan" },
    { no: 6, kode_jabatan: "TP06", name: "Staff" },

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
        <JabatanForm onSubmit={handleAddEmployee} onCancel={handleCancel} />
      ) : (
        <CardTable>
          <HeaderFunction
            btn_text="Tambah Jabatan"
            text="Data Jabatan"
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
