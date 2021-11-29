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
import { FaHeart } from 'react-icons/fa'

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
            <Navbar collapseOnSelect variant="light" expand="md">
                <Container>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="h-100 align-items-center justify-content-between w-100">

                        <form className="w-75 shadow-sm" onSubmit={handleClick}>
                            <InputGroup>
                                <InputGroup.Text className="icon"><FcBinoculars /></InputGroup.Text>
                                <FormControl placeholder="Find Something..." name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                                <InputGroup.Text className="button"><Button size="sm" className="px-4" type="submit" value="Search">Search</Button></InputGroup.Text>
                            </InputGroup>
                        </form>
                        <BsBellFill className="d-none d-md-block text-primary fs-3" />
                        <NavDropdown
                            className="d-none d-md-block btn btn-sm"
                            id="nav-dropdown-dark-example"
                            title="John Doe"
                            menuVariant="dark"
                            drop='start'
                        >
                            <NavDropdown.Item href="#">... <FaHeart className="text-danger" /> liked your ...</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">... <FaHeart className="text-info" /> liked your ...</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">... <FaHeart className="text-success" /> liked your ...</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">... <FaHeart className="text-danger" /> liked your ...</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </>
    )
}


export default Header