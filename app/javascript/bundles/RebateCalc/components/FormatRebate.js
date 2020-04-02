import React from 'react';
import { observer } from 'mobx-react-lite';

const FormatRebate = observer(function FormatRebate({ store }) {
  return (
    <input
      type="text"
      name="rebate"
      id="rebate"
      value={store.convertedRebate}
      placeholder="Estimated Rebate Amount"
      readOnly="readonly"
      aria-label="Rebate Estimate"
    />
  );
});

export default FormatRebate;
