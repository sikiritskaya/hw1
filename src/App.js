import styled from "styled-components";
import Filters from "./components/Filters/Filters";
import Information from "./components/Information/Information";
import New from "./components/New/New";
import Search from "./components/Search/Search";
import Title from "./components/Title/Title";
import ItemList from "./components/To-do/ItemList";

const Wrapper = styled.section`
margin: 0 auto;
width: 50%;
background-color: rgb(1255, 228, 181, 0.5);
padding: 2% 0;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 85%;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Title />
        <Information todo={2} done={1} />
        <Search />
        <Filters />
        <ItemList />
        <New />
      </Container>
    </Wrapper>
  );
}

export default App;
