import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import QuizPage from "./pages/QuizPage";
import { LoginPage, RegisterPage } from "./pages/Authentication";
import DiscoveryPage from "./pages/DiscoveryPage";
import QuizDetailPage from "./pages/QuizDetails";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/discovery" element={<DiscoveryPage />} />
        <Route path="/quiz/:id" element={<QuizDetailPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
