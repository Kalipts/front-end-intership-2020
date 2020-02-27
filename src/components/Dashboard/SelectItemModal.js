import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Label from "./Label";
import Search from "../shared/Search";

const Wrapper = styled.div`
  width: inherit;
`;

const SelectItemModal = () => {
  console.log("aaa");
  return (
    <Modal width="480px" height="50%">
      <Wrapper>
        <Label label="Resource" />
        <Search width="inherit" />
      </Wrapper>
    </Modal>
  );
};

export default SelectItemModal;
