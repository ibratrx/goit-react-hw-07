import { IoPersonCircleSharp } from "react-icons/io5"; // Импортируем иконку для представления контакта
import { FaPhoneAlt } from "react-icons/fa"; // Импортируем иконку для представления номера телефона
import styles from "./Contact.module.css"; // Импортируем стили

// Компонент для отображения информации о контакте
const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contact}> {/* Элемент списка для контакта */}
      <div className={styles.contactInfo}>
        <IoPersonCircleSharp className={styles.icon} /> {/* Иконка для имени контакта */}
        <span>{name}</span> {/* Отображение имени контакта */}
      </div>
      <div className={styles.contactInfo}>
        <FaPhoneAlt className={styles.icon} /> {/* Иконка для номера телефона */}
        <span>{number}</span> {/* Отображение номера телефона */}
      </div>
      <button className={styles.button} onClick={() => onDeleteContact(id)}> {/* Кнопка удаления контакта */}
        Delete
      </button>
    </li>
  );
};

export default Contact;
