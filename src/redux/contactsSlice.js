import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { createSelector } from "reselect";

// Создаем слайс состояния для контактов
const contactsSlice = createSlice({
  name: "contacts", // Имя слайса
  initialState: {
    items: [],     // Список контактов
    loading: false, // Состояние загрузки
    error: null,   // Состояние ошибки
  },
  reducers: {},
  // Добавляем обработчики для асинхронных операций через extraReducers
  extraReducers: (builder) => {
    builder
      // Обработка запроса на получение контактов
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // Успешное получение контактов
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Ошибка при получении
      })
      // Обработка добавления контакта
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload); // Добавление успешного контакта
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Ошибка при добавлении
      })
      // Обработка удаления контакта
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload // Успешное удаление
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Ошибка при удалении
      });
  },
});

// Селектор для получения всех контактов
export const selectContacts = (state) => state.contacts.items;
// Селектор для получения текущего фильтра по имени
export const selectFilterName = (state) => state.filters.name;

// Селектор для получения видимых контактов, отфильтрованных по имени
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default contactsSlice.reducer;
