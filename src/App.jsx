import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Survey from "./pages/Survey";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import AdminNavbar from "./components/AdminNavbar";
import HelloScreen from "./pages/HelloScreen";
import ResponseList from "./pages/ResponseList";
import QuestionDetails from "./pages/QuestionDetails";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="App">
      {user && <AdminNavbar />}
      <Routes>
        <Route
          path="/"
          element={!user ? <HelloScreen /> : <Navigate to={"/admin"} />}
        />
        <Route path="/survey" element={<Survey />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/admin"} />}
        />
        <Route
          path="/admin"
          element={user ? <Dashboard /> : <Navigate to={"/"} />}
        />
        <Route
          path="/admin/responses"
          element={user ? <ResponseList /> : <Navigate to={"/"} />}
        />
        <Route
          path="/admin/question/:id"
          element={user ? <QuestionDetails /> : <Navigate to={"/"} />}
        />
      </Routes>
    </div>
  );
};

export default App;
