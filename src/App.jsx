import { Routes, Route } from "react-router-dom";
import { CensusProvider } from "./context/CensusContext";
import Dashboard from "./pages/Dashboard";
import Households from "./pages/Households";
import Individuals from "./pages/Individuals";
import Enumerators from "./pages/Enumerators";
import Reports from "./pages/Report";
import Analytics from "./pages/Analytic";
import Settings from "./pages/Setting";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Layout from "./component/Layout";

function App() {
  return (
    <CensusProvider>
          <div className="flex-1 bg-gray-50 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/layout" element={<Layout/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/households" element={<Households />} />
              <Route path="/individuals" element={<Individuals />} />
              <Route path="/enumerators" element={<Enumerators />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
    </CensusProvider>
  );
}

export default App;