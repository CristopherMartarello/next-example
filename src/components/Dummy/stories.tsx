import { Dummy, DummyProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Dummy',
  component: Dummy,
} as Meta;

export const Template: Story<DummyProps> = (args) => {
  return (
    <div>
      <Dummy {...args} />
    </div>
  );
};
