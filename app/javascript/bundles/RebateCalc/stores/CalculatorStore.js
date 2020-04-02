import { extendObservable } from 'mobx';

import rebateConverter from '../utils/rebateConverter';

class CalculatorStore {
  constructor() {
    extendObservable(this, {
      value: '',
      convertedValue: 0,
      formSubmitted: true,
      get convertedRebate() {
        if (this.formSubmitted) {
          return rebateConverter(this.value);
        } else {
          return '';
        }
      }
    });
  }

  handleChange = ({ value }) => {
    if (!isNaN(value)) {
      this.value = value;
    }
  };
}

export default new CalculatorStore();
