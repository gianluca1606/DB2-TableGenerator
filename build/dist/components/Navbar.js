import React from "../../_snowpack/pkg/react.js";
import {Toolbar, AppBar, Typography} from "../../_snowpack/pkg/@material-ui/core.js";
function Navbar() {
  return /* @__PURE__ */ React.createElement(AppBar, {
    position: "static",
    style: {alignItems: "center"}
  }, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: ""
  }, "DB2 Table Generator")));
}
export default Navbar;
