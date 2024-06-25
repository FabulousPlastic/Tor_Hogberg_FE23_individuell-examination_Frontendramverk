import { createSlice } from '@reduxjs/toolkit';

// Funktion för att läsa temat från localStorage
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : 'light';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.value); // Spara det nya temat till localStorage
    },
    setTheme: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('theme', state.value); // Spara temat till localStorage
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;