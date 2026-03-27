import CoursePage from "../components/CoursePage";

function Cybersecurity() {

  const courses = [
    {
      title: "Introduction to ChatGPT for Cybersecurity",
      days: "Saturday, Sunday, Monday",
      date: "01/07/2026 → 30/07/2026",
      time: "16:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "free",
      Tutor : "------------------",
    },
    {
      title: "Cybersecurity in Finance",
      days: "Tuesday, Wednesday, Friday",
      date: "01/04/2026 → 30/04/2026",
      time: "16:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "free",
      Tutor : "------------------",
    },
    {
      title: "Cybersecurity in Healthcare",
      days: "Thursday",
      date: "01/04/2026 → 15/04/2026",
      time: "17:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "free",
      Tutor : "------------------",
    },
  ];

  return <CoursePage title="Cybersecurity" courses={courses} />;
}

export default Cybersecurity;