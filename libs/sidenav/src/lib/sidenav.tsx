import styles from './sidenav.module.css';
import { useThisHook } from '../hooks/useThisHook.js';

export function Sidenav() {
  useThisHook();
  return (
    <div className={styles['container']}>
      <h1>Welcome to Sidenav!</h1>
    </div>
  );
}

export default Sidenav;
