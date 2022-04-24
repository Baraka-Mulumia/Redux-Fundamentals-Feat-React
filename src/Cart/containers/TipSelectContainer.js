import { TipSelect } from "../components/TipSelect";
import { connect } from "react-redux";
import { updateTip } from "../store/tip-percentage/actions";

const mapStateToProps = (state) => {
  return {
    tipPercentage: state.tip.tipPercentage,
  };
};

const mapDispatchToProps = {
  updateTip,
};

export const TipSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TipSelect);
