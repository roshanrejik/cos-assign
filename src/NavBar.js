import { Navbar,Container,Offcanvas,NavDropdown,Button,Form,FormControl,Nav } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"
import { removeToken } from './features/account/accountSlice'
import About from './features/account/About'
import Admin from "./features/admin/Admin"
import Home from "./features/account/Home"
import Client from "./features/client/Client"
const NavBar = (props) => {
    const dispatch=useDispatch()
    const handleLogout=()=>{
        localStorage.removeItem('token')
        dispatch(removeToken())
    }
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand}>
                    <Container fluid>
                        <Navbar.Brand href="https://www.costrategix.com/"><img  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1509744035/cpoet0ffvfii8bx9xbc8.png"
                         alt="Cos" style={{"width": "300px" ,"height": "50px", "objectFit": "none"}}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                   <div style={{'fontSize':'40px'}}><span style={{'fontWeight':'bold','color':'#00BFFF'}}>CO</span><span>Strategix</span></div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to={'/'} style={{'fontSize':'20px','fontWeight':'bold'}} >Home</Nav.Link>
                                    <Nav.Link as={Link} to={'/about'} style={{'fontSize':'20px','fontWeight':'bold'}}>About</Nav.Link>
                                    <NavDropdown
                                        title="Option"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        style={{'fontSize':'20px','fontWeight':'bold'}}
                                    >
                                        <NavDropdown.Item as={Link} to={'/admin'} >Admin</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={'/client'} >Client</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-primary" className="me-2">Search</Button>
                                </Form>
                                <Button variant="outline-danger" onClick={handleLogout} >LogOut</Button>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <Route path={'/admin'} component={Admin}/>
            <Route path={'/client'} component={Client}/>
            <Route path={'/about'} exact component={About}/>
            <Route path={'/'} exact component={Home}/>
        </>        
    )
}
export default NavBar