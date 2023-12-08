import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
const StyledApp = styled.div`
  padding: 1rem 2rem;
  background-color: red;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button
              variation="primary"
              sizes="large"
              onClick={() => alert("check in")}
            >
              Check In
            </Button>
            <Button
              variation="secondary"
              sizes="small"
              onClick={() => alert("check out")}
            >
              Check Out
            </Button>
          </div>
        </Row>

        <Row>
          <Heading as="h3">Form</Heading>
          <form>
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="Number of guests" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
