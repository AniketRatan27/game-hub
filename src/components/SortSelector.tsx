import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By : Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevace</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem> Release Date</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
