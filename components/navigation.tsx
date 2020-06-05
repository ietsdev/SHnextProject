import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Navigation = () => {
	return (
		<Navbar bg="light" expand="lg">
		<Navbar.Brand href="/">Home</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
			<Nav.Link href="/">Inicio</Nav.Link>
			<Nav.Link href="/superheroe/crear">Ingreso Super Heroe</Nav.Link>
			<Nav.Link href="/raza/crear">Ingreso raza</Nav.Link>
			<NavDropdown title="Ejemplos" id="basic-nav-dropdown">
				<NavDropdown.Item href="/about">ejemplo 1</NavDropdown.Item>
				<NavDropdown.Item href="/index">ejemplo 2</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="/raza/crear">ejemplo 3</NavDropdown.Item>
			</NavDropdown>
			</Nav>
			<Form inline>
			<FormControl type="text" placeholder="Search" className="mr-sm-2" />
			<Button variant="outline-success">Buscar</Button>
			</Form>
		</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation