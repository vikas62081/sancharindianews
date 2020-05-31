import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./common/components/layout/Header";
import { routes } from "./common/routes/Routes";
import {Footer} from "./common/components/layout/footer";
import HeaderNav from "./common/components/layout/headerNav";
import {sections} from './common/constant/application'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Container maxWidth="lg" style={{padding:0}}>
          <Header />
          <HeaderNav sections={sections}/>
          <div style={{padding:'0 10px'}}>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
          </div>
          <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
