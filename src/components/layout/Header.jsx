import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FcBinoculars } from 'react-icons/fc'
import { BsBellFill } from 'react-icons/bs'

/**
* @author traj3ctory
* @function Header
**/

const Header = ({ find, searchPhoto }) => {
    const [search, setSearch] = useState('');

    const handleClick = (evt) => {
        evt.preventDefault();
        find(search);
        searchPhoto(search);
        setSearch('');
    }

    return (
        <>
            <Navbar collapseOnSelect className="shadow-sm" bg="light" variant="light" expand="md">
                <Container>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="h-100 align-items-center justify-content-between w-100">

                        <form className="w-75" onSubmit={handleClick}>
                            <InputGroup>
                                <InputGroup.Text className="icon"><FcBinoculars /></InputGroup.Text>
                                <FormControl placeholder="Find Something..." name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                                <InputGroup.Text className="button"><Button size="sm" className="px-4" type="submit" value="Search">Search</Button></InputGroup.Text>
                            </InputGroup>
                        </form>
                        <BsBellFill className="d-none d-md-block" />
                        <NavDropdown
                            className="d-none d-md-block"
                            id="nav-dropdown-dark-example"
                            title="John Doe"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </>
    )
}


export default Header