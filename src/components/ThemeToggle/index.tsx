import Moon from '../../icons/Moon';
import Sun from '../../icons/Sun';
import classes from './ThemeToggle.module.css';

export default function ThemeToggle(props: { theme?: 'light' | 'dark'; toggleTheme(): void }) {
  return (
    <button onClick={props.toggleTheme} className={classes.toggleButton}>
      <span>{props.theme === 'light' ? 'DARK' : 'LIGHT'}</span>
      <span className={classes.icon}>{props.theme === 'light' ? <Moon /> : <Sun />}</span>
    </button>
  );
}
