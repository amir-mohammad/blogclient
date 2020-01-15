import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostState from "./context/PostState";
import UserState from "./context/user/UserState";

function App() {
  return (
    <UserState>
      <PostState>
        <Container>
          <Router>
            <MenuBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Router>
        </Container>
      </PostState>
    </UserState>
  );
}

export default App;
