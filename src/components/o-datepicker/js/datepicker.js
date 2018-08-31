import { AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import getAttribute from '../../../js/get-attribute';
import { isDateValid, getLocaleDayMonthYear } from '../../../js/date';

const OK = 'ok';

export default class Datepicker {
  constructor(wcNode) {
    this.wcNode = wcNode;
    this._value = '';
    this._locale = '';
    this._localValue = '';
  }

  init() {
    this.datepickerInput = this.wcNode.querySelector('.js-datepicker__input');
    this.datepickerCalender = this.wcNode.querySelector('.js-datepicker__calender');
    this.datepicker = this.wcNode.querySelector('.o-datepicker');
    this.listenToButtons();
    this.listenToInput();
    if (this.datepickerCalender && this.isItemInLowerHalf(this.datepickerInput)) {
      this.datepickerCalender.classList.add('o-datepicker__calender--move-up');
    }
  }

  listenToButtons() {
    this.offListenToButtons();
    this.unListenDatepickerCalender = on(
      this.datepickerCalender, AXA_EVENTS.AXA_CLICK, '',
      this.handleClickDatepickerCalender, {
        capture: true, passive: false,
      },
    );
    this.unListenToDatepickerInput = on(
      this.datepickerInput, AXA_EVENTS.AXA_CLICK, '',
      this.handleClickDatepickerInput, {
        capture: true, passive: false,
      },
    );
  }

  offListenToButtons() {
    if (this.unListenDatepickerCalender) {
      this.unListenDatepickerCalender();
    }
    if (this.unListenToDatepickerInput) {
      this.unListenToDatepickerInput();
    }
  }

  listenToInput() {
    this.offListenToInput();
    this.unListenToInputChange = on(
      this.datepickerInput, AXA_EVENTS.AXA_CHANGE, '',
      this.handleInputChange, {
        capture: true, passive: false,
      },
    );
  }

  offListenToInput() {
    if (this.unListenToInputChange) {
      this.unListenToInputChange();
    }
  }

  handleClickDatepickerCalender = (e) => {
    e.preventDefault();

    const { detail } = e;
    if (!detail) {
      return;
    }
    const { button, value } = detail;
    if (!button) {
      return;
    }
    if (button === OK) {
      this._value = value;
      console.log(this._value);
      this._localeValue = getLocaleDayMonthYear(this._locale, this._value);
    } else {
      // console.log('cancel');
    }
    this.displayDatepicker();
  }

  handleClickDatepickerInput = (e) => {
    e.preventDefault();
    this.displayDatepicker();
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const { detail } = e;
    const validDate = isDateValid(this._locale, detail);
    if (validDate) {
      this._value = new Date(validDate);
    } else {
      this._value = '';
    }
  }

  displayDatepicker() {
    if (getAttribute(this.wcNode, 'open') === true) {
      this.wcNode.removeAttribute('open');
    } else {
      this.wcNode.setAttribute('open', true);
    }
  }

  isItemInLowerHalf(target) {
    const { top, height } = target.getBoundingClientRect();
    const toBottom = window.innerHeight - (top + (height / 2));
    const toTop = top + (height / 2);

    if (toBottom >= toTop) {
      return false;
    }
    return true;
  }

  get localeValue() {
    return this._localeValue;
  }

  get value() {
    return this._value;
  }

  set locale(locale) {
    this._locale = locale;
  }
}
