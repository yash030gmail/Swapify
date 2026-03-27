import CoursePage from "../components/CoursePage";


function Programming() {

  const courses = [
    {
      title: "Java Course",
      days: "Saturday, Sunday, Monday",
      date: "04/07/2026 → 30/08/2026",
      time: "16:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "Free",
      Tutor : "----------------",
    },
    {
      title: "Python Course",
      days: "Tuesday, Wednesday, Friday",
      date: "01/04/2026 → 30/04/2026",
      time: "16:00 - 19:00",
      duration: "3.0 hrs/session",
      cost : "Free",
      Tutor : "----------------",
    },
    {
      title: "C Programming",
      days: "Thrusday , Friday , Saturday",
      date: "01/04/2026 → 30/04/2026",
      time: "17:00 - 21:00",
      duration: "3.0 hrs/session",
      cost : "Free",
      Tutor : "----------------",
    },
    {
      title: "C++ Programming",
      days: "Monday , Tuesday , Wednesday",
      date: "04/07/2026 → 30/08/2026",
      time: "15:00 - 18:00",
      duration: "3.0 hrs/session",
      cost : "Free",
      Tutor : "----------------",
    },
    {
      title: "JavaScript Course",
      days: "Thursday",
      date: "01/04/2026 → 15/04/2026",
      time: "17:00 - 19:00",
      duration: "2.0 hrs/session",
      cost : "Free",
      Tutor : "----------------",
    },
  ];

      return <CoursePage title="Programming Languages" courses={courses} />;

}

export default Programming;