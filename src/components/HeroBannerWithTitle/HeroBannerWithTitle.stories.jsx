import React from 'react';

import HeroBannerWithTitle from './HeroBannerWithTitle';

export default {
    title: 'Components/HeroBannerWithTitle',
    component: HeroBannerWithTitle,
    args: {},
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    tags: ['autodocs']
}

const Template = (args) => <HeroBannerWithTitle {...args} />;

export const Story = Template.bind({});
Story.args = {};
