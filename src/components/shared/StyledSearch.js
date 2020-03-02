import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  line-height: 18px;
  border-bottom: 2px solid #ced3d7;
  width: ${props => (props.width ? props.width : "100px")};
  input {
    width: 90%;
    font-family: Muli;
    box-sizing: border-box;
    height: 50px;
    border: none;
    outline: none;
    ::placeholder {
      opacity: 1;
    }
  }
`;

export default StyledSearch;
