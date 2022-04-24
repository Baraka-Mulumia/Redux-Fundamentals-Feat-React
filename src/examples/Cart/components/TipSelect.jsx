import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export const TipSelect = ({ tipPercentage, updateTip }) => {
  return (
    <FormControl>
      <FormLabel htmlFor="tip" fontWeight={700}>
        How Much would you like to tip
      </FormLabel>
      <Select
        variant="filled"
        onChange={(e) => updateTip(Number(e.target.value))}
        value={String(tipPercentage)}>
        <option value="10">10%</option>
        <option value="20">20%</option>
        <option value="30">30%</option>
        <option value="40">40%</option>
      </Select>
    </FormControl>
  );
};
