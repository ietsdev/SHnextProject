import Container from "../../components/container"
import { Heroe } from "../../model/heroe.model"
import * as heroeService from '../../services/heroe.service'
import { Form } from "react-bootstrap"
import Input from "../../components/Input"
import { Raza } from "../../model/raza.model"

const Crear = (props) => { 
    let modelHeroe = new Heroe();
    let modelRaza = new Raza();

    const handleSubmit = (e) => {
        e.preventDefault()       
        let newHeroe = modelHeroe;
        newHeroe.raza = modelRaza;
        newHeroe.vigente = true;
        heroeService.AgregarHeroe(newHeroe).then(async result  =>  { 
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
                    <Input title={'Nombre'} name={'nombre'} handleChange = {handleInput}/>  
                    <Input type={'date'} title={'FechaAparicion'} name={'fechaAparicion'} handleChange = {handleInput}/>  
                    <Input title={'Alias'} name={'alias'} handleChange = {handleInput}/>  
                    <Input title={'Fuerza'} name={'fuerza'} handleChange = {handleInput}/>  
                    <Input title={'Velocidad'} name={'velocidad'} handleChange = {handleInput}/>  
                    <Input title={'Resistencia'} name={'resistencia'} handleChange = {handleInput}/>  
                    <Input title={'Inteligencia'} name={'inteligencia'} handleChange = {handleInput}/>  
                    <Input title={'SuperPoder'} name={'superPoder'} handleChange = {handleInput}/>
                    <Input title={'Raza'} name={'raza'} handleChange = {handleInput} />
                   
                    <Input type={'submit'} className={'btn btn-info'} value='Crear' />
                </Form> 
            </Container>
}

Crear.getInitialProps = async (ctx) => {
     const heroe = new Heroe()
     return heroe;
  }

export default Crear