import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import Changelog from '../CHANGELOG.md';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';

storiesOf('Examples/Toggle Switch/React', module)
  .addParameters({
    changelog: Changelog,
  })
  .addDecorator(withKnobs)
  .add('Controlled', () => {
    const div = document.createElement('div');
    const active = boolean('active', false);

    ReactDOM.render(<AXAToggleSwitchReact active={active} />, div);

    return div;
  });
