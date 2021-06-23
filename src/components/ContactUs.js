import React from "react";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function ContactUs() {
    return <Container className={'text-center'}>
        <h2>Please contact us</h2>
        <Link to={'/'}><Button variant={'warning'}>Go To Main</Button></Link>
    </Container>
}

export default ContactUs;