import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
// for creating a  conetxt object of name theme context

export const ThemeProvider = ({ children }) => {
  // children =  is a special prop which is used to pass data to the component
  const [theme, setTheme] = useState(() => {
    // Load theme from local storage or default to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  // window is global object , represents the browser
  // matchMedia is a method which is used to check the media query

  useEffect(() => {
    // Update theme in local storage and apply to document
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    // Document represent html page, document element is the root element of the page, genereally represnt the top tier element like html tag
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    };
    mediaQuery.addEventListener('change', handleChange);
    // Add event listener to listen for changes in the media query
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Provider component which is heart of context used to give data to children*/}
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
// Made a custom hook to use the context easily
// This allows us to use useTheme() instead of useContext(ThemeContext) every time