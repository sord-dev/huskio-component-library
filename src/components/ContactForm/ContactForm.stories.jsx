import React from 'react';

import ContactForm from './ContactForm';

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
  args: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
}

const Template = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {};