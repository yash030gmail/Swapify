import CoursePage from "../components/CoursePage";

function Framework() {

  const courses = [
    {
      title: "React",
      days: "Saturday, Sunday, Monday",
      date: "01/07/2026 → 30/07/2026",
      time: "16:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "Free of Cost", 
      Tutor : "----------------",
    },
    {
      title: "Angular",
      days: "Tuesday, Wednesday, Friday",
      date: "01/04/2026 → 30/04/2026",
      time: "16:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "Free of Cost", 
      Tutor : "----------------",
    },
    {
      title: "Vue.js",
      days: "Thursday",
      date: "01/04/2026 → 15/04/2026",
      time: "17:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "Free of Cost", 
      Tutor : "----------------",
    },
    {
      title: "Spring Boot",
      days: "Thursday, Friday, Saturday",
      date: "01/04/2026 → 15/04/2026",
      time: "17:00 - 21:00",
      duration: "3 hrs/session",
      cost : "Free of Cost", 
      Tutor : "----------------",
    },
    {
      title: "Django",
      days: "Monday, Tuesday, Wednesday",
      date: "01/04/2026 → 30/04/2026",
      time: "15:00 - 18:00",
      duration: "2.5 hrs/session",
      cost : "Free of Cost", 
      Tutor : "----------------",
    },
  ];

    return <CoursePage title="FrameWork" courses={courses} />;

}

export default Framework;