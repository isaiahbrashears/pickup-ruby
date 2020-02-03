import React from 'react';
import BAHCalculatorStore from './stores/BAHCalculatorStore';
import BAHCalculateForm from './components/BAHCalculateForm';
import DisplayedBAH from './components/DisplayedBAH';

const BAHCalculator = railsProps => {
  const bahCalculatorStore = new BAHCalculatorStore(railsProps);
  return (
    <>
      <BAHCalculateForm store={bahCalculatorStore} />
      <DisplayedBAH store={bahCalculatorStore} />
    </>
  );
};



export default BAHCalculator;
