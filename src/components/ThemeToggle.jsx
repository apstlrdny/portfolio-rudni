import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <HiOutlineSun className="theme-toggle-icon" aria-hidden="true" />
      ) : (
        <HiOutlineMoon className="theme-toggle-icon" aria-hidden="true" />
      )}
      <span className="visually-hidden">
        Current theme: {theme}
      </span>
    </button>
  );
};
