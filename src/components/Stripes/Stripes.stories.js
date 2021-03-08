import React from "react";
import Stripes from "./Stripes";

export default {
  component: Stripes,
  title: "Stripes",
};

const Template = (args) => <Stripes {...args} />;

export const Default = Template.bind({});
Default.args = {
  background: "black",
  foreground: "red",
  stripeSize: 100,
  rotation: 0,
};
