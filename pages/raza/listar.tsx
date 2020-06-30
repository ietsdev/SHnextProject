import Container from "../../components/container"
import { getRazas, deleteRaza } from "../../services/raza.service"
import { Raza } from "../../model/raza.model"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

const Listar = (props) => {
    let state = { razas : props.razas, refresh : true }
    console.log(state)
    const reload = async(delRaza) => {
        state.razas.pop(delRaza);
    }

    const borrar = async(id:number, e: any) => {
        let delRaza = await deleteRaza(id)
        reload(delRaza);
    }

	return (
		<Container>
        <h1>Razas</h1>	
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Descripcion</th>
                <th key={'accionCol'}>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {                
                state.razas.map((raza: Raza) => {                    
                return(<tr key={raza.id.toString()}>
                    <td>{raza.id}</td>
                    <td>{raza.descripcion}</td>
                    <td><Button onClick={(e) => borrar(raza.id, e)} className="btn btn-primary" >Eliminar</Button></td>
                    </tr>)
                })                    
            }
            </tbody>
        </Table>
		</Container>
		)
}

Listar.getInitialProps = async (ctx) => {
    console.log(ctx);
	const razas = await getRazas()
	return { razas :  razas }
}

export default Listar