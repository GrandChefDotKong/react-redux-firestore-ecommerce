import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Footer from "../layout/Footer";
import { Radio, RadioGroup, FormControlLabel, Grid, FormControl } from "@material-ui/core";

class Dashboard extends Component {
  state = {
    carrousel: ["/img/home_1.jpg", "/img/home_2.jpg", "/img/home_3.jpg"],
    carrouselIndex: 0
  };

  handleNext = (e) => {
    if (this.state.carrouselIndex < this.state.carrousel.length - 1) {
      this.setState({ carrouselIndex: Number(this.state.carrouselIndex) + 1 });
    }
  };

  handleBefore = (e) => {
    if (this.state.carrouselIndex > 0) {
      this.setState({ carrouselIndex: Number(this.state.carrouselIndex) - 1 });
    }
  };

  handleChange = (e) => {
    this.setState({ carrouselIndex: Number(e.target.value) });
  };

  render() {
    return (
      <div className="page-container">
        <img
          className="image-info"
          width="800"
          src="/img/home_info.jpg"
          alt="info"
        />
        <div>
          <Grid container spacing={2} direction="row" className="carousel">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={this.handleBefore}
            >
              <NavigateBeforeIcon fontSize="large" />
            </IconButton>
            <img
              width="800"
              height="100%"
              src={this.state.carrousel[this.state.carrouselIndex]}
              alt="logo"
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={this.handleNext}
            >
              <NavigateNextIcon fontSize="large" />
            </IconButton>
          </Grid>
        </div>
        <FormControl component="div">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={this.state.carrouselIndex}
            onChange={this.handleChange}
            style={{ alignSelf: "center" }}
            row
          >
            <FormControlLabel
              className="carousel_radio"
              value={0}
              control={
                <Radio
                  checked={this.state.carrouselIndex === 0 ? true : false}
                />
              }
              label=""
            />
            <FormControlLabel
              className="carousel_radio"
              value={1}
              control={
                <Radio
                  checked={this.state.carrouselIndex === 1 ? true : false}
                />
              }
              label=""
            />
            <FormControlLabel
              className="carousel_radio"
              value={2}
              control={
                <Radio
                  checked={this.state.carrouselIndex === 2 ? true : false}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
        <img
          className="image-info"
          width="800"
          src="/img/kanshasai.jpg"
          alt="info"
        />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
