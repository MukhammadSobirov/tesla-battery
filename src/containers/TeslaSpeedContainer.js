import TeslaCounter from "../components/TeslaCounter/TeslaCounter";
import { connect } from "react-redux";
import { counterDefaultVal } from "../constants/counterDefaultVal";
import { speedDown, speedUp } from "../actions";


const mapStateToProps = (state) => {
  return {
    currentValue: state.config.speed,
    initValues: counterDefaultVal.speed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment:(value) => {
      dispatch(speedUp(value))
    },
    decrement:(value) => {
      dispatch(speedDown(value))
    }
  }
}

const TeslaSpeedCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter)

export default TeslaSpeedCounterContainer;