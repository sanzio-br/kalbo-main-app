import Aboutpage from "./components/About/Aboutpage";
import Contactpage from "./components/Contacts/Contactpage";
import Mainpage from "./components/Mainpage/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Nav from "./components/Navbar";
import { useMediaQuery } from 'react-responsive'
import Hambuger from "./components/Hambuger";
import Blogs from "./components/Blogs/Blogspage";
import Events from "./components/events/EventsPage";
import Topbar from "./components/Topbar";
function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
  return (
    <Router>
      {
        isMobile ? (
          <Hambuger />
        ) :
          (
            <>
              <Topbar />
              <Nav />
            </>
          )
      }
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/Contacts" element={<Contactpage />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
