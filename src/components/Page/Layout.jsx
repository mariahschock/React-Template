import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.css';

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <header>
        <nav>
          <Link to="">Home</Link>
          <Link to="shows">TV Shows</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
