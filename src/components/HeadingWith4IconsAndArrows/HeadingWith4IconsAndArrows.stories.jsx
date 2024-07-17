import React from 'react';

import HeadingWith4IconsAndArrows from './HeadingWith4IconsAndArrows';

export default {
    title: 'Components/HeadingWith4IconsAndArrows',
    component: HeadingWith4IconsAndArrows,
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
}

const Template = (args) => <HeadingWith4IconsAndArrows {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithValues = Template.bind({});
WithValues.args = {
    title: 'Populated Title', icon: [
        { icon: "https://i.pinimg.com/originals/a2/17/40/a21740a7b0f6b96a92e4805c8df8aa7e.jpg", title: 'Populated Title', desc: 'Populated Description' },
        { icon: "https://i.pinimg.com/originals/a2/17/40/a21740a7b0f6b96a92e4805c8df8aa7e.jpg", title: 'Populated Title', desc: 'Populated Description' },
        { icon: "https://i.pinimg.com/originals/a2/17/40/a21740a7b0f6b96a92e4805c8df8aa7e.jpg", title: 'Populated Title', desc: 'Populated Description' },
        { icon: "https://i.pinimg.com/originals/a2/17/40/a21740a7b0f6b96a92e4805c8df8aa7e.jpg", title: 'Populated Title', desc: 'Populated Description' },
    ]
};