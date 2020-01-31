import React from 'react'

const BAHCalculator = props => {
  const mhaBah = JSON.parse(props.mhaBahJson);
  return (

    <p>we should see test here: {console.log(mhaBah.AK400)} </p>
  );
};



export default BAHCalculator;
