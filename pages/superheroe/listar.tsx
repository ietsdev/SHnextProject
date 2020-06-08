import Container from "../../components/container"
import { getHeroes } from "../../services/heroe.service"
import { Heroe } from "../../model/heroe.model"

const Listar = (props) => {
	return (
		<Container>
            <h1>Héroes</h1>		
            <ul className="list-group">{
                props.data.heroes.map((oHeroe: Heroe) => {
                    return(	<li>
                        <h5 className="list-group-item">{oHeroe.nombre}</h5>
                        <h5 className="list-group-item list-group-item-action">{oHeroe.alias}</h5>
                        </li>)
                    })
                }
            </ul>			
		</Container>
		)
	}
		
    Listar.getInitialProps = async (ctx) => {
	const heroes = await getHeroes()
	return { data: { heroes } }
}

export default Listar
