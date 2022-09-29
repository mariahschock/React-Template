import styles from './Shows.css';

export default function Shows() {
  return (
    <div className={styles.Shows}>
      <h1>Shows on Rotation RN:</h1>
      <ul>
        <li>The Great British Baking Show</li>
        <li>Monster: The Jeffrey Dahmer Story</li>
        <li>Silcon Valley</li>
        <li>Survivor</li>
        <li>Ted Lasso</li>
        <li>Schitt&apos;s Creek</li>
      </ul>
    </div>
  );
}
