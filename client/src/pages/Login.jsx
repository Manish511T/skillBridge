import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import { loginUser } from "../services/authService";


const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        setError("");

        if (!form.email || !form.password) {
            setError("Email and password are required");
            return;
        }

        try{
            const response = await loginUser(form);
            console.log("LOGIN SUCCESS:", response);
        }catch(error){
            setError(error.message);
        }
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={submit} className="space-y-4">
                {error && (
                    <p className="text-red-600 text-sm text-center">
                        {error}
                    </p>
                )}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                    value={form.email}
                    onChange={
                        (e) => setForm({ ...form, email: e.target.value })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded"
                    value={form.password}
                    onChange={
                        (e) => setForm({ ...form, password: e.target.value })
                    }
                />

                <button className="w-full bg-indigo-600 text-white py-2 rounded">
                    Login
                </button>
            </form>
            <p className="text-sm text-center mt-4">
                Don't have an account?{" "}
                <Link to="/register" className="text-indigo-600 font-medium">
                    Register
                </Link>
            </p>

        </AuthLayout>
    );
};

export default Login;
