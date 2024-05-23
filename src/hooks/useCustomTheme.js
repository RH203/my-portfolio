import { useEffect, useState } from 'react';

export default function useCustomTheme() {
  const [theme, setTheme] = useState(localStorage.theme || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return [theme, toggleTheme];
}
