import MyResponsiveGrid from "./components/MyResponsiveGrid";
import styles from "./styles/App.module.css"

const App = () => {
  return (
    <>
    <div className={styles.cvbuttonGroup}>
      <a href="/public/Gabriela-Garín-Palma-ES.pdf" target="_blank" className={styles.cvbutton}>
        CV<b>ES</b>
      </a>
      <a href="/public/Gabriela-Garín-Palma-EN.pdf" target="_blank" className={styles.cvbutton}>
      CV<b>EN</b>
      </a>
      </div>
      <MyResponsiveGrid />
    </>
  );
};

export default App;