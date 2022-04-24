import { MenuItem } from "./MenuItem";
import { MenuItemContainer } from "../containers/MenuItemContainer";
import { VStack } from "@chakra-ui/react";

const MenuItemList = ({ items }) => {
  return (
    <VStack w={"full"} align={"start"} p={"2 4"} spacing={3}>
      {items.map((item) => (
        <MenuItemContainer key={item.uuid} {...item} />
      ))}
    </VStack>
  );
};
export default MenuItemList;
