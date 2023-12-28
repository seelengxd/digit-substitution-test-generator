import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link as ChakraLink,
  Heading,
  CardHeader,
  CardBody,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const DEFAULT_PAGE_COUNT = 20;
  const [pages, setPages] = useState(DEFAULT_PAGE_COUNT);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/" + pages);
  };
  return (
    <Center mt={4}>
      <Card p={8} shadow={"lg"}>
        <CardHeader>
          <Heading>Digit Subsititution Test Generator</Heading>
        </CardHeader>
        <CardBody>
          <FormControl>
            <FormLabel>Number of Pages:</FormLabel>
            <NumberInput
              min={1}
              step={2}
              defaultValue={DEFAULT_PAGE_COUNT}
              onChange={(valueAsString, value) => {
                if (valueAsString !== "") {
                  setPages(value);
                }
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Button mt={2} onClick={handleClick}>
            Generate!
          </Button>
        </CardBody>
      </Card>
    </Center>
  );
}

export default Form;
