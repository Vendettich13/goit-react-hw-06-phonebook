import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { ContactItem } from "components/ContactItem/ContactItem"
import css from "../ContactList/ContactList.module.css"

export const ContactList = () => {
    const contacts = useSelector(getContacts)
    return <ul className={css.list}>
        {contacts.map(contact => {
            return <li key={contact.id}><ContactItem contact={contact} /></li>
        })}
        
    </ul>
}

