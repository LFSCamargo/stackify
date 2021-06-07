import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { Global } from './global';
import { Dark, Light } from './colors';

const themeContext = createContext<{
  switchTheme(): void;
  isDark: boolean;
}>({
  switchTheme: () => {},
  isDark: false,
});

export const ThemeContextProvider: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const switchTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const theme = useMemo(
    () => ({
      colors: isDark ? Dark : Light,
    }),
    [isDark],
  );

  return (
    <themeContext.Provider
      value={{
        isDark,
        switchTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <>
          <Global />
          {children}
        </>
      </ThemeProvider>
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(themeContext);
};
