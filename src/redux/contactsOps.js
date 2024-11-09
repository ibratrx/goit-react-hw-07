import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// URL для API, с которым будем работать
const API_URL = "https://66d2f480184dce1713cede81.mockapi.io/contacts";

// Операция для получения всех контактов
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts", // Имя действия (action)
  async () => {
    const response = await axios.get(API_URL); // Отправка GET-запроса к API
    return response.data; // Возвращаем данные контактов
  }
);

// Операция для добавления нового контакта
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const response = await axios.post(API_URL, contact); // Отправка POST-запроса с данными контакта
    return response.data; // Возвращаем добавленный контакт
  }
);

// Операция для удаления контакта
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`); // Отправка DELETE-запроса по ID контакта
    return id; // Возвращаем ID удаленного контакта
  }
);
