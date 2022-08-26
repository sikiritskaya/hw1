import styled from 'styled-components';

const Info = styled.div`
  text-align: right;
`;

const Information = (props) => {
  return (
    <Info>
      {props.todo} more to do, {props.done} done
    </Info>
  );
};

export default Information;
