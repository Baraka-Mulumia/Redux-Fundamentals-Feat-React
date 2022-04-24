import { HStack, Text, VStack } from "@chakra-ui/react";

export const Summary = ({ subtotal, tipAmount, total }) => (
    <VStack w={"60%"} alignSelf={"end"} px={3}>
        <HStack alignSelf={"end"} p={2} justify={"space-between"} w={"full"}>
            <Text fontSize={"lg"} fontWeight={600}>
                Subtotal
            </Text>
            <Text fontWeight={300}>${subtotal}</Text>
        </HStack>
        <HStack alignSelf={"end"} p={2} justify={"space-between"} w={"full"}>
            <Text fontSize={"lg"} fontWeight={600}>
                Tip Amount
            </Text>
            <Text fontWeight={300}>${tipAmount}</Text>
        </HStack>
        <HStack alignSelf={"end"} p={2} justify={"space-between"} w={"full"}>
            <Text fontSize={"lg"} fontWeight={600}>
                Total
            </Text>
            <Text fontWeight={300}>${total}</Text>
        </HStack>
    </VStack>
);
