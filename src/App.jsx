import Footer from "./components/Footer";
import MyResponsiveGrid from "./components/MyResponsiveGrid";
import styles from "./styles/App.module.css"

const App = () => {
  return (
    <>
    <div className={styles.cvbuttonGroup}>
      <a href="/gabriela-garin__ES.pdf" target="_blank" className={styles.cvbutton}>
        CV<b>ES</b>
      </a>
      <a href="/Gabriela-Garín-Palma-EN.pdf" target="_blank" className={styles.cvbutton}>
      CV<b>EN</b>
      </a>
      </div>
      <MyResponsiveGrid />
      <Footer/>
    </>
  );
};

export default App;