
import About from "./About";
import Bookpage from "./Bookpage";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Hottours from "./Hottours";
import Services from "./Services";
import Team from "./Team";

export default function Mainpage() {
    return (
        <div className="page">
            <Hero />
            <About />
            <Services />
            <Hottours />
            <Team/>
            <Bookpage/>
            <Gallery />
        </div>
    )
}