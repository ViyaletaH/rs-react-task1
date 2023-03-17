import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Error404 from './components/404';
import Header from './components/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route element={<Error404 />} />
    </Routes>
  );
}

export default App;
