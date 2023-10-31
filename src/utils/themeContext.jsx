import { createContext, useState, useContext } from 'react'
import { themes } from './constants'

export const ThemeContext = createContext(themes.good)


export const ThemeProvider = ({ children}) => {
    const [theme, setTheme] = useState(themes.good)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)