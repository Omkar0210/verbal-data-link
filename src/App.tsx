import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PatientDashboard from "./pages/PatientDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
