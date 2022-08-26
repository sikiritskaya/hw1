import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Input = styled.input`
  background-color: rgb(175, 238, 238);
  border: solid 2px;
`;

const Search = () => {
  return (
    <Container>
      <Input type="text" placeholder="type to search" />
    </Container>
  );
};

export default Search;
