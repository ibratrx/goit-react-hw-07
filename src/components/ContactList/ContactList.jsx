import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";

// Компонент для отображения списка контактов
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts); // Получаем список видимых контактов из состояния
  const dispatch = useDispatch(); // Функция для отправки действий (actions)

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => dispatch(deleteContact(id))} // Удаление контакта при нажатии на кнопку удаления
        />
      ))}
    </ul>
  );
};

export default ContactList;
