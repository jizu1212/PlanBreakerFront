// Header.stories.tsx
import type { Meta, Story } from "@storybook/react";
import Header from "../../layout/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

export default {
  title: "Header",
  component: Header,
  decorators: [
    (Story) => (
      <Provider store={mockStore({ user: { userInfo: null } })}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.decorators = [
  (Story) => (
    <Provider store={mockStore({ user: { userInfo: null } })}>
      <Story />
    </Provider>
  ),
];

export const LoggedIn = Template.bind({});
LoggedIn.decorators = [
  (Story) => (
    <Provider store={mockStore({ user: { userInfo: { name: "Test User" } } })}>
      <Story />
    </Provider>
  ),
];
