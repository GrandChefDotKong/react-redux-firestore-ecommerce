import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import Info from "./Info";
import OrderHistory from "./OrderHistory";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const SimpleTabs = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { uid } = props;
  if (!uid) return <Redirect to="/" />;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="ご注文履歴一覧" {...a11yProps(0)} />
          <Tab label="お客様情報の変更" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <OrderHistory />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Info />
      </TabPanel>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    orders: state.firestore.ordered.orders
  };
};

export default connect(mapStateToProps)(SimpleTabs);
