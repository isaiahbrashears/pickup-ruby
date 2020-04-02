import React from 'react';
import NumberFormat from 'react-number-format';
import { observer } from 'mobx-react-lite';
import { useCountUp } from 'react-countup';

const CalculatorContent = observer(function CalculatorContent({ store }) {
  const { countUp, update } = useCountUp({
    start: 0,
    end: 0,
    delay: 1000,
    duration: 0.8,
    separator: ',',
    onUpdate: () => console.log(store.convertedValue)
  });

  return (
    <>
          <div className="calc-form">
            <div className="rebate-calc-header">
              <p>Find out how much cash back*</p>
            </div>
            {/* PURCHASE PRICE INPUT */}
            <div
              className="ui labeled small fluid input rebate-input"
              id="purchase-price-div"
            >
              <div className="ui basic label">$</div>
              <NumberFormat
                type="text"
                value={store.value}
                onValueChange={store.handleChange}
                placeholder="Enter Purchase Price"
                aria-label="Purchase Price"
                thousandSeparator={true}
                onChange={() => update(parseInt(store.convertedRebate))}
              />
              {/* <button
                onClick={() => update(parseInt(store.convertedRebate))}
                className="ui button fluid button-blue max-w-xs calc-button"
              >
                Calculate
              </button> */}
            </div>

            {/* ESTIMATED REBATE AMOUNT */}
            <div className="rebate-calc-estimate">
              <p>${countUp}</p>
            </div>
          </div>
    </>
  );
});

export default CalculatorContent;
