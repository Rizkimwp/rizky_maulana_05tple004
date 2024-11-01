import { FaPlus } from "react-icons/fa";
import CardTable from "../../components/CardTable";
import HeaderFunction from "../../components/HeaderFunction";
import TableComponent from "../../components/TableComponents";
import { useState } from "react";
import Divisi from "./index";
import DivisiForm from "./form";
interface Divisi {
  no: number;
  kode_divisi: string;
  name: string;
}

const Content = () => {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState<Divisi[]>([]);

  const handleAddEmployee = (newEmployee: Divisi) => {
    setEmployees([...employees, { ...newEmployee }]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };
  const columns: { key: keyof Divisi; label: string }[] = [
    { key: "no", label: "No" },
    { key: "kode_divisi", label: "Kode Divisi" },
    { key: "name", label: "Divisi" },

    // Example column for "id" field
  ];

  const data: Divisi[] = [
    { no: 1, kode_divisi: "TP01", name: "Bos" },
    { no: 2, kode_divisi: "TP02", name: "Supervisor" },
    { no: 3, kode_divisi: "TP03", name: "HRD" },
    { no: 4, kode_divisi: "TP04", name: "Manajer" },
    { no: 5, kode_divisi: "TP05", name: "Karyawan" },
    { no: 6, kode_divisi: "TP06", name: "Staff" },
    // Add more sample data here
  ];

  const handleAdd = () => {
    console.log("Tambah Divisi clicked!");
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
        <DivisiForm onSubmit={handleAddEmployee} onCancel={handleCancel} />
      ) : (
        <CardTable>
          <HeaderFunction
            btn_text="Tambah Divisi"
            text="Data Divisi"
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
