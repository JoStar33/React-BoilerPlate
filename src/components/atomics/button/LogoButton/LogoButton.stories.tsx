import { Meta, StoryFn } from '@storybook/react';
import LogoButton from './LogoButton';

export default {
  title: '컴포넌트/아토믹/버튼/LogoButton',
  component: LogoButton,
} as Meta<typeof LogoButton>;

const Template: StoryFn<typeof LogoButton> = (args) => <LogoButton {...args}/>;

export const LogoButtonTest = Template.bind({});
LogoButtonTest.args = {
  label: "카카오 로그인",
  logo: `${process.env.PUBLIC_URL}/public/logo192.png`
}
