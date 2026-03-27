import { useNavigate } from "react-router-dom";

function CoursePage({ title, courses }) {
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <div className="grid gap-4">
        {courses.map((course, index) => (
          <div key={index} className="p-4 border rounded-lg shadow">
            <h2 className="font-semibold">{course.title}</h2>
            <p>Days: {course.days}</p>
            <p>{course.date}</p>
            <p>{course.time}</p>
            <p>{course.duration}</p>
            <p>Free of Cost</p>
            <p>Session conducted by __________________________</p>

            <button
              onClick={() =>
                navigate("/enroll", { state: course })
              }
              className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePage;