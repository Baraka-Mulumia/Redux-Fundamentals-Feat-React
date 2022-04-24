import { Summary } from "../components/Summary";
import { connect } from "react-redux";

const calcSubTotal = (items) =>
    items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

const mapStateToProps = (state) => ({
    subtotal: calcSubTotal(state.items),
    tipAmount: (calcSubTotal(state.items) * state.tip.tipPercentage) / 100,
});

export const SummaryContainer = connect(mapStateToProps)(Summary);
