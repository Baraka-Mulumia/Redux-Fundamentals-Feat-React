import {
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    InputGroup,
    InputLeftAddon,
    Text,
    VStack,
} from "@chakra-ui/react";
import { selectItem, selectItemTotal } from "../selectors";

import UseCart from "../../../hooks/UseCart";
import { useSelector } from "react-redux";

export const MenuItem = ({ name, price, quantity, uuid }) => {
    const [{ removeItem, updatePrice, updateQuantity }] = UseCart();
    const total = useSelector((state) => selectItemTotal(state, uuid));

    const onRemove = () => {
        removeItem(uuid);
    };
    const onPriceUpdate = (price) => {
        updatePrice({ uuid, price });
    };
    const onQuantityUpdate = (quantity) => {
        updateQuantity({ uuid, quantity });
    };
    return (
        <VStack
            align={"start"}
            w={"full"}
            p={3}
            borderColor={"gray.200"}
            borderWidth={"1px"}
            borderRadius={"10px"}
        >
            <Text fontWeight={600} fontSize={"xl"}>
                {name}
            </Text>
            <HStack spacing={1} justify={"flex-start"} w={"full"} align={"center"}>
                <HStack spacing={1} justify={"flex-start"} w={"50%"}>
                    <FormControl>
                        <FormLabel htmlFor="price" fontWeight={700}>
                            Price
                        </FormLabel>
                        <InputGroup>
                            <InputLeftAddon children={"$"} />
                            <Input
                                id="price"
                                type="number"
                                onChange={(e) => onPriceUpdate(Number(e.target.value))}
                                placeholder={"0"}
                                value={price}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="price" fontWeight={700}>
                            Quantity
                        </FormLabel>
                        <Input
                            id="price"
                            type="number"
                            placeholder={"0"}
                            onChange={(e) => onQuantityUpdate(Number(e.target.value))}
                            value={quantity}
                        />
                    </FormControl>
                </HStack>
                <VStack justifySelf={"flex-end"} align={"end"} p={2} w={"50%"}>
                    <Text fontWeight={600}>Total</Text>
                    <Text fontWeight={300} fontSize={"md"}>
                        ${total}
                    </Text>
                </VStack>
            </HStack>
            <Button variant={"outline"} alignSelf={"flex-end"} onClick={onRemove}>
                Remove
            </Button>
        </VStack>
    );
};
