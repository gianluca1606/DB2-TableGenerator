import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import Container from "../_snowpack/pkg/@material-ui/core/Container.js";
import Navbar from "./components/Navbar.js";
import Form from "./components/Form.js";
import SqlOutput from "./components/SqlOutput.js";
import {CssBaseline} from "../_snowpack/pkg/@material-ui/core.js";
import {ThemeProvider, createMuiTheme} from "../_snowpack/pkg/@material-ui/core/styles.js";
export default function App() {
  const [columnData, setColumnData] = useState({});
  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(Form, {
    setColumnData
  }), /* @__PURE__ */ React.createElement(SqlOutput, {
    columnData
  }), /* @__PURE__ */ React.createElement(CssBaseline, null));
}
