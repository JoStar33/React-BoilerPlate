import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from 'msw-storybook-addon';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { handlers } from '../src/mocks/handlers';

export const decorators = [(Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
), mswDecorator];

initialize({
  onUnhandledRequest: 'bypass'
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: {
      handlers: handlers
    }
  },
};

export default preview;
