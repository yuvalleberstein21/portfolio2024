import { useContext } from "react";
import ThemeContext from '../ThemeContext';


const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
            </label>
        </div>
    );
};

export default ThemeToggleButton;