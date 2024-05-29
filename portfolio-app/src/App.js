import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Theme from './pages/Theme';
import Theory from "./pages/Theory";
import Art from './pages/Art';
import Design from './pages/Design';
import NoPage from './pages/NoPage';
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
        <HashRouter>
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/theme" element={<Theme />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/art" element={<Art />} />
            <Route path="/design" element={<Design />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </HashRouter>
    </div>
  )
}

