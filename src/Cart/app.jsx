import { MenuItemsContainer } from "./containers/MenuItemsContainer";
import { NewItemFormContainer } from "./containers/NewItemFormContainer";
import { SummaryContainer } from "./containers/SummaryContainer";
import { TipSelectContainer } from "./containers/TipSelectContainer";
import { VStack } from "@chakra-ui/react";

const Cart = () => {
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
            <NewItemFormContainer />
            <MenuItemsContainer />
            <TipSelectContainer />
            <SummaryContainer />
        </VStack>
    );
};
export default Cart;
