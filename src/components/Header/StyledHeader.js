import styled from "styled-components";

const StyledHeader = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${props => props.theme.color.primary};
  height: 50px;
  > li {
    float: left;
    font-family: Muli;
    font-size: 14px;
    font-weight: bold;
    .test0 {
      margin-left: 5px;
      margin-top: -5px;
    }
    .test1 {
      margin-right: 15px;
      margin-top: -5px;
    }
  }
  > li > a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  .user {
    float: right;
    margin-top: 0;
  }
`;

export default StyledHeader;
