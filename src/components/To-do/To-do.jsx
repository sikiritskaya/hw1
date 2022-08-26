import styled from "styled-components";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useState } from "react";

const Container = styled.div`
  border: solid 1px rgb(123, 104, 238);
  border-radius: 10px;
  display: flex;
  width: 100%;
  margin-bottom: 1%;
`;

const TaskContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const Task = styled.span`
  cursor: pointer;
`;

const CrossTask = styled.span`
  text-decoration: line-through;
`;

const ButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
`;

const Delete = styled(DeleteForeverIcon)`
  cursor: pointer;
  color: rgb(255, 0, 0);
`;

const Important = styled(PriorityHighIcon)`
  cursor: pointer;
  color: rgb(0, 100, 0);
`;

const ToDo = (props) => {
  const [toggle, setToggle] = useState(true);
  const HandleStrike = () => {
    setToggle((value) => !value);
  };

  return (
    <Container>
      <TaskContainer>
        <Task onClick={HandleStrike}>
          {toggle ? (
            <>Task {props.num}</>
          ) : (
            <CrossTask>Task {props.num}</CrossTask>
          )}
        </Task>
      </TaskContainer>
      <ButtonsContainer>
        <Delete />
        <Important />
      </ButtonsContainer>
    </Container>
  );
};

export default ToDo;
