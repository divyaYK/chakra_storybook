import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import NewTheme from "./NewTheme";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={NewTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
