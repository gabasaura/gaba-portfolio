import MyResponsiveGrid from "./components/MyResponsiveGrid";
import styles from "./styles/App.module.css"

const App = () => {
  return (
    <>
      <button className={styles.cvbutton}>CV</button>
      <MyResponsiveGrid />
    </>
  );
};

export default App;