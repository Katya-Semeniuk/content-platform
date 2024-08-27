import { Switch, Route } from "react-router-dom";
import styles from './App.module.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className={styles.App}>
    <NavBar/>
    <h1> Be inspired. <br/> Stay informed.</h1>
    <Switch>
          <Route exact path="/" render={()=> <h1>Home Page</h1>}></Route>
          <Route exact path="/signin" render={()=> <h1>Singn in</h1>}></Route>
          <Route exact path="/signup" render={()=> <h1>Singn up</h1>}></Route>
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
    </div>
  );
}

export default App;