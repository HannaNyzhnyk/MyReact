import './App.css';
import GoodsList from "./components/GoodsList";
import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/css/mainStyle.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Confirmation from './components/Confirmation';
import ContactUs from './components/ContactUs';
import {Button} from "react-bootstrap";
import React from "react";
import {PageContextProvider} from "./components/ContextExample";
import DropdownCR from "./components/DropdownCR";


function App() {
  return <> <Router>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Metal</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav><Link to={'/'}><Button className={'mx-3'}>На главную</Button></Link></Nav>
      <Nav><Link to={'/contact-us'}><Button>Связь</Button></Link></Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  <Switch>
      <Route path="/confirmation">
          <Confirmation />
      </Route>
      <Route path="/contact-us">
          <ContactUs />
      </Route>
      <Route exact path="/">
          <PageContextProvider>
              <GoodsList />
          </PageContextProvider>
      </Route>
  </Switch>
</Router>
</>
}

export default App;
