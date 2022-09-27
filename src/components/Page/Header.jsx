import Navigation from './Navigation.jsx';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>

      <h1>Watchlist</h1>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>
    </header>
  );
}
