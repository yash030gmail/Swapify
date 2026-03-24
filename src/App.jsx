import { Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import SignUp from "./Signup.jsx";
import TutorDashboard from "./TutorDashboard.jsx";


function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<TutorDashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;