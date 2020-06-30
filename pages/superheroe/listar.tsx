import Container from "../../components/container"
import { ListarHeroes, EliminarHeroe } from "../../services/heroe.service"
import { Heroe } from "../../model/heroe.model"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

const Listar = (props) => {    
	return (
		<Container>
            <h1>Héroes</h1>	
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Alias</th>
                <th>Fecha Aparición</th>
                <th>Raza</th>
                <th key={'accionCol'}>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {             
                props.data.heroes.map((heroe: Heroe) => {                    
                return(<tr key={heroe.id.toString()}>
                    <td>{heroe.id}</td>
                    <td>{heroe.nombre}</td>
                    <td>{heroe.alias}</td>
                    <td>{heroe.fechaAparicion}</td>
                    <td>{heroe.raza.descripcion}</td>
                    <td>
                        <Button href={`${heroe.id}`} className="btn btn-primary" >Modificar</Button>&nbsp;
                        <Button onClick={(e) => EliminarHeroe(heroe.id)} className="btn btn-primary" >Eliminar</Button>
                    </td>
                    </tr>)
                })                    
            }
            </tbody>
        </Table>		
		</Container>
		)
	}
		
     Listar.getInitialProps = async (ctx) => {
	    const heroes = await ListarHeroes()
        return { data: { heroes } }
    } 

    /*export async function getStaticProps(context) {
        const heroes = await ListarHeroes()
        return {
          props: {data: { heroes }}
        }
    }*/

export default Listar
