import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Создаем и настраиваем Redux Store
const store = configureStore({
  // Указываем редьюсеры для разных частей состояния
  reducer: {
    contacts: contactsReducer, // Редьюсер для управления контактами
    filters: filtersReducer,   // Редьюсер для управления фильтрами
  },
  // Настраиваем middleware, чтобы отключить проверку сериализуемости
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Отключаем проверку сериализуемости данных
    }),
});

export default store;
