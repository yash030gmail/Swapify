import { useLocation, useNavigate } from "react-router-dom";

function Enroll() {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state;

  if (!course) {
    return <p>No course selected</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment Successful 🎉");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center mt-10">

      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Swapify
      </h1>

      <div className="bg-white w-96 p-6 rounded-xl shadow-md">

        <h2 className="text-xl font-bold mb-3">
          Enrollment Form
        </h2>

        {/* Course Details */}
        <div className="mb-4 text-sm">
          <p><b>Course:</b> {course.title}</p>
          <p><b>Days:</b> {course.days}</p>
          <p><b>Date:</b> {course.date}</p>
          <p><b>Time:</b> {course.time}</p>
          <p><b>Duration:</b> {course.duration}</p>
          <p><b>Cost:</b> {course.cost}</p>
          <p><b>Session Conducted by:</b> {course.Tutor}</p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="p-2 border rounded"
          />

          <button className="bg-blue-600 text-white py-2 rounded">
            Confirm Enrollment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Enroll;