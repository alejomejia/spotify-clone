import { Story, Meta } from '@storybook/react'

import Logo, { LogoProps } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  decorators: [(Story) => <Story />],
  argTypes: {
    fill: { control: 'color' },
    width: { control: 'text' },
  },
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Default = Template.bind({})

Default.args = {
  fill: '#000',
  width: '240px',
}
