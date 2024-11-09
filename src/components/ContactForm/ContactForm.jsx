import { Formik, Form, Field, ErrorMessage } from "formik"; // Импортируем необходимые компоненты из Formik
import * as Yup from "yup"; // Импортируем Yup для валидации
import { nanoid } from "nanoid"; // Импортируем nanoid для генерации уникальных идентификаторов
import { useDispatch } from "react-redux"; // Импортируем useDispatch для отправки действий в Redux
import { addContact } from "../../redux/contactsOps"; // Импортируем операцию добавления контакта
import styles from "./ContactForm.module.css"; // Импортируем стили

// Компонент формы для добавления нового контакта
const ContactForm = () => {
  const dispatch = useDispatch(); // Получаем функцию для отправки действий

  const initialValues = { name: "", number: "" }; // Начальные значения для формы

  // Схема валидации с использованием Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!") // Минимальная длина имени
      .max(50, "Must be 50 characters or less") // Максимальная длина имени
      .required("Required"), // Обязательное поле
    number: Yup.string().required("Required"), // Обязательное поле для номера
  });

  // Обработчик отправки формы
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ id: nanoid(), ...values })); // Добавляем новый контакт с уникальным ID
    resetForm(); // Сбрасываем форму после успешной отправки
  };

  return (
    <Formik
      initialValues={initialValues} // Передаем начальные значения формы
      validationSchema={validationSchema} // Передаем схему валидации
      onSubmit={handleSubmit} // Указываем обработчик отправки
    >
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <ErrorMessage name="name" component="div" /> {/* Отображение сообщения об ошибке для имени */}
        <Field id="name" name="name" /> {/* Поле ввода для имени */}

        <label htmlFor="number">Number</label>
        <ErrorMessage name="number" component="div" /> {/* Отображение сообщения об ошибке для номера */}
        <Field id="number" name="number" className={styles.lastField} /> {/* Поле ввода для номера */}

        <button type="submit">Add Contact</button> {/* Кнопка для отправки формы */}
      </Form>
    </Formik>
  );
};

export default ContactForm;
