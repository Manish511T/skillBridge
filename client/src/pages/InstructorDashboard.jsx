import { useEffect, useState } from "react";
import { getMyCourses } from "../services/courseService";
import CreateCourse from "../components/CreateCourse";
import InstructorCourseCard from "../components/InstructorCourseCard";

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCourses = async () => {
    try {
      const data = await getMyCourses();
      setCourses(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div>
      <h2>Instructor Dashboard</h2>

      <CreateCourse onCreated={loadCourses} />

      <hr />

      {loading && <p>Loading courses...</p>}

      {!loading && courses.length === 0 && (
        <p>No courses created yet</p>
      )}

      {courses.map((course) => (
        <InstructorCourseCard
          key={course._id}
          course={course}
          onUpdated={loadCourses}
        />
      ))}
    </div>
  );
};

export default InstructorDashboard;
