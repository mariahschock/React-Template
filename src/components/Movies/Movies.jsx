import { Outlet, Link } from 'react-router-dom';
import styles from './Movies.css';

export default function Movies() {
  return (
    <div className={styles.Movies}>
      <h1>Movies by Genre</h1>
      <nav className={styles.Links}>
        <Link to="comedy">Comedy</Link>
        <Link to="drama">Drama</Link>
        <Link to="action">Action</Link>
      </nav>
      <Outlet />
    </div>
  );
}
