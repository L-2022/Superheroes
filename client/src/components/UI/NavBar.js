import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ADD_HERO_ROUTE, HEROES_ROUTE } from "../../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory, NavLink } from "react-router-dom";

const NavBar = observer(() => {
  const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={HEROES_ROUTE}>
          <span> Superhero </span>
        </NavLink>
        <Nav className="ml-auto" style={{ color: "white" }}>
          <Button
            variant={"outline-light"}
            onClick={() => history.push(ADD_HERO_ROUTE)}
          >
            Add Hero
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
