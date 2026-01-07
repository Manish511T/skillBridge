const CourseCard = ({ course }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, marginBottom: 12 }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <small>Instructor: {course.instructor?.name}</small>
    </div>
  );
};

export default CourseCard;
