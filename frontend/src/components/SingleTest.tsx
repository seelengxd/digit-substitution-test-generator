import React from "react";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Image,
  Table,
  Td,
  Th,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { getRandomInt } from "../utils/random";
import TableRow from "./TableRow";

function Test() {
  const SYMBOL_COUNT = 18;

  const symbols: number[] = [];
  for (let i = 0; i < 10; i++) {
    while (true) {
      const randomNumber = getRandomInt(SYMBOL_COUNT);
      if (!symbols.includes(randomNumber)) {
        symbols.push(randomNumber);
        break;
      }
    }
  }

  const styles = {
    height: "210mm",
    width: "297mm",
  };

  return (
    <Box height="100vh" m={4} id="test" sx={styles}>
      <Heading textAlign={"center"} mb={4}>
        Digit symbol substitution test
      </Heading>

      <HStack justify={"center"} width="80%" m="auto">
        {symbols.map((number, index) => (
          <Table mx={2}>
            <Tr>
              <Th
                borderWidth={"2px"}
                borderColor="black"
                textAlign={"center"}
                mr={1}
              >
                {index}
              </Th>
            </Tr>
            <Tr>
              <Td borderWidth={"2px"} borderColor="black">
                <Image
                  src={
                    process.env.REACT_APP_PUBLIC_URL + `/images/${number}.svg`
                  }
                  height={"40px"}
                  width="40px"
                  m={"auto"}
                />
              </Td>
            </Tr>
          </Table>
        ))}
      </HStack>
      <Divider borderWidth={"2px"} borderColor="black" my={4} />

      <VStack spacing={4} justify={"center"}>
        <TableRow size={18} />
        <TableRow size={18} />
        <TableRow size={18} />
        <TableRow size={18} />
        <TableRow size={18} />
      </VStack>
    </Box>
  );
}

export default Test;
