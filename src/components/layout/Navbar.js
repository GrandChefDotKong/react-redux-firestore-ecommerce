import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import Cart from "../cart/Cart";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none"
  }
}));

const Navbar = (props) => {
  const { auth, numberItem } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  const logo = "/img/logo_uq_01.gif";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <nav className="nav-wrapper white">
      <div className="container">
        <Link to="/" className="brand-logo left">
          <img src={logo} alt="logo" />
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <NavLink className="nav_link" to="/shop/women">
              WOMEN
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/shop/men">
              MEN
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link-kid" to="">
              KIDS
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link_2" to="">
              COMPANY
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link_3" to="">
              店舗検索
            </NavLink>
          </li>
          <li>{links}</li>
          <li>
            <NavLink
              className="nav_link_4"
              to="/cart"
              aria-label="cart"
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <StyledBadge badgeContent={numberItem} color="secondary">
                <ShoppingCartIcon style={{ color: "white" }} />
              </StyledBadge>
              カート
              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Cart />
              </Popover>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 2,
    top: 25,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    numberItem: state.orders.numberItem
  };
};

export default connect(mapStateToProps)(Navbar);
