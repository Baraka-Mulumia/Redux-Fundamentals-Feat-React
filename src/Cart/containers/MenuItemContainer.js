import { removeItem, updatePrice, updateQuantity } from "../store/items/actions";

import { MenuItem } from "../components/MenuItem";
import { connect } from "react-redux";
import { selectItemTotal } from "../store/items/selectors";

const mapStateToProps = (state, ownProps) => ({
    total: selectItemTotal(state, ownProps),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemove: () => dispatch(removeItem(ownProps.uuid)),
    onPriceUpdate: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    onQuantityUpdate: (quantity) => dispatch(updateQuantity(ownProps.uuid, quantity)),
});

export const MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItem);
