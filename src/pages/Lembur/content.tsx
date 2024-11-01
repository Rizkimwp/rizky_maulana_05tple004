import { FaCheck } from "react-icons/fa";
import CardTable from "../../components/CardTable";
import HeaderFunction from "../../components/HeaderFunction";
import TableComponent from "../../components/TableComponents";
interface Lembur {
  no: number;
  nama: string;
  tanggal: string;
  jam_awal: string;
  jam_akhir: string;
  keterangan: string;
  status: string;
}

const Content = () => {
  const columns: { key: keyof Lembur; label: string }[] = [
    { key: "no", label: "No" },
    { key: "nama", label: "Nama" },
    { key: "tanggal", label: "Tanggal" },
    { key: "jam_awal", label: "Jam Awal" },
    { key: "jam_akhir", label: "Jam Akhir" },
    { key: "keterangan", label: "Ketarangan" },
    { key: "status", label: "Status" },

    // Example column for "id" field
  ];

  const data: Lembur[] = [
    {
      no: 1,
      jam_awal: "09:00",
      jam_akhir: "10:00",
      keterangan: "Demam",
      nama: "Rizky Maulana",
      status: "Diterima",
      tanggal: "2023-11-01",
    },
    {
      no: 2,
      jam_awal: "09:00",
      jam_akhir: "10:00",
      keterangan: "Cuti tahunan",
      nama: "Ahmad Fauzi",
      status: "Diterima",
      tanggal: "2023-11-02",
    },
    {
      no: 3,
      jam_awal: "09:00",
      jam_akhir: "10:00",
      keterangan: "Urusan keluarga",
      nama: "Nurul Aini",
      status: "Menunggu",
      tanggal: "2023-11-03",
    },
    {
      no: 4,

      jam_awal: "09:00",
      jam_akhir: "10:00",
      keterangan: "Migrain",
      nama: "Budi Santoso",
      status: "Diterima",
      tanggal: "2023-11-04",
    },
    {
      no: 5,
      jam_awal: "09:00",
      jam_akhir: "10:00",
      keterangan: "Keperluan mendesak",
      nama: "Siti Rahmawati",
      status: "Ditolak",
      tanggal: "2023-11-05",
    },
    {
      no: 6,
      jam_awal: "09:00",
      jam_akhir: "10:00",
      keterangan: "Cuti bersama",
      nama: "Hendra Wijaya",
      status: "Diterima",
      tanggal: "2023-11-06",
    },
    {
      no: 7,
      jam_awal: "09:00",
      jam_akhir: "10:00",
      keterangan: "Flu berat",
      nama: "Sri Lestari",
      status: "Menunggu",
      tanggal: "2023-11-07",
    },
    {
      no: 8,
      jam_awal: "09:00",
      jam_akhir: "10:00",
      keterangan: "Pernikahan keluarga",
      nama: "Anita Putri",
      status: "Diterima",
      tanggal: "2023-11-08",
    },
    {
      no: 9,

      jam_awal: "09:00",
      jam_akhir: "10:00",
      keterangan: "Cedera olahraga",
      nama: "Tono Sudrajat",
      status: "Ditolak",
      tanggal: "2023-11-09",
    },
    {
      no: 10,
      jam_awal: "09:00",
      jam_akhir: "10:00",
      keterangan: "Liburan keluarga",
      nama: "Linda Kusuma",
      status: "Diterima",
      tanggal: "2023-11-10",
    },

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
          text="Data Lembur Karyawan"
          icon={<FaCheck />}
        />
        <hr className="size-2 text-black" />
        <TableComponent columns={columns} data={data} onAdd={handleAdd} />
      </CardTable>
    </div>
  );
};

export default Content;
