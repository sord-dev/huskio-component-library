import React from 'react';

import HeadingWith6Icons from './HeadingWith6Icons';

export default {
  title: 'Components/HeadingWith6Icons',
  component: HeadingWith6Icons,
  args: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs']
}

const Template = (args) => <HeadingWith6Icons {...args} />;

export const Story = Template.bind({});
Story.args = {};
