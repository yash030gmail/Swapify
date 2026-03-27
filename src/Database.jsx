import CoursePage from "../components/CoursePage";

function Database() {

  const courses = [
    {
      title: "SQL (Structured Query Language)",
      days: "Saturday, Sunday, Monday",
      date: "01/07/2026 → 30/07/2026",
      time: "16:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "free",
      Tutor : "-----------------",
    },
    {
      title: "PL/SQL",
      days: "Tuesday, Wednesday, Friday",
      date: "01/04/2026 → 15/04/2026",
      time: "16:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "free",
      Tutor : "-----------------",
    },
    {
      title: "T-SQL",
      days: "Thursday",
      date: "01/04/2026 → 15/04/2026",
      time: "17:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "free",
      Tutor : "-----------------",
    },
    {
      title: "NoSQL Query Languages (MongoDB)",
      days: "Thursday, Friday, Saturday",
      date: "01/04/2026 → 15/04/2026",
      time: "17:00 - 21:00",
      duration: "3 hrs/session",
      cost : "free",
      Tutor : "-----------------",
    },
    {
      title: "Graph Query Language",
      days: "Monday, Tuesday, Wednesday",
      date: "01/04/2026 → 30/04/2026",
      time: "15:00 - 18:00",
      duration: "2.5 hrs/session",
      cost : "free",
      Tutor : "-----------------",
    },
  ];

    return <CoursePage title="Database Languages" courses={courses} />;

}

export default Database;