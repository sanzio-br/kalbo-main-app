import ContactsForm from "./ContactForm";
import Contactinfo from "./Contactinfo";

export default function Contactpage(){
    return(
        <section className="contacts">
            <Contactinfo/>
            <ContactsForm/>
        </section>
    )
}