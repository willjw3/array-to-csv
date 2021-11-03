import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './pages/home';
import Test from './pages/test';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router> 
        <TopNav />
        <hr />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/test">
                <Test />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
