import styles from './mylib.module.css';
import { useThisHook } from '#hooks/useThisHook.js';

export function Mylib() {
  useThisHook();
  return (
    <div className={styles['container']}>
      <h1>Welcome to Mylib!</h1>
    </div>
  );
}

export default Mylib;
