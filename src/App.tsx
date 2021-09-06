import React from "react";
import { Route, Switch } from "react-router";
import ContactAddPage from "./Pages/ContactAddPage";
import ContactListPage from "./Pages/ContactListPage";
import CounterPage from "./Pages/CounterPage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ContactListPage} />
      <Route exact path="/add" component={ContactAddPage} />
      <Route exact path="/counter" component={CounterPage} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
}

export default App;
