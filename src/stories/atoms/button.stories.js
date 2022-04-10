import React from 'react'
import Button from './button';

export default {
    component: Button,
    title: 'Button',
    argTypes: { onClick: { action: 'clicked' } },
}

const Template = args =><Button {...args} />

export const BasicButton = Template.bind({})
BasicButton.args={
    variant:'primary',
    children: 'Basic Button',
}

export const FunctionButton = Template.bind({})
FunctionButton.args={
    variant:'secondary',
    children: 'Function Button',
    onClick: () => alert('hello')
}

export const LinkedButton = Template.bind({})
LinkedButton.args={
    variant:'tertiary',
    children: 'Linked Button',
    href: '/'
}