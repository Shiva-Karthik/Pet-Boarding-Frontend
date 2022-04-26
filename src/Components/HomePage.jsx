import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPetCenterData, handlePageClick } from "../Redux/Petcenter/action";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Spinner,
  Center,
  Input,
  Flex,
  Select,
} from "@chakra-ui/react";

export const HomePage = () => {
  const { petcenter, loading, error, totalPages, onepage } = useSelector(
    (store) => store.petcenter
  );
  const [filterState, setFilterState] = useState({ parameter: "", value: "" });
  const [query, setQuery] = useState("");
  const [verify, setVerify] = useState("");
  const dispatch = useDispatch();
  // console.log(petcenter);

  useEffect(() => {
    handlePage();
    // handlePageClick()
    getData();
  }, []);

  const getData = () => {
    dispatch(getPetCenterData());
  };

  const handlePage = () => {
    dispatch(handlePageClick(onepage));
    dispatch(getPetCenterData(onepage));
  };

  const handleSort = (parameter, value) => {
    setFilterState({ parameter: parameter, value: value });
  };

  const handleVerify = (id) => {
    let value = id.target.value;
    setVerify(value);
  };

  return loading ? (
    <Center h="600px">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  ) : (
    <Box>
      <TableContainer padding="5%">
        <Flex justifyContent={"space-around"}>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme="blue">
              Sort by
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup defaultValue="asc" title="Cost" type="radio">
                <MenuItemOption
                  value="asc"
                  onClick={() => {
                    handleSort("costPerDay", 1);
                  }}
                >
                  Ascending
                </MenuItemOption>
                <MenuItemOption
                  value="desc"
                  onClick={() => {
                    handleSort("costPerDay", -1);
                  }}
                >
                  Descending
                </MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup defaultValue="asc" title="Rating" type="radio">
                <MenuItemOption
                  value="asc"
                  onClick={() => {
                    handleSort("Rating", 1);
                  }}
                >
                  Ascending
                </MenuItemOption>
                <MenuItemOption
                  value="desc"
                  onClick={() => {
                    handleSort("Rating", 1);
                  }}
                >
                  Descending
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Select
            placeholder="Verified"
            width="200px"
            id="verify"
            onChange={handleVerify}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
          <Input
            id="myInput"
            // onChange={(e) => tyPing(e)}
            placeholder="Search by City"
            htmlSize={10}
            width="auto"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Flex>
        <br />
        <br />
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Pet Boarding Entity</TableCaption>
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>Name</Th>
              <Th>City</Th>
              <Th>Address</Th>
              <Th>Capacity</Th>
              <Th>Cost per day</Th>
              <Th>Verified</Th>
              <Th>Rating</Th>
              <Th>View</Th>
            </Tr>
          </Thead>

          <Tbody>
            {petcenter
              .filter((e) => e.city.toLowerCase().includes(query))
              .filter((e) => e.verified.includes(verify))

              .sort((a, b) => {
                if (
                  filterState.parameter == "costPerDay" &&
                  filterState.value == 1
                ) {
                  return a["costPerDay"] - b["costPerDay"];
                } else if (
                  filterState.parameter == "costPerDay" &&
                  filterState.value == -1
                ) {
                  return b["costPerDay"] - a["costPerDay"];
                } else if (
                  filterState.parameter == "Rating" &&
                  filterState.value == 1
                ) {
                  return a["Rating"] - b["Rating"];
                } else if (
                  filterState.parameter == "Rating" &&
                  filterState.value == -1
                ) {
                  return b["Rating"] - a["Rating"];
                }
              })
              .map((e, i) => {
                return (
                  <Tr key={i}>
                    <Td>{i + 1}</Td>
                    <Td>{e.centerName}</Td>
                    <Td>{e.city}</Td>
                    <Td>{e.address}</Td>
                    <Td>{i + 1 * 3}</Td>
                    <Td>{e.costPerDay}</Td>
                    <Td>{e.verified}</Td>
                    <Td>{e.Rating}</Td>
                    <Td><Link to={`/petcenter/${e._id}`}>View</Link></Td>
                    
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
        <br />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          pageCount={totalPages}
          onPageChange={handlePage}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-link"}
          activeClassName={"active"}
        ></ReactPaginate>
      </TableContainer>
    </Box>
  );
};

// error ? (
//   "Error 404"
// ) :
