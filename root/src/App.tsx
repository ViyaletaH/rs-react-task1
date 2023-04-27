import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Error404 from './components/404';
import Header from './components/Header';
import Forms from './components/Forms';

function App() {
  return (
    <Routes>
      <Route index element={<Header />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="forms" element={<Forms />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
