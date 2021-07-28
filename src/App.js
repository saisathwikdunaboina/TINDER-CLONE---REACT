import React from "react";
import './App.css';
import Header from "./Header";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
        <Route path="/Chats/:person">
            <Header backButton="/chats"  />
            <ChatScreen />
          </Route>
          <Route path="/Chats">
            <Header backButton="/"  />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
