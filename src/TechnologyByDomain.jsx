import CoursePage from "../components/CoursePage";

function Domain() {

  const courses = [
    {
      title: "Web Development",
      days: "Saturday, Sunday, Monday",
      date: "01/07/2026 → 30/09/2026",
      time: "16:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "free",
      Tutor : "----------------",
    },
    {
      title: "Mobile App Development",
      days: "Tuesday, Wednesday, Friday",
      date: "01/04/2026 → 30/04/2026",
      time: "16:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "free",
      Tutor : "----------------",
    },
    {
      title: "Game Development",
      days: "Thursday",
      date: "01/04/2026 → 15/04/2026",
      time: "17:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "free",
      Tutor : "----------------",
    },
    {
      title: "Database & Big Data",
      days: "Thursday, Friday, Saturday",
      date: "01/04/2026 → 30/04/2026",
      time: "17:00 - 21:00",
      duration: "3 hrs/session",
      cost : "free",
      Tutor : "----------------",
    },
    {
      title: "Internet of Things",
      days: "Monday, Tuesday, Wednesday",
      date: "01/04/2026 → 30/04/2026",
      time: "15:00 - 18:00",
      duration: "2.5 hrs/session",
      cost : "free",
      Tutor : "----------------",
    },
  ];

        return <CoursePage title="Programming Languages" courses={courses} />;

}

export default Domain;