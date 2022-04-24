import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const NewItemForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const isValid = () => {
    if (!name) return false;
    if (!(price > 0)) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onSubmit == "function") {
      return onSubmit(name, price);
    }

    setName("");
    setPrice(0);
  };
  return (
    <VStack
      as={"form"}
      align={"flex-start"}
      spacing={4}
      w={"full"}
      onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="item-name" fontWeight={700}>
          Item Name
        </FormLabel>
        <Input
          id="item-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="price" fontWeight={700}>
          Price
        </FormLabel>
        <InputGroup>
          <InputLeftAddon children={"$"} />
          <Input
            id="price"
            type="number"
            placeholder={"0"}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </InputGroup>
      </FormControl>
      <Button
        colorScheme={"purple"}
        type={"submit"}
        isFullWidth
        display={"flex"}
        gap={4}>
        <AddIcon />
        <Text>Add Item</Text>
      </Button>
    </VStack>
  );
};
