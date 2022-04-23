import Eventcard from "../Eventcard";
import About from "./About";
import Bookpage from "./Bookpage";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Hottours from "./Hottours";
import Services from "./Services";
// import Tours from "./Tours";

export default function Mainpage() {
    return (
        <div className="page">
            <Hero />
            <About />
            <Services />
            <Hottours />
            <Bookpage/>
            <Gallery />
        </div>
    )
}