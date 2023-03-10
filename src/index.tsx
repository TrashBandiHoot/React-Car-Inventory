import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, CarInventory, SignIn } from './components';
import './style.css';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';

let myTitle = "Welcome to my Car Inventory app"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>

      <Route exact path='/'>
        <Home title={myTitle} /> 
      </Route>
      <Route path='/phonebook'>
        <CarInventory />
      </Route>
      <Route path='/signin'>
        <SignIn />
      </Route>
      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
