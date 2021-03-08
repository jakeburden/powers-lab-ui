import React from "react";
import Instructions from "./Instructions";

export default {
  component: Instructions,
  title: "Instructions",
};

const Template = (args) => <Instructions {...args} />;

const basicInstructions = (
  <section>
    <h1>Basic Instructions!!!!!!</h1>
    <p className="text-xl">Please read these instructions.</p>
    <p className="text-xl">Then get started.</p>
  </section>
);

export const Default = Template.bind({});
Default.args = {
  children: basicInstructions,
};
