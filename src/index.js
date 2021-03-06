import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle.js";

const theme = {
	colors: {
		purple: "#b434e3",
		gray: "rgba(0, 0, 0, 0.2)",
		red: "#fa4d4d",
		green: "#3ede6b",
	},
};

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);
registerServiceWorker();
