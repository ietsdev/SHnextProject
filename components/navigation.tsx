import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Navigation = () => {
	return (
		<Navbar bg="light" expand="lg">
		<Navbar.Brand href="/">Inicio</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
			{/* <Nav.Link href="/">Inicio</Nav.Link> */}
			<NavDropdown title="Raza" id="raza-nav">
				<NavDropdown.Item href="/raza/crear">Crear</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="/raza/listar">Listar</NavDropdown.Item>
			</NavDropdown>
			<NavDropdown title="Heroes" id="heroes-nav">
				<NavDropdown.Item href="/superheroe/crear">Crear</NavDropdown.Item>				
				<NavDropdown.Divider />
				<NavDropdown.Item href="/superheroe/listar">Listar</NavDropdown.Item>
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