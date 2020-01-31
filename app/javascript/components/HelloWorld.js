import React from "react"
import PropTypes from "prop-types"
import BAHCalculator from "./BAHCalculator/index"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        test
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
