import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  min-height: 36px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #dedede;
  border-radius: 2px;
  background-color: #ffffff;
  padding: 5px 15px;
  margin-bottom: 5px;
  img {
    width: 20px;
    height: 20px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectSpan = styled.span`
  height: 15px;
  width: 45px;
  opacity: 0.6;
  color: #000000;
  font-family: Muli;
  margin-left: 10px;
`;

const SelectedItem = props => {
  return (
    <Wrapper>
      <Title>
        <img alt="project-icon" src={props.src} />
        <ProjectSpan>{props.title}</ProjectSpan>
      </Title>
      {props.children}
    </Wrapper>
  );
};

SelectedItem.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string
};

export default SelectedItem;
