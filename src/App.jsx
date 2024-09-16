import Footer from "./components/Footer";
import MyResponsiveGrid from "./components/MyResponsiveGrid";
import styles from "./styles/App.module.css"

const App = () => {
  return (
    <>
    <div className={styles.cvbuttonGroup}>
      <a href="/cv/gabriela-garin__es.pdf" target="_blank" className={styles.cvbutton}>
        CV<b>ES</b>
      </a>
      <a href="/cv/gabriela-garin__en.pdf" target="_blank" className={styles.cvbutton}>
      CV<b>EN</b>
      </a>
      </div>
      <MyResponsiveGrid />
      <Footer/>
    </>
  );
};

export default App;