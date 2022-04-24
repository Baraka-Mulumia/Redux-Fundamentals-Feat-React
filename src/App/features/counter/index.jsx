import { Button, Flex, HStack, Text } from "@chakra-ui/react";

import UseCounter from "../../hooks/UseCounter";

function Counter() {
    const [actions, count] = UseCounter();
    const { increment, decrement, set } = actions;

    return (
        <Flex
            w={"400px"}
            h={"400px"}
            bg={"purple.50"}
            py={4}
            px={2}
            mx={"auto"}
            rounded={"md"}
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"column"}
        >
            <Text fontSize={"9xl"}>{count}</Text>
            <HStack spacing={4}>
                <Button colorScheme={"blackAlpha"} onClick={increment}>
                    INCREMENT
                </Button>
                <Button colorScheme={"blackAlpha"} onClick={() => set(0)}>
                    RESET
                </Button>
                <Button colorScheme={"blackAlpha"} onClick={decrement} disabled={count <= 0}>
                    DECREMENT
                </Button>
            </HStack>
        </Flex>
    );
}

export default Counter;
