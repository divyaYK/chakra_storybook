import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { addDecorator } from "@storybook/react";
import NewTheme from "../src/NewTheme";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => <ChakraProvider theme={NewTheme}>{Story()}</ChakraProvider>,
];
