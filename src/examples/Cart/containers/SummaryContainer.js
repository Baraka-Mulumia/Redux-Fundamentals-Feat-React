import { selectSubtotal, selectTipAmount, selectTotal } from "../store/items/selectors";

import { Summary } from "../components/Summary";
import { connect } from "react-redux";

const calcSubTotal = (items) =>
    items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

const mapStateToProps = (state) => ({
    subtotal: selectSubtotal(state),
    tipAmount: selectTipAmount(state),
    total: selectTotal(state),
});

export const SummaryContainer = connect(mapStateToProps)(Summary);
