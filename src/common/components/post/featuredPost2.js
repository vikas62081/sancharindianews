import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import * as moment from "moment/moment.js";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

export default function FeaturedPost2(props) {
  const classes = useStyles();
  const { post,getLink } = props;

  return (
    <Grid style={{margin:2}}>
      <CardActionArea component={Link} to={getLink(post)}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="body1">
                {post.title}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {/* {post.date} */}
                {moment(post.date, "MMM dd,yyyy").fromNow()}
              </Typography>
              {/* <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography> */}
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle||post.title}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost2.propTypes = {
  post: PropTypes.object
};
