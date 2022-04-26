import { Alert, AlertDescription, AlertIcon, AlertTitle, Center } from "@chakra-ui/react";

const Error = ({ title, desc }) => {
    return (
        <Center>
            <Alert status="error">
                <AlertIcon />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{desc}</AlertDescription>
            </Alert>
        </Center>
    );
};
export default Error;
