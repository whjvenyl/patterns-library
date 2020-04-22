/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

storiesOf('Components|Atoms/Button/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
    knobs: { disabled: true },
  })
  .add(
    'Feature - Button icon visible',
    () => '<axa-button icon="arrow-right">Next step</axa-button>'
  )
  .add('Feature - Button clickable', () => {
    const btn = document.createElement('axa-button');
    let counter = 0;
    btn.innerHTML = `You clicked me: ${counter}, btw my event name is click`;
    btn.addEventListener('click', () => {
      counter += 1;
      btn.innerHTML = `You clicked me: ${counter} times, btw my event name is click`;
    });

    return btn;
  })
  .add('Feature - Button in a form', () => {
    let count = 0;
    const handleSubmit = ev => {
      const { target } = ev;
      ev.preventDefault();
      count += 1;

      const el = target.nodeName === 'AXA-BUTTON' ? target : target.parentNode;
      // this code is for test purposes. Its ok to write it as is only a demo
      // It also make sure the structure of the DOM is correct with the fake button
      el.dataset.count = count;
    };

    const template = html`
      <div>
        <form>
          <axa-button type="submit">Click me, I send you to Nirvana</axa-button>
        </form>
        <p>
          I&apos;m type submit Button in a form, on click I stop submit event
          for you for example you can validate me
        </p>
        <form @click="${handleSubmit}">
          <axa-button class="js-submit-prevent" type="submit"
            >Click me I prevent submit</axa-button
          >
        </form>
        <form>
          <p>
            I&apos;m type reset Button in a form, if you type something - on
            click I should reset the input
          </p>
          <input type="text" />
          <axa-button type="reset">Reset Input</axa-button>
        </form>
      </div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  })
  .add(
    'Button css width',
    () =>
      '<axa-button style="width: 80%">Next step</axa-button><axa-text>You can simply set width by setting css width.</axa-text>'
  )
  .add(
    'Buttons side by side',
    () =>
      '<axa-button style="width: 20%">First button</axa-button><axa-button style="width: 500px">Second button</axa-button>'
  );
