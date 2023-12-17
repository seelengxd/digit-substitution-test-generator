import { Table, Td, Th, Tr } from "@chakra-ui/react";
import { getRandomInt } from "./utils/random";

interface Props {
  size: number;
}

function TableRow({ size }: Props) {
  return (
    <Table mx={2}>
      <Tr>
        {Array(size)
          .fill(0)
          .map(() => (
            <Th borderWidth={"2px"} borderColor="black" textAlign={"center"}>
              {Math.min(9, getRandomInt(10))}
            </Th>
          ))}
      </Tr>
      <Tr>
        {Array(size)
          .fill(0)
          .map(() => (
            <Td borderWidth={"2px"} borderColor="black" height="15mm"></Td>
          ))}
      </Tr>
    </Table>
  );
}
export default TableRow;
