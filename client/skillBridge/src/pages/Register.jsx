import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submit}
        className="bg-white p-6 rounded-xl shadow w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3">
            {error}
          </p>
        )}

        <input
          name="name"
          placeholder="Full Name"
          className="w-full mb-3 p-2 border rounded"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          className="w-full mb-3 p-2 border rounded"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          className="w-full mb-3 p-2 border rounded"
          value={form.password}
          onChange={handleChange}
          required
        />

        {/* Role Selection */}
        <select
          name="role"
          className="w-full mb-4 p-2 border rounded"
          value={form.role}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>

        <button
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
