
import { Container } from "react-bootstrap";
import About from "./Aboutus";
import Breadcrumbs from "./Breadcrumbs";
import Choice from "./Choose";
import Team from "./Team";

export default function Aboutpage() {
    return (
        <div style={{'text-align':'center'}}>
            <Breadcrumbs />
            <div style={{'background-color':'var(--gray)'}} className="mb-5">
            <Container>
                <About />
                <Choice />
                <Team />
            </Container>
            </div>
        </div>
    )
}