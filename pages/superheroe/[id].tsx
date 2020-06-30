import Container from "../../components/container"
import { Heroe } from "../../model/heroe.model"
import {ListarDetalleHeroe, ModificarHeroe} from '../../services/heroe.service'
import { Form } from "react-bootstrap"
import Input from "../../components/Input"
import { Raza } from "../../model/raza.model"
import { useRouter } from "next/router"

const Modificar = (props) => {
    let modelHeroe: Heroe = props.data.heroes[0];
    let modelRaza = new Raza();
    const router = useRouter()
    const {id} = router.query

    const handleSubmit = (e) => {
        e.preventDefault()       
        let newHeroe = modelHeroe;
        newHeroe.raza = modelRaza;
        newHeroe.vigente = true;
        newHeroe.id = parseInt(id.toString());
        ModificarHeroe(newHeroe).then(async result  =>  { 
          const post = await result
          console.log(post);
        })
        .catch(error => {
          console.log(error);
        });         
    }

    const handleInput = (e) => {
      let target = e.target.getAttribute('name');
      let value = e.target.value;
      switch (target) {
        case 'fuerza':
        case 'velocidad':
        case 'resistencia':
        case 'inteligencia':
          modelHeroe[e.target.name] = parseInt(value);
          break;
        case "raza":
          modelRaza.id = parseInt(value);
          modelRaza.descripcion = "test";
          break;
        default:
          value = e.target.value;
          modelHeroe[e.target.name] = value;
      }
    }

    return <Container>
            
                <Form onSubmit={handleSubmit}>
                    
                    <Input defaultValue={modelHeroe.nombre} title={'Nombre'} name={'nombre'} handleChange = {handleInput}/>  
                    <Input defaultValue={modelHeroe.fechaAparicion} type={'text'} title={'FechaAparicion'} name={'fechaAparicion'} handleChange = {handleInput}/>  
                    <Input defaultValue={modelHeroe.alias} title={'Alias'} name={'alias'} handleChange = {handleInput}/>  
                    <Input defaultValue={modelHeroe.fuerza} title={'Fuerza'} name={'fuerza'} handleChange = {handleInput}/>  
                    <Input defaultValue={modelHeroe.velocidad} title={'Velocidad'} name={'velocidad'} handleChange = {handleInput}/>  
                    <Input defaultValue={modelHeroe.resistencia} title={'Resistencia'} name={'resistencia'} handleChange = {handleInput}/>  
                    <Input defaultValue={modelHeroe.inteligencia} title={'Inteligencia'} name={'inteligencia'} handleChange = {handleInput}/>  
                    <Input defaultValue={modelHeroe.superPoder} title={'SuperPoder'} name={'superPoder'} handleChange = {handleInput}/>
                    <Input defaultValue={modelHeroe.raza.descripcion} title={'Raza'} name={'raza'} handleChange = {handleInput} />
                   
                    <Input type={'submit'} className={'btn btn-info'} value='Crear' />
                </Form> 
            </Container>
}

Modificar.getInitialProps = async (ctx) => {
  const heroes = await ListarDetalleHeroe(ctx.query.id);
    
	return { data: { heroes } }
}

export default Modificar