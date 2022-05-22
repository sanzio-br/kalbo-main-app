import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { lazy, Suspense } from "react";
import Loader from "./components/loader";
const Navbar =lazy(()=>import("./components/Navbar"));
const Mainpage = lazy(()=> import("./components/Mainpage/Mainpage"));
const Aboutpage =lazy(()=>import("./components/About/Aboutpage"));
const Events =lazy(()=>import("./components/events/EventsPage"));
const Blogs =lazy(()=>import("./components/Blogs/Blogspage"));
const Contactpage =lazy(()=>import("./components/Contacts/Contactpage"));
const Footer =lazy(()=>import("./components/footer"));
function App() {
  AOS.init();
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Navbar/>
      <Routes>
        <Route exact path="/kalbo-main-app" element={<Mainpage />} />
        <Route exact path="/kalbo-main-app/About" element={<Aboutpage />} />
        <Route exact path="/kalbo-main-app/Contacts" element={<Contactpage />} />
        <Route exact path="/kalbo-main-app/Blogs" element={<Blogs />} />
        <Route exact path="/kalbo-main-app/Tours" element={<Events />} />
      </Routes>
      <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
