import Navbar from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute';
import { AuthContextProvider } from './Context/AuthContext';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import './index.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
