import styled from "styled-components";

const Form = styled.div`
  display: flex;
  padding-top: 2%;
  width: 100%;
  justify-content: space-between;
`;

const Input = styled.input`
  background-color: rgb(175, 238, 238);
  border: solid 2px;
  border-radius: 20px;
  width: 85%;
  display: flex;
  align-items: center;
  padding: 1% 1%;
`;

const AddButton = styled.button`
  border: solid 2px;
  border-radius: 20px;
  background-color: rgb(255, 250, 250);
  width: 10%;
  cursor: pointer;
`;

const New = () => {
  return (
    <Form>
      <Input type="text" placeholder="Add new" />
      <AddButton type="submit">Add</AddButton>
    </Form>
  );
};

export default New;
