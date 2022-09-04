import logo from './logo.svg';
import './App.css';
import Login from '../src/Pages/login'
import Home from '../src/Pages/home'
import Routes from '../src/Routes/routes'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={Routes.Home.path} component={Home} />
          <Route exact path={Routes.Login.path} component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
