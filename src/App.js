import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quizz from "./pages/Quizz";
import Classement from "./pages/Classement";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" exact component={About} />
        <Route path="/Quizz" exact component={Quizz} />
        <Route path="/Classement" exact component={Classement} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};


export default App;