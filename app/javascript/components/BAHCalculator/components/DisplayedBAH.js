import React from 'react';
import { observer } from 'mobx-react-lite';

const DisplayedBAH = observer(function DisplayedBAH({ store }) {
  return(
    <>
      <h1>BAH RATES</h1>
      <h2>Without Dependents</h2>
      <h3>{store.findBAHWo}</h3>
      <h2>With Dependents</h2>
      <h3>{store.findBAHW}</h3>
    </>
  )
});

export default DisplayedBAH;
