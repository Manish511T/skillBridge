import { updateCourse } from "../services/courseService";

const InstructorCourseCard = ({ course, onUpdated }) => {
  const togglePublish = async () => {
    await updateCourse(course._id, {
      isPublished: !course.isPublished,
    });
    onUpdated();
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, marginBottom: 12 }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>

      <p>
        Status:{" "}
        <strong>
          {course.isPublished ? "Published" : "Draft"}
        </strong>
      </p>

      <button onClick={togglePublish}>
        {course.isPublished ? "Unpublish" : "Publish"}
      </button>
    </div>
  );
};

export default InstructorCourseCard;
