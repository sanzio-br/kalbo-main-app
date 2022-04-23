import ContactsForm from "./ContactForm";
import Contactinfo from "./Contactinfo";
// import GoogleMap from "./Maps";

export default function Contactpage(){
    return(
        <section>
            {/* <GoogleMap/> */}
            <Contactinfo/>
            <ContactsForm/>
        </section>
    )
}