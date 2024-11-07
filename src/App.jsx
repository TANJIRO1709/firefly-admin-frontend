import "./App.css";
import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import AdminHome from "./pages/AdminHome";
import EditorPage from "./pages/EditorPage";
import AdminState from "./contexts/AdminState";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };
  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <Router>
      <AdminState showAlert={showAlert}>
        <Alert alert={alert} closeAlert={closeAlert} />
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="signup" element={<AdminSignup />} />
          <Route path="editor" element={<EditorPage />} />
        </Routes>
      </AdminState>
    </Router>
  );
}

export default App;
