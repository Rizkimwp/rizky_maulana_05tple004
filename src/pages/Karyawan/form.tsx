import React, { useState } from "react";

interface Karyawan {
  id?: string;
  name: string;
  position: string;
  dateOfJoining: string;
  status: string;
  email: string;
  no_hp: string;
  alamat: string;
  jabatan: string;
  divisi: string;
}

interface KaryawanFormProps {
  initialData?: Karyawan; // Optional prop for editing
  onSubmit: (data: Karyawan) => void;
  onCancel?: () => void; // Optional cancel callback
}

const KaryawanForm: React.FC<KaryawanFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Karyawan>(
    initialData || {
      name: "",
      position: "",
      dateOfJoining: "",
      status: "",
      email: "",
      no_hp: "",
      alamat: "",
      divisi: "",
      jabatan: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="card p-4">
      <h3>{initialData ? "Edit Karyawan" : "Tambah Karyawan"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Jenis Kelamin
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="LK">Laki Laki</option>
            <option value="PR">Perempuan</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="no_hp" className="form-label">
            No Hp
          </label>
          <input
            type="text"
            id="no_hp"
            name="no_hp"
            value={formData.no_hp}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="alamat" className="form-label">
            Alamat
          </label>
          <textarea
            onChange={() => handleChange}
            id="alamat"
            name="alamat"
            value={formData.alamat}
            className="form-control text-field"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="jabatan" className="form-label">
            Pilih Jabatan
          </label>
          <select
            id="jabatan"
            name="jabatan"
            value={formData.jabatan}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Pilih Jabatan</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="divisi" className="form-label">
            Pilih Divisi
          </label>
          <select
            id="divisi"
            name="divisi"
            value={formData.divisi}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Pilih Divisi</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {initialData ? "Perbarui" : "Tambah"} Karyawan
          </button>
        </div>
      </form>
    </div>
  );
};

export default KaryawanForm;
