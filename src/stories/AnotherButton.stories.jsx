import React from "react";
import { Button, Skeleton } from "@chakra-ui/react";

const AnotherButton = () => {
	return (
		<Skeleton>
			<Button colorScheme="blue.500">Click Me</Button>
		</Skeleton>
	);
};

export default {
	title: "NewDesign/AnotherButton",
	component: AnotherButton,
};

const Template = (args) => <AnotherButton {...args} />;

export const LargeOne = Template.bind({});
LargeOne.args = {
	size: "lg",
};
