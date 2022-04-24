import { Box, HStack, Text } from "@chakra-ui/react";
import { NavLink, Route, Routes } from "react-router-dom";

import Cart from "./App/features/cart";
import ChoresApp from "./App/features/chores";
import Counter from "./App/features/counter";

function App() {
    return (
        <Box bg={"gray.800"} minH={"100vh"} w={"100%"} fontFamily={"fantasy"}>
            <HStack bg={"gray.100"} p={4} justify={"space-between"} align={"center"} pr={16}>
                <Text fontSize={"3xl"}>Redux Feat React</Text>
                <HStack spacing={8} fontSize={"xl"}>
                    <Text
                        as={NavLink}
                        to={"/"}
                        borderBottom={"1px solid"}
                        borderColor={"transparent"}
                        p={1}
                        _hover={{ borderColor: "gray.900" }}
                    >
                        Counter
                    </Text>
                    <Text
                        as={NavLink}
                        to={"/cart"}
                        borderBottom={"1px solid"}
                        borderColor={"transparent"}
                        p={1}
                        _hover={{ borderColor: "gray.900" }}
                    >
                        Cart
                    </Text>
                    <Text
                        as={NavLink}
                        to={"/chores"}
                        borderBottom={"1px solid"}
                        borderColor={"transparent"}
                        p={1}
                        _hover={{ borderColor: "gray.900" }}
                    >
                        Chores
                    </Text>
                </HStack>
            </HStack>
            <Box pt={10}>
                <Routes>
                    <Route path={"/"} element={<Counter />} />
                    <Route path={"/cart"} element={<Cart />} />
                    <Route path={"/chores"} element={<ChoresApp />} />
                </Routes>
            </Box>
        </Box>
    );
}

export default App;
