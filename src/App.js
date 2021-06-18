import './App.css';
import GoodsList from "./components/GoodsList";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/css/mainStyle.css";

function App() {
  return (
  <Container>
    <GoodsList />
  </Container>
  )
}

export default App;
