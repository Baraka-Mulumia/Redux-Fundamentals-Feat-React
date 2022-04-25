import { Box, Text, VStack } from "@chakra-ui/react";

import Container from "./Container";
import { TaskView } from "./TaskList";
import UseChores from "../../../hooks/UseChores";
import { selectHumanTasks } from "../selectors";
import { useSelector } from "react-redux";

const HumanList = () => {
    const [{ addHuman }, , humans] = UseChores();
    return (
        <Container title={"Humans"} subtitle={"Name"} placeholderText={"New Name"} onAdd={addHuman}>
            {humans.map((human) => (
                <Human key={human?.uuid} {...human} />
            ))}
        </Container>
    );
};
export default HumanList;

const Human = ({ name, uuid }) => {
    const tasks = useSelector((state) => selectHumanTasks(state, uuid));
    return (
        <Box borderColor={"blackAlpha.300"} borderWidth={"1px"} rounded={"md"} p={4} w={"full"}>
            <Text fontWeight={600} fontSize={"2xl"}>
                {name}
            </Text>
            <VStack>
                {tasks.map((task) => (
                    <TaskView {...task} key={task?.uuid} />
                ))}
            </VStack>
        </Box>
    );
};
