import { createSlice } from "@reduxjs/toolkit";

// Создаем слайс состояния для фильтров
const filtersSlice = createSlice({
  name: "filters", // Имя слайса
  initialState: { name: "" }, // Начальное состояние, с фильтром по имени
  reducers: {
    // Редьюсер для изменения фильтра по имени
    changeFilter: (state, action) => {
      state.name = action.payload; // Устанавливаем новое значение из action.payload
    },
  },
});

// Экспортируем action для изменения фильтра
export const { changeFilter } = filtersSlice.actions;

// Селектор для получения значения фильтра по имени из состояния
export const selectNameFilter = (state) => state.filters.name;

// Экспортируем редьюсер слайса по умолчанию
export default filtersSlice.reducer;
