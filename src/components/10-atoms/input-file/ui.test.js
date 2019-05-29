import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Input File - basic functionality').page(
  `${host}/iframe.html?id=atoms-input-file--input-file-default`
);

const INPUT_FILE_TAG = 'axa-input-file';
const ICON_TAG = 'axa-icon';
const INPUT_FILE_CLASS = '.a-input-file';
const INPUT_FILE_INPUT_CLASS = '.a-input-file__input';

test('should render input-file', async t => {
  const $axaElem = await Selector(INPUT_FILE_TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemEl = await $axaElem.find(INPUT_FILE_CLASS);
  await t.expect($axaElemEl.exists).ok();
});

fixture('Input File - set property icon').page(
  `${host}/iframe.html?id=atoms-input-file--input-file-icon`
);

test('should set input file property icon', async t => {
  const $axaElem = await Selector(INPUT_FILE_TAG);
  await t.expect($axaElem.exists).ok();
  const $axaIcon = await $axaElem.find(ICON_TAG);
  await t.expect($axaIcon.exists).ok();
});

fixture('Input File - set property disabled').page(
  `${host}/iframe.html?id=atoms-input-file--input-file-default`
);

test('should set input file property disabled', async t => {
  const setDisabled = ClientFunction(() => {
    document.querySelector('axa-input-file').disabled = true;
  });
  await setDisabled();
  const $axaElm = await Selector('axa-input-file');
  await t.expect(await $axaElm.hasAttribute('disabled')).ok();
});

fixture('Input File - set property accept').page(
  `${host}/iframe.html?id=atoms-input-file--input-file-accept`
);

test('should set input file accept', async t => {
  const $axaElm = await Selector('axa-input-file');
  const $axaElmInput = await $axaElm.find(INPUT_FILE_INPUT_CLASS);
  await t
    .expect((await $axaElmInput.getAttribute('accept')) === 'application/pdf')
    .ok();
});

fixture('Input File - set property multiple').page(
  `${host}/iframe.html?id=atoms-input-file--input-file-multiple`
);

test('should set input file multiple', async t => {
  const $axaElm = await Selector('axa-input-file');
  const $axaElmInput = await $axaElm.find(INPUT_FILE_INPUT_CLASS);
  await t.expect(await $axaElmInput.hasAttribute('multiple')).ok();
});

fixture('Input File - set property capture').page(
  `${host}/iframe.html?id=atoms-input-file--input-file-capture`
);

test('should set input file capture', async t => {
  const $axaElm = await Selector('axa-input-file');
  const $axaElmInput = await $axaElm.find(INPUT_FILE_INPUT_CLASS);
  await t.expect(await $axaElmInput.hasAttribute('capture')).ok();
});

fixture('Input File - react smoke test').page(
  `${host}/iframe.html?id=atoms-input-file-react--inputfile-default`
);

test('should render react input file', async t => {
  const $axaButton = await Selector('axa-input-file');
  await t.expect($axaButton.exists).ok();
  const $axaButtonShadow = await Selector(() =>
    document.querySelector('axa-input-file')
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find(INPUT_FILE_CLASS);
  await t.expect($axaButtonShadowEl.exists).ok();
});
