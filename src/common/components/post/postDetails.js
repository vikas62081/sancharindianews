import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MarkDown from "./MarkDown";

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  postBackground: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 16
  },
  title: {
    fontWeight: 900,
    fontSize: "235%",
    letterSpacing: "0.02em"
  }
}));

export default function PostDetails({ post }) {
  const classes = useStyles();
  const { title, content, date, by, location } = post;
  return (
    <Grid>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="caption" gutterBottom>
        {date} by <span style={{ color: "#1976d2" }}>{by}</span>
      </Typography>
      <Divider />
      <div className={classes.postBackground} title={title}>
        <Typography component="h4" variant="h4" color="inherit" gutterBottom>
          {title}
        </Typography>
        {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
      </div>
      <Typography
        component="h4"
        variant="subtitle1"
        color="inherit"
        gutterBottom
      >
        {location&&<span style={{ fontWeight: "bold" }}>{location} : </span>}
        {content}
      </Typography>

      {/* <MarkDown className={classes.markdown} key={content.substring(0, 40)}>
        {content}
      </MarkDown> */}
    </Grid>
  );
}

PostDetails.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string
};
