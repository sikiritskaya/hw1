import styled from "styled-components";

const Buttons = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  margin: 0 auto;
  width: 60%;
  justify-content: space-between;
`;

const Button = styled.button`
  border-radius: 20px;
  width: 25%;
  cursor: pointer;
  border: solid 2px;
  padding: 4%;
  background-color: rgb(255, 250, 250);
`;

const Filters = () => {
  return (
    <Buttons>
      <Button>All</Button>
      <Button>Important</Button>
      <Button>Done</Button>
    </Buttons>
  );
};

export default Filters;
