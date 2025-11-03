import './App.css'
import AppRoutes from './pages/AppRoutes'
import { Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppRoutes />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}

export default App;
