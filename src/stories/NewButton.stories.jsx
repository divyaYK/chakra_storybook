import { Button } from "@chakra-ui/react";
import React from "react";
import { NewButton } from "../components/NewButton";

export default {
	title: "NewDesign/NewButton",
	component: NewButton,
};

const Template = (args) => <NewButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: "secondary",
};

export const Neutral = Template.bind({});
Neutral.args = {
	variant: "neutral",
};
