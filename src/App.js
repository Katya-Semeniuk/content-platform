import styles from './App.module.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className={styles.App}>
    <NavBar/>
    <h1> Be inspired. <br/> Stay informed.</h1>
    </div>
  );
}

export default App;