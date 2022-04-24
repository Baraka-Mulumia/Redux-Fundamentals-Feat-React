import { Box } from "@chakra-ui/react";
import Cart from "./Cart/app";
// import Counter from "./Counter/app";

function App() {
    return (
        <Box bg={"gray.800"} minH={"100vh"} w={"100%"} pt={10} fontFamily={"fantasy"}>
            {/* <Counter /> */}
            <Cart />
        </Box>
    );
}

export default App;
