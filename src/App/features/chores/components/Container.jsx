import { Box, Input, Text, VStack } from "@chakra-ui/react";

import { useState } from "react";

const Container = ({ title, subtitle, placeholderText, children, onAdd }) => {
    const [item, setItem] = useState("");

    const handleSubmit = (e) => {
        if (e.key === "Enter" && typeof onAdd == "function" && item.trim().length > 1) {
            onAdd(item);
            setItem("");
        }
    };
    return (
        <Box w={"full"}>
            <VStack w={"full"} align={"start"}>
                <Text fontSize={"3xl"} fontWeight={700}>
                    {title}
                </Text>
                <Text fontSize={"xl"} fontWeight={500}>
                    {subtitle}
                </Text>
                <Input
                    placeholder={placeholderText}
                    w={"full"}
                    borderColor={"blackAlpha.500"}
                    value={item}
                    onKeyDown={handleSubmit}
                    onChange={(e) => setItem(e.target.value)}
                />
            </VStack>
            <VStack align={"start"} spacing={4} p={4} w={"full"}>
                {children}
            </VStack>
        </Box>
    );
};
export default Container;
