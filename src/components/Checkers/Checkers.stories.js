import React from "react";
import Checkers from "./Checkers";

export default {
  component: Checkers,
  title: "Checkers",
};

const Template = (args) => <Checkers {...args} />;

export const Default = Template.bind({});
Default.args = {
  background: "black",
  foreground: "red",
  stripeSize: 100,
  rotation: 0,
};
