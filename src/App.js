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
        <Route exact path="/kalbo-main-app" element={<Mainpage />} />
        <Route exact path="/kalbo-main-app/About" element={<Aboutpage />} />
        <Route exact path="/kalbo-main-app/Contacts" element={<Contactpage />} />
        <Route exact path="/kalbo-main-app/Blogs" element={<Blogs />} />
        <Route exact path="/kalbo-main-app/Tours" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
