import React from "react";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Confirmation() {
    return <Container className={'text-center'}>
        <h2>Please confirm your order</h2>
        <Link to={'/'}><Button>Back</Button></Link>
    </Container>
}

export default Confirmation;