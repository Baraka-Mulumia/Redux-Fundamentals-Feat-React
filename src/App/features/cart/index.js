import MenuItemList from "./components/MenuItemList";
import { NewItemForm } from "./components/NewItemForm";
import { Summary } from "./components/Summary";
import { TipSelect } from "./components/TipSelect";
import UseCart from "../../hooks/UseCart";
import { VStack } from "@chakra-ui/react";

const Cart = () => {
    const [{ addNewItem }, items] = UseCart();

    return (
        <VStack
            spacing={4}
            align={"start"}
            w={"800px"}
            p={2}
            borderWidth={"1px"}
            borderColor={"gray.100"}
            bg={"white"}
            borderRadius={"10px"}
            m={"auto"}
        >
            <NewItemForm />
            <MenuItemList items={items} />
            <TipSelect />
            <Summary />
        </VStack>
    );
};
export default Cart;
