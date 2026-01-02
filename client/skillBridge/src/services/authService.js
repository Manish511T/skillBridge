import {API_BASE} from "../config/api";

export const loginUser = async (credential)=>{
    const res = await fetch(`${API_BASE}/auth/login`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credential),
    });

    if(!res.ok){
        throw new Error("Login failed");
    }

    return res.json();
};


export const registerUser = async(data)=>{
    const res = await fetch(`${API_BASE}/auth/register`,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    if(!res.ok){
        throw new Error("Registration failed");
    }

    return res.json();
};
