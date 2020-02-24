import React from "react";
import Avatar from "@material-ui/core/Avatar";
import StyledProfile from "./StyledProfile";

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
