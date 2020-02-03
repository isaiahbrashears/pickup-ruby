import React from 'react';
import { observer } from 'mobx-react';

const BAHCalculateForm = observer(function BAHCalculateForm({ store }) {
  return(
    <>
      <p>zipcode</p>
      <input type="text" onChange={store.handleZipcodeChange} />
      <select onChange={store.handleRankChange}>
        <option value="0">E-1</option>
        <option value="1">E-2</option>
        <option value="2">E-3</option>
        <option value="3">E-4</option>
        <option value="4">E-5</option>
        <option value="5">E-6</option>
        <option value="6">E-7</option>
        <option value="7">E-8</option>
        <option value="8">E-9</option>
        <option value="9">W-1</option>
        <option value="10">W-2</option>
        <option value="11">W-3</option>
        <option value="12">W-4</option>
        <option value="13">W-5</option>
        <option value="14">O1E</option>
        <option value="15">O2E</option>
        <option value="16">O3E</option>
        <option value="17">O-1</option>
        <option value="18">O-2</option>
        <option value="19">O-3</option>
        <option value="20">O-4</option>
        <option value="21">O-5</option>
        <option value="22">O-6</option>
        <option value="23">O-7+</option>
      </select>
      <button onClick={store.submitForm}>
        Find BAH
      </button>
    </>
  )
});

export default BAHCalculateForm;
