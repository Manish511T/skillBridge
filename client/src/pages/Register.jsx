import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log("REGISTER DATA:", form);
    };

    return (
        <AuthLayout title="Register">
            <form onSubmit={submit} className="space-y-4">
                <input
                    placeholder="Name"
                    className="w-full border p-2 rounded"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
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
