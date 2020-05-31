import React from "react";
import PostDetails from "../components/post/postDetails";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { posts } from "../constant/application";
import { Top } from "./top";
const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));
export const PostContainer = props => {
  const classes = useStyles();
  const { postId } = props.match.params;
  const post = posts.find(post => post.postId === postId);
  console.log(post);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        <Grid className={classes.mainGrid}>
          {post && <PostDetails post={post} />}
        </Grid>
      </Grid>
      <Grid item md={4}>
        <Top />
      </Grid>
    </Grid>
  );
};

export default PostContainer;
