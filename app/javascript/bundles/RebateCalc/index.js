import React from 'react';

import CalculatorContent from './components/CalculatorContent';
import CalculatorStore from './stores/CalculatorStore';

const RebateCalculator = _railsProps => {
  return <CalculatorContent store={CalculatorStore} />;
};

export default RebateCalculator;
