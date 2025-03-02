import { create } from 'zustand';

type ThemeType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const useThemeStore = create<ThemeType>()((set) => ({
  darkMode: false,
  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem('darkMode', newMode.toString());
      document.documentElement.classList.toggle('dark', newMode);
      return { darkMode: newMode };
    }),
}));
