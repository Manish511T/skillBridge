import { API_BASE } from "../config/api";

export const getPublishedCourses = async()=>{
    const res = await fetch(`${API_BASE}/courses`);

    if(!res.ok){
        throw new Error("Failed to fetch courses");
    }

    return res.json();
};