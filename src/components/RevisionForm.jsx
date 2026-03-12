import { useState } from "react";

export default function RevisionForm({ onSubmit }) {
  const [form, setForm] = useState({ alumnoId: "", materia: "", nota: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ alumnoId: "", materia: "", nota: "" });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <input
          name="alumnoId"
          placeholder="Alumno ID"
          value={form.alumnoId}
          onChange={handleChange}
        />
        {errors.alumnoId && (
          <small style={{ color: "red" }}>{errors.alumnoId}</small>
        )}
      </div>
      <div>
        <input
          name="materia"
          placeholder="Materia"
          value={form.materia}
          onChange={handleChange}
        />
        {errors.materia && (
          <small style={{ color: "red" }}>{errors.materia}</small>
        )}
      </div>
      <div>
        <input
          name="nota"
          placeholder="Nota"
          value={form.nota}
          onChange={handleChange}
        />
        {errors.nota && <small style={{ color: "red" }}>{errors.nota}</small>}
      </div>
      <button type="submit">Solicitar revisión</button>
    </form>
  );
}
