import { removeItem, updatePrice, updateQuantity } from "../store/items/actions";

import { MenuItem } from "../components/MenuItem";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemove: () => dispatch(removeItem(ownProps.uuid)),
    onPriceUpdate: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    onQuantityUpdate: (quantity) => dispatch(updateQuantity(ownProps.uuid, quantity)),
});

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
