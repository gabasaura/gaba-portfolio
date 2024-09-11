import MyResponsiveGrid from "./components/MyResponsiveGrid";
import styles from "./styles/App.module.css"

const App = () => {
  return (
    <>
      <a href="/public/Gabriela-Garín-Palma-ES.pdf" target="_blank" className={styles.cvbutton}>
        CV<b>ES</b>
      </a>
      <a href="/public/Gabriela-Garín-Palma-EN.pdf" target="_blank" className={styles.cvbutton}>
      CV<b>EN</b>
      </a>
      <MyResponsiveGrid />
    </>
  );
};

export default App;