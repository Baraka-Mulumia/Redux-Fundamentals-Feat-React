import { HStack } from "@chakra-ui/react";
import HumanList from "./components/HumanList";
import TaskList from "./components/TaskList";

const ChoresApp = () => {
    return (
        <HStack
            bg={"white"}
            justify={"space-between"}
            w={"full"}
            p={2}
            spacing={16}
            minH={"100vh"}
            align={"start"}
        >
            <HumanList />
            <TaskList />
        </HStack>
    );
};
export default ChoresApp;
