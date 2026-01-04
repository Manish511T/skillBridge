import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    console.log("REGISTER DATA:", form);
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={submit} className="space-y-4">
        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <input
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Register
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600 font-medium">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
