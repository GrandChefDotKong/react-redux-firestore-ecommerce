import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink className="nav_link_4" to="/signup">
            会員登録
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_link_4" to="/signin">
            ログイン
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
