import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./common/components/layout/Header";
import { routes } from "./common/routes/Routes";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
