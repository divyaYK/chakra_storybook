import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

export const NewButton = ({
	size,
	label,
	isLoading,
	isFullWidth,
	variant,
	isActive,
	onClick,
	boxShadow,
	...props
}) => {
	return (
		<Button
			size={size}
			isActive={isActive}
			isLoading={isLoading}
			isFullWidth={isFullWidth}
			variant={variant}
			boxShadow={boxShadow}
			onClick={onClick}
			{...props}>
			{label}
		</Button>
	);
};

NewButton.propTypes = {
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	label: PropTypes.string.isRequired,
	isLoading: PropTypes.bool,
	isFullWidth: PropTypes.bool,
	isActive: PropTypes.bool,
	variant: PropTypes.oneOf(["primary", "secondary", "neutral"]),
	onClick: PropTypes.func,
	boxShadow: PropTypes.oneOf(["sm", "md", "lg", "none"]),
};

NewButton.defaultProps = {
	label: "Click Me!",
	isLoading: false,
	isFullWidth: false,
	variant: "primary",
	isActive: false,
	boxShadow: "none",
	size: "md",
};
