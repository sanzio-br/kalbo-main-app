import Aboutpage from "./components/About/Aboutpage";
import Contactpage from "./components/Contacts/Contactpage";
import Mainpage from "./components/Mainpage/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Blogs from "./components/Blogs/Blogspage";
import Events from "./components/events/EventsPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
function App() {
  AOS.init();
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/Contacts" element={<Contactpage />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Tours" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
