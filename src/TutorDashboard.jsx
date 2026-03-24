import { useState } from "react";

const skillsList = ["React", "JavaScript", "Python", "UI/UX", "Node.js"];
const daysList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function TutorDashboard() {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    skill: "",
    days: [],
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });

  // Format date (DD/MM/YYYY)
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return `${String(d.getDate()).padStart(2, "0")}/${String(
      d.getMonth() + 1
    ).padStart(2, "0")}/${d.getFullYear()}`;
  };

  // Toggle weekday
  const toggleDay = (day) => {
    setForm((prev) => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day],
    }));
  };

  // Session duration
  const getSessionDuration = (start, end) => {
    if (!start || !end) return 0;
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    const diff = eh * 60 + em - (sh * 60 + sm);
    return diff > 0 ? (diff / 60).toFixed(1) : 0;
  };

  // Date count
  const getDateCount = (startDate, endDate) => {
    if (!startDate) return 0;
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date(startDate);
    return (end - start) / (1000 * 60 * 60 * 24) + 1;
  };

  const getTotalDays = () => {
    return form.days.length > 0
      ? form.days.length
      : getDateCount(form.startDate, form.endDate);
  };

  const getTotalDuration = () => {
    const session = getSessionDuration(form.startTime, form.endTime);
    return (session * getTotalDays()).toFixed(1);
  };

  // Add / Update
  const handleAdd = () => {
    if (
      !form.skill ||
      (!form.days.length && !form.startDate) ||
      !form.startTime ||
      !form.endTime
    ) {
      alert("Fill all required fields");
      return;
    }

    const updatedCourse = {
      id: editId || Date.now(),
      ...form,
      sessionDuration: getSessionDuration(form.startTime, form.endTime),
      totalDays: getTotalDays(),
      totalDuration: getTotalDuration(),
    };

    if (editId) {
      setCourses(
        courses.map((c) => (c.id === editId ? updatedCourse : c))
      );
    } else {
      setCourses([...courses, updatedCourse]);
    }

    setForm({
      skill: "",
      days: [],
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    });

    setEditId(null);
    setShowForm(false);
  };

  // Delete
  const handleDelete = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  // Edit
  const handleEdit = (course) => {
    setForm({
      skill: course.skill,
      days: course.days,
      startDate: course.startDate,
      endDate: course.endDate,
      startTime: course.startTime,
      endTime: course.endTime,
    });

    setEditId(course.id);
    setShowForm(true);
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Swapify</h1>
          <button className="border px-4 py-1 rounded-md text-blue-600 hover:bg-blue-50">
            Log Out
          </button>
      </div>

      <div className="min-h-screen bg-gray-100 p-6">

      {/* Add Button */}
      <button
        onClick={() => {
          setShowForm(!showForm);
          setEditId(null);
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-700"
      >
        + Add Course
      </button>

      {/* FORM */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-md mb-6 space-y-4">

          {/* Skill FULL WIDTH */}
          <div>
            <label className="text-sm font-semibold">Skill</label>
            <select
              value={form.skill}
              onChange={(e) =>
                setForm({ ...form, skill: e.target.value })
              }
              className="w-full border p-2 rounded-lg mt-1 text-sm focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select skill</option>
              {skillsList.map((skill) => (
                <option key={skill}>{skill}</option>
              ))}
            </select>
          </div>

          {/* Days */}
          <div>
            <label className="text-sm font-semibold">Weekdays</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {daysList.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`px-3 py-1 rounded-lg border text-sm ${
                    form.days.includes(day)
                      ? "bg-blue-600 text-white"
                      : "bg-white"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div>
            <label className="text-sm font-semibold">Date Range</label>
            <div className="flex gap-3 mt-2">
              <input
                type="date"
                value={form.startDate}
                onChange={(e) =>
                  setForm({ ...form, startDate: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="date"
                value={form.endDate}
                onChange={(e) =>
                  setForm({ ...form, endDate: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Time */}
          <div className="flex gap-3">
            <input
              type="time"
              value={form.startTime}
              onChange={(e) =>
                setForm({ ...form, startTime: e.target.value })
              }
              className="w-full border p-2 rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="time"
              value={form.endTime}
              onChange={(e) =>
                setForm({ ...form, endTime: e.target.value })
              }
              className="w-full border p-2 rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Summary */}
          <div className="bg-blue-50 p-3 rounded-lg text-sm space-y-1">
            <p>⏱ Per Session: <b>{getSessionDuration(form.startTime, form.endTime)} hrs</b></p>
            <p>📅 Total Days: <b>{getTotalDays()}</b></p>
            <p>📦 Total Duration: <b>{getTotalDuration()} hrs</b></p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
            >
              {editId ? "Update Course" : "Save"}
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="border px-4 py-2 rounded-lg text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* COURSE GRID */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="font-semibold mb-4">Your Courses</h2>

        {courses.length === 0 ? (
          <p className="text-gray-500 text-sm">No courses yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-bold text-blue-700 mb-1">
                  {course.skill}
                </h3>

                {course.days.length > 0 && (
                  <p className="text-xs text-gray-600">
                    {course.days.join(", ")}
                  </p>
                )}

                {course.startDate && (
                  <p className="text-xs text-gray-600">
                    {formatDate(course.startDate)} →{" "}
                    {formatDate(course.endDate || course.startDate)}
                  </p>
                )}

                <p className="text-xs text-gray-600">
                  {course.startTime} - {course.endTime}
                </p>

                <p className="text-xs text-blue-600">
                  {course.sessionDuration} hrs/session
                </p>

                <p className="text-xs font-semibold text-blue-700">
                  {course.totalDuration} hrs total
                </p>

                {/* Actions */}
                <div className="flex justify-between mt-3 text-sm">
                  <button
                    onClick={() => handleEdit(course)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(course.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default TutorDashboard;