import React, { useState } from "react";
interface Jabatan {
  no: number;
  kode_jabatan: string;
  name: string;
}

interface JabatanFormProps {
  initialData?: Jabatan; // Optional prop for editing
  onSubmit: (data: Jabatan) => void;
  onCancel?: () => void; // Optional cancel callback
}

const JabatanForm: React.FC<JabatanFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Jabatan>(
    initialData || {
      kode_jabatan: "",
      name: "",
      no: 0,
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
      <h3>{initialData ? "Edit Jabatan" : "Tambah Jabatan"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nama Jabatan
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
          <label htmlFor="kode_jabatan" className="form-label">
            Kode Jabatan
          </label>
          <input
            type="text"
            id="kode_jabatan"
            name="kode_jabatan"
            value={formData.kode_jabatan}
            onChange={handleChange}
            className="form-control"
            required
          />
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
            {initialData ? "Perbarui" : "Tambah"} Jabatan
          </button>
        </div>
      </form>
    </div>
  );
};

export default JabatanForm;
