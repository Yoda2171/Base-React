
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Chat from './Views/Chat';
import Feed from './Views/Feed';
import Friends from './Views/Friends';
import Home from './Views/Home';
import Login from './Views/Login';
import NotFound from './Views/NotFound';
import Profile from './Views/Profile';


function App() {
  return (
    <>
     <div>
        <BrowserRouter>
          <div className="container-fluid">
            <Navbar />
            <Switch>

              <Route exact path="/profile/id" component={Profile}  />
              <Route exact path="/chats" component={Chat}  />
              <Route exact path ="/friends" component={Friends} />
              <Route exact path="/feed" component-={Feed} />
              <Route exact path="/login" component={Login}  />
              <Route exact path="/" component={Home}  />
              <Route component={NotFound}  />

            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
