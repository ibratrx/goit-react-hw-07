import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilterName } from "../../redux/contactsSlice";
import styles from "./SearchBox.module.css";

// Компонент для поиска контактов по имени
const SearchBox = () => {
  const dispatch = useDispatch(); // Получаем функцию для отправки действий (actions)
  const filter = useSelector(selectFilterName); // Получаем текущее значение фильтра из состояния

  // Обработчик изменения ввода
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); // Отправляем новое значение фильтра в Redux
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={handleChange} // Обновляем состояние фильтра при изменении ввода
      />
    </div>
  );
};

export default SearchBox;
