// theme.js
import { extendTheme } from "@chakra-ui/react";

const useButtonStyles = {
	px: "2rem",
	overflow: "hidden",
	position: "relative",
	transition: "all 0.2s ease-in-out",
};

const NewTheme = extendTheme({
	fonts: {
		body: "'Open Sans', sans-serif",
		span: "system-ui, sans-serif",
	},
	colors: {
		newPrimary: "#F2CCB6",
		newSecondary: "#C1D4D9",
		newNeutral: {
			black: "#252601",
			white: "#f7f7f7",
		},
	},
	components: {
		Button: {
			baseStyle: {
				textTransform: "capitalize",
				borderRadius: "4px",
			},
			variants: {
				primary: {
					backgroundColor: "newPrimary",
					color: "newNeutral.black",
					...useButtonStyles,
				},
				secondary: {
					bg: "newSecondary",
					color: "white",
					...useButtonStyles,
				},
				neutral: {
					bg: "newNeutral.black",
					color: "white",
					...useButtonStyles,
				},
			},
		},
	},
});

export default NewTheme;
