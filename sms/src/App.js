import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./BaseFiles/Layout";
import AdminDashboard from "./DashBoard/AdminDashboard/AdminDashboard";
import NotFound from "../src/pages/NotFound";
import AdminLogin from "../src/pages/AdminLogin";
import ForgotPassword from "../src/pages/ForgotPassword";
import ResetPassword from "../src/pages/ResetPassword";
import AddStudent from '../src/Component/student/AddStudent'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <AdminDashboard />
            </Layout>
          }
        />
        <Route path="/" element={<AdminLogin />} />
        <Route path="/add-student" element={  <Layout>
              <AddStudent />
            </Layout>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
