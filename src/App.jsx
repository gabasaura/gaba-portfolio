import MyResponsiveGrid from "./components/MyResponsiveGrid";
import styles from "./styles/App.module.css"

const App = () => {
  return (
    <div>
      <h1 className={styles.cv}>cv</h1>
      <MyResponsiveGrid />
    </div>
  );
};

export default App;