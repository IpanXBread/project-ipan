import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme');
  const [isLightMode, setIsLightMode] = useState(
    storedTheme ? JSON.parse(storedTheme) : true
  );

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isLightMode));
  }, [isLightMode]);

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
