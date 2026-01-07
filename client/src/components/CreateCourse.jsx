import { useState } from "react";
import { createCourse } from "../services/courseService";

const CreateCourse = ({ onCreated }) => {
  const [form, setForm] = useState({ title: "", description: "" });

  const submit = async (e) => {
    e.preventDefault();
    await createCourse(form);
    setForm({ title: "", description: "" });
    onCreated();
  };

  return (
    <form onSubmit={submit}>
      <h3>Create Course</h3>

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateCourse;
