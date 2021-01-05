import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    height: 320,
    width: 228,
    margin: 10
  },
  media: {
    height: 228
  }
});

const ItemSummary = ({ product }) => {
  const classes = useStyles();
  const picturePath = "/img/middles/" + product.picture;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={"/product/" + product.id}>
          <CardMedia className={classes.media} image={picturePath} />
          <CardContent>
            <Typography
              className="card-content"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              <span className="product-name">{product.name}</span>
              <br />
              <br />
              <span className="product-price right red-text">
                {new Intl.NumberFormat("ja-JP", {
                  style: "currency",
                  currency: "JPY"
                }).format(product.price)}
              </span>
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default ItemSummary;
