import { addNewItem, removeItem, updatePrice, updateQuantity } from "../features/cart/ItemSlice";

import UseActions from "../../lib/global-hooks/UseActions";
import { selectItems } from "../features/cart/selectors";
import { updateTip } from "../features/cart/TipSlice";
import { useSelector } from "react-redux";

const UseCart = () => {
    const items = useSelector(selectItems);
    const actions = UseActions({ addNewItem, removeItem, updatePrice, updateQuantity, updateTip });
    return [actions, items];
};

export default UseCart;
