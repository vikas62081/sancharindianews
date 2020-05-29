import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Header from "./common/components/layout/Header";
import FeaturedPost from "./common/components/post/featuredPost";
import MainFeaturedPost from "./common/components/post/mainFeaturedPost";
import { Main } from "./common/container/main";
function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Header />
        <Main/>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
