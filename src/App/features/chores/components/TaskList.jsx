import { Box, Checkbox, Flex, Select, Text } from "@chakra-ui/react";

import Container from "./Container";
import UseChores from "../../../hooks/UseChores";

const TaskList = () => {
    const [{ addTask }, tasks] = UseChores();

    return (
        <Container title={"Tasks"} subtitle={"Title"} placeholderText={"New Task"} onAdd={addTask}>
            {tasks.map((task) => (
                <TaskView {...task} key={task?.uuid} />
            ))}
        </Container>
    );
};
export default TaskList;

export const TaskView = ({ title, uuid, completed, assignedTo }) => {
    const [{ toggle, assignToUser }, , humans] = UseChores();

    return (
        <Box borderColor={"blackAlpha.300"} borderWidth={"1px"} rounded={"md"} p={4} w={"full"}>
            <Flex gap={4} align={"center"} w={"full"}>
                <Checkbox
                    isChecked={completed}
                    onChange={(event) => toggle(uuid, event.target.checked)}
                />
                <Text fontSize={"lg"} fontWeight={500} noOfLines={1}>
                    {title}
                </Text>
            </Flex>
            <Select
                value={assignedTo}
                variant="filled"
                mt={4}
                onChange={(event) => assignToUser(uuid, event.target.value)}
            >
                <option value="">(Unassigned)</option>
                {humans.map((human) => (
                    <option value={human.uuid} key={human.uuid}>
                        {human.name}
                    </option>
                ))}
            </Select>
        </Box>
    );
};
