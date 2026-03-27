import { useState } from "react";

const programmingSkills = [
  "Java",
  "Python",
  "JavaScript",
  "C",
  "C++",
  "React",
  "Node.js",
];

const otherSkills = [
  "Guitar",
  "Cricket",
  "Football",
  "Singing",
  "Photography",
];

const daysList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function TutorDashboard() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      skill: "Java",
      days: ["Saturday", "Sunday", "Monday"],
      startDate: "2026-07-04",
      endDate: "2026-08-30",
      startTime: "16:00",
      endTime: "19:00",
    },
    {
      id: 2,
      skill: "Python",
      days: ["Tuesday", "Wednesday", "Friday"],
      startDate: "2026-04-01",
      endDate: "2026-04-30",
      startTime: "16:00",
      endTime: "19:00",
    },
    {
      id: 3,
      skill: "JavaScript",
      days: ["Thursday"],
      startDate: "2026-04-01",
      endDate: "2026-04-15",
      startTime: "17:00",
      endTime: "19:00",
    },
    {
      id: 4,
      skill: "C",
      days: ["Thursday", "Friday", "Saturday"],
      startDate: "2026-04-01",
      endDate: "2026-04-30",
      startTime: "17:00",
      endTime: "21:00",
    },
    {
      id: 5,
      skill: "C++",
      days: ["Monday", "Tuesday", "Wednesday"],
      startDate: "2026-04-01",
      endDate: "2026-04-30",
      startTime: "15:00",
      endTime: "18:00",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState("programming");

  const [form, setForm] = useState({
    skill: "",
    days: [],
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });

  // 📅 Format date
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return `${String(d.getDate()).padStart(2, "0")}/${String(
      d.getMonth() + 1
    ).padStart(2, "0")}/${d.getFullYear()}`;
  };

  // Toggle days
  const toggleDay = (day) => {
    setForm((prev) => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day],
    }));
  };

  // ⏱ Session duration
  const getSessionDuration = (start, end) => {
    if (!start || !end) return 0;

    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);

    const diff = eh * 60 + em - (sh * 60 + sm);
    return diff > 0 ? (diff / 60).toFixed(1) : 0;
  };

  // 📅 Date count
  const getDateCount = (startDate, endDate) => {
    if (!startDate) return 0;

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : start;

    return (end - start) / (1000 * 60 * 60 * 24) + 1;
  };

  const getTotalDays = () => {
    return form.days.length > 0
      ? form.days.length
      : getDateCount(form.startDate, form.endDate);
  };

  const getTotalDuration = () => {
    return (
      getSessionDuration(form.startTime, form.endTime) *
      getTotalDays()
    ).toFixed(1);
  };

  // Add course
  const handleAdd = () => {
    if (!form.skill) return;

    setCourses([
      ...courses,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      skill: "",
      days: [],
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    });

    setShowForm(false);
  };

  const skills =
    category === "programming" ? programmingSkills : otherSkills;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        Tutor Dashboard
      </h1>

      {/* Add Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6"
      >
        + Add Course
      </button>

      {/* FORM */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-md mb-6 overflow-hidden">

          {/* Tabs */}
          <div className="flex w-full">
            <div
              onClick={() => setCategory("programming")}
              className={`w-1/2 text-center py-3 font-semibold cursor-pointer ${
                category === "programming"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Programming
            </div>

            <div
              onClick={() => setCategory("others")}
              className={`w-1/2 text-center py-3 font-semibold cursor-pointer ${
                category === "others"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Others
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-4">

            {/* Skill */}
            <select
              value={form.skill}
              onChange={(e) =>
                setForm({ ...form, skill: e.target.value })
              }
              className="w-full border p-2 rounded-lg"
            >
              <option value="">Select skill</option>
              {skills.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            {/* Days */}
            <div className="flex flex-wrap gap-2">
              {daysList.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`px-3 py-1 rounded-lg border ${
                    form.days.includes(day)
                      ? "bg-blue-600 text-white"
                      : ""
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Dates */}
            <div className="flex gap-3">
              <input
                type="date"
                value={form.startDate}
                onChange={(e) =>
                  setForm({ ...form, startDate: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="date"
                value={form.endDate}
                onChange={(e) =>
                  setForm({ ...form, endDate: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              />
            </div>

            {/* Time */}
            <div className="flex gap-3">
              <input
                type="time"
                value={form.startTime}
                onChange={(e) =>
                  setForm({ ...form, startTime: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="time"
                value={form.endTime}
                onChange={(e) =>
                  setForm({ ...form, endTime: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              />
            </div>

            {/* 🔥 SUMMARY */}
            <div className="bg-blue-50 p-3 rounded-lg text-sm space-y-1">
              <p>
                ⏱ Per Session:{" "}
                <b>{getSessionDuration(form.startTime, form.endTime)} hrs/day</b>
              </p>

              <p>
                📅 Total Days: <b>{getTotalDays()}</b>
              </p>

              <p>
                📦 Total Duration:{" "}
                <b>{getTotalDuration()} hrs</b>
              </p>
            </div>

            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>

          </div>
        </div>
      )}

      {/* COURSES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded-lg shadow">

            <h3 className="font-bold text-blue-700">
              {c.skill} Course
            </h3>

            <p className="text-xs">{c.days.join(", ")}</p>

            <p className="text-xs">
              {formatDate(c.startDate)} → {formatDate(c.endDate)}
            </p>

            <p className="text-xs">
              {c.startTime} - {c.endTime}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default TutorDashboard;