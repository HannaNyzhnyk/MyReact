import './App.css';
import GoodsList from "./components/GoodsList";
import {Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/css/mainStyle.css";

function App() {
  return (
  <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Shop Metal</Navbar.Brand>
  </Navbar>
    <GoodsList />
  </div>
  )
}

export default App;
