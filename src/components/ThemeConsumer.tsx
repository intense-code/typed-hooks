// ThemeConsumer.tsx

import  { useThemeContext } from './ThemeContext';

const ThemeConsumer: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeConsumer;