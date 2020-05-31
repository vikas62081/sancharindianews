import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from "../components/post/mainFeaturedPost";
import FeaturedPost from "../components/post/featuredPost";
// import Main from "./Main";
// import Sidebar from "./Sidebar";
import {posts,mainFeaturedPost} from '../constant/application'
const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));


export const Main = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
        {/* <Header title="Blog" sections={sections} /> */}
       
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2}>
            {posts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} /> 
            {posts.map(post=><PostDetails post={post}/>)}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
      
    </React.Fragment>
  );
};
