import './App.css';
import Reg from './components/Reg';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import AdminServices from './components/AdminServices';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/reg" element={<Reg />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path='/admin-services' element={<AdminServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
