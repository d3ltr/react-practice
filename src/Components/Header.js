import React, { Component } from "react";
import { Button, Navbar, Nav, Form, FormControl, Container } from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import Street from '../Pages/Street';
import Void from '../Pages/Void';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top"  collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />React Site Practice
                            
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/street"> Street </Nav.Link>
                                <Nav.Link href="/void"> Void </Nav.Link>
                            </Nav>
                            <Form className="d-flex ms-auto">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/street" element={<Street/>} />
                        <Route exact path="/void" element={<Void/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}