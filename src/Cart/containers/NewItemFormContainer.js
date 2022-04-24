import { NewItemForm } from "../components/NewItemForm";
import { addNewItem } from "../store/items/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//example 1
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onSubmit: (name, item) => addNewItem(name, item),
    },
    dispatch
  );

const mapDispatchToPropsV2 = {
  onSubmit: (name, item) => addNewItem(name, item),
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToPropsV2
)(NewItemForm);
