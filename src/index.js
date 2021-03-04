import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle` 


* {
	padding: 0px;
	margin: 0px;
	border: 0px;
}
*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,
:active {
	outline: none;
}

html,
body {
	line-height: 1;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	color: #000;
	font-size: 16px;
	height: 100%;
	min-width: 320px;

}

a:focus,
a:active { 
	outline: none;
}
aside,
nav,
footer,
header,
section {
	display: block;
}

input::-ms-clear {
	display: none;
}
button {
	cursor: pointer;
}
button::-moz-focus-inner {
	padding: 0;
	border: 0;
}
a,
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
ul li {
	list-style: none;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}

`;

const theme = {
	media: {
		extraSmallDevices: "(max-width: 575.98px)",
		smallDevices: "(max-width: 767.98px)",
		mediumDevices: "(max-width: 991.98px)",
		largeDevices: "(max-width: 1236px)",
	},
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
