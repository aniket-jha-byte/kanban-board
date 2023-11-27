/* styled components is used to write css in javascript file (pure css is written only just it is written in same file of javascript ) */
import {styled} from "styled-components";
import Navbar from "./components/navbar";
import CardsContainer from "./components/CardsContainer";

import { MyContextProvider } from './components/save';

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #ddd;
`

function App() {
  return (
    <MyContextProvider>
      <Container>
        <Navbar/>
        <CardsContainer/>
      </Container>
    </MyContextProvider>
  );
}

export default App;