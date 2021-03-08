import React from "react";
import Button from "./Button";
import getResponse from "../../utils/getResponse";

export default {
  component: Button,
  title: "Button",
};

const Template = (args) => <Button {...args} />;

const state = {
  responses: [],
};

let clicks = 0;

export const Default = Template.bind({});
Default.args = {
  children: "Get Response",
  onClick: () => {
    clicks++;
    alert(getResponse(clicks, state.responses));
  },
};
