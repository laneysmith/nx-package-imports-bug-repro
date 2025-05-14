// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Mylib } from '@laney/mylib';
import { Sidenav } from '@laney/sidenav';

export function App() {
  return (
    <div>
      <Mylib />
      <Sidenav />
      <NxWelcome title="laney-test-repo" />
    </div>
  );
}

export default App;
