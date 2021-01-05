import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { addOrder } from "../../store/actions/ordersActions";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  size: {
    order: 2,
    [theme.breakpoints.up("md")]: {
      order: 3
    }
  },
  picture: {
    order: 3,
    [theme.breakpoints.up("md")]: {
      order: 2
    }
  }
});

class ItemDetails extends Component {
  state = {
    size: "M",
    number: 1
  };

  handleChangeSelect = (event) => {
    this.setState({ number: event.target.value });
  };

  handleChangeRadio = (event) => {
    this.setState({ size: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToCart(
      this.props.product,
      this.state.size,
      this.state.number
    );
  };

  render() {
    const { product } = this.props;
    if (product) {
      const picturePath = "/img/" + product.picture;
      return (
        <Container maxWidth="lg">
          <Grid
            container={true}
            alignContent="center"
            justify="center"
            spacing={2}
            direction="row"
          >
            <Grid item xl={3} lg={3} md={3} xs={12}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <span className="red-text">
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "JPY"
                  }).format(product.price)}
                </span>
                ＋消費税
                <br />
                商品番号：{product.productID}
              </p>
            </Grid>
            <Grid item xl={6} lg={6} md={6} xs={12}>
              <img src={picturePath} alt="cloth" />
            </Grid>
            <Grid item xl={3} lg={3} md={3} xs={12}>
              <form onSubmit={this.handleSubmit}>
                <ul>
                  <li>
                    <InputLabel id="simple-radio">サイズを選択</InputLabel>
                    <br />
                    <RadioGroup
                      row={true}
                      id="simple-radio"
                      aria-label="size"
                      name="size1"
                      value={this.state.size}
                      onChange={this.handleChangeRadio}
                    >
                      <FormControlLabel
                        value="S"
                        control={<Radio />}
                        label="S"
                      />
                      <FormControlLabel
                        value="M"
                        control={<Radio />}
                        label="M"
                      />
                      <FormControlLabel
                        value="L"
                        control={<Radio />}
                        label="L"
                      />
                    </RadioGroup>
                    <br />
                  </li>
                  <li>
                    <InputLabel id="simple-select-label">数量を選択</InputLabel>
                    <br />
                    <Select
                      labelId="simple-select-label"
                      id="simple-select"
                      value={this.state.number}
                      onChange={this.handleChangeSelect}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                    <br />
                    <br />
                    <br />
                  </li>
                  <li>
                    <Button type="submit" variant="outlined">
                      カードに追加
                    </Button>
                  </li>
                </ul>
              </form>
            </Grid>
          </Grid>
        </Container>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading ...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  return {
    product: product,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product, size, number) =>
      dispatch(addOrder(product, size, number))
  };
};

export default compose(
  withStyles(styles, { name: "ItemDetails" }),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "products"
    }
  ])
)(ItemDetails);
