import { FaCheck } from "react-icons/fa";
import CardTable from "../../components/CardTable";
import HeaderFunction from "../../components/HeaderFunction";
import TableComponent from "../../components/TableComponents";
interface Absensi {
  no: number;
  kode_absensi: string;
  name: string;
}

const Content = () => {
  const columns: { key: keyof Absensi; label: string }[] = [
    { key: "no", label: "No" },
    { key: "kode_absensi", label: "Kode Absensi" },
    { key: "name", label: "Jabatan" },

    // Example column for "id" field
  ];

  const data: Absensi[] = [
    { no: 1, kode_absensi: "TP01", name: "Bos" },
    { no: 2, kode_absensi: "TP02", name: "Supervisor" },
    { no: 3, kode_absensi: "TP03", name: "HRD" },
    { no: 4, kode_absensi: "TP04", name: "Manajer" },
    { no: 5, kode_absensi: "TP05", name: "Karyawan" },
    { no: 6, kode_absensi: "TP06", name: "Staff" },
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
      <CardTable>
        <HeaderFunction
          btn_text="Ubah Status"
          text="Data Absensi Karyawan"
          icon={<FaCheck />}
        />
        <hr className="size-2 text-black" />
        <TableComponent columns={columns} data={data} onAdd={handleAdd} />
      </CardTable>
    </div>
  );
};

export default Content;
