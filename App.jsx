import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Service from './components/Service';
import Cake from './components/Cake';
import Account from './components/Account';
import Rooms from './components/Rooms';
import BookRooms from './components/BookRooms';
import Profile from './components/Profile';
import Update from './components/Update';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/account" component={Account} />
        <Route path="/choosecake" component={Cake} />
        <Route path="/bookrooms" component={BookRooms} />
        <Route path="/profile" component={Profile} />
        <Route path="/updateprofile" component={Update} />
      </Switch>
    </div>
  );
}

export default App;
