import { useEffect, useState } from "react";
import { getPublishedCourses } from "../services/courseService";
import CourseCard from "../components/CourseCard";

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await getPublishedCourses();
        setCourses(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) return <p>Loading courses...</p>;

  return (
    <div>
      <h2>Available Courses</h2>

      {courses.length === 0 && <p>No courses available</p>}

      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default StudentDashboard;
