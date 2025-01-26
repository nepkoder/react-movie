import React from 'react';

export const ThemeContext = React.createContext();
export const ThemeProvider = (props) => {
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};