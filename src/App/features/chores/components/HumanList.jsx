import { Box, Center, Spinner, Text, VStack } from "@chakra-ui/react";
import {
    selectHumanTasks,
    selectHumansFetchError,
    selectHumansFetchLoadingState,
} from "../selectors";
import { useDispatch, useSelector } from "react-redux";

import Container from "./Container";
import Error from "./Error";
import { TaskView } from "./TaskList";
import UseChores from "../../../hooks/UseChores";
import { fetchHumans } from "../HumanSlice";
import { useEffect } from "react";

const HumanList = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectHumansFetchError);
    const isLoading = useSelector(selectHumansFetchLoadingState);

    useEffect(() => {
        const getHumans = async () => dispatch(fetchHumans());
        getHumans();
    }, [dispatch]);

    const [{ addHuman }, , humans] = UseChores();
    return (
        <Container title={"Humans"} subtitle={"Name"} placeholderText={"New Name"} onAdd={addHuman}>
            {isLoading ? (
                <Center>
                    <Spinner size={"xl"} />
                </Center>
            ) : error.isError ? (
                <Error title={"We Apologize for the inconvenience"} desc={error.message} />
            ) : (
                <>
                    {humans.map((human) => (
                        <Human key={human?.uuid} {...human} />
                    ))}
                </>
            )}
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
