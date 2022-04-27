import ContactsForm from "./ContactForm";
import Contactinfo from "./Contactinfo";
// import GoogleMap from "./Maps";

export default function Contactpage(){
    return(
        <section className="contacts">
            {/* <GoogleMap/> */}
            <Contactinfo/>
            <ContactsForm/>
        </section>
    )
}