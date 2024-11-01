import React, { useState } from "react";
interface Divisi {
  no: number;
  kode_divisi: string;
  name: string;
}

interface DivisiFormProps {
  initialData?: Divisi; // Optional prop for editing
  onSubmit: (data: Divisi) => void;
  onCancel?: () => void; // Optional cancel callback
}

const DivisiForm: React.FC<DivisiFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Divisi>(
    initialData || {
      name: "",
      kode_divisi: "",
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
      <h3>{initialData ? "Edit Divisi" : "Tambah Divisi"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nama Divisi
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
          <label htmlFor="kode_divisi" className="form-label">
            Kode Divisi
          </label>
          <input
            type="text"
            id="kode_divisi"
            name="kode_divisi"
            value={formData.kode_divisi}
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
            {initialData ? "Perbarui" : "Tambah"} Divisi
          </button>
        </div>
      </form>
    </div>
  );
};

export default DivisiForm;
