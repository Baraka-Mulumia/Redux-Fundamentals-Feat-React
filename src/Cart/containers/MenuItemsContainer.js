import MenuItemList from "../components/MenuItemList";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = () => {};

export const MenuItemsContainer = connect(mapStateToProps)(MenuItemList);
