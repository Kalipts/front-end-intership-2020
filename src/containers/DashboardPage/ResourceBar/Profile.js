import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";

import styled from "styled-components";

const StyledProfile = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 0.1em solid #e3e3e3;
  display: flex;
  align-items: center;
  padding: 0 auto;
  & > div {
    margin-left: 20px;
  }
`;

const Profile = props => {
  const { src, name } = props;
  return (
    <StyledProfile>
      <Avatar alt="profile" src={src} />
      <div>{name}</div>
    </StyledProfile>
  );
};

export default Profile;
