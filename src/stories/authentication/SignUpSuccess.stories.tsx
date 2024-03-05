import { Story, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import SignUpSuccess from "../../pages/autehntication/SignUpSuccess";

export default {
  title: "YourProject/SignUpSuccess",
  component: SignUpSuccess,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story = (args) => <SignUpSuccess {...args} />;

export const Default = Template.bind({});
Default.args = {};
