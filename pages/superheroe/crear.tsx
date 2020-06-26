import Container from "../../components/container"
import { Heroe } from "../../model/heroe.model";
import { postHeroe } from "../../services/heroe.service"
import { Form } from "react-bootstrap";
import Input from "../../components/input";

const Crear = (props) => { 
    let model = new Heroe();

    const handleInput = (e) => {
        let value = e.target.value;
        model[e.target.name] = value; 
    }

    const handleSubmit = (e) => {
        e.preventDefault()       
        let newHeroe = model;
        postHeroe(newHeroe);
    }

    return <Container> 
                <Form onSubmit={handleSubmit}>
                    <Input title={'Nombre'} name={'nombre'} handleChange = {handleInput}/>  
                    <Input title={'FechaAparicion'} name={'fechaAparicion'} handleChange = {handleInput}/>  
                    <Input title={'Alias'} name={'alias'} handleChange = {handleInput}/>  
                    <Input title={'Fuerza'} name={'fuerza'} handleChange = {handleInput}/>  
                    <Input title={'Velocidad'} name={'velocidad'} handleChange = {handleInput}/>  
                    <Input title={'Resistencia'} name={'resistencia'} handleChange = {handleInput}/>  
                    <Input title={'Inteligencia'} name={'inteligencia'} handleChange = {handleInput}/>  
                    <Input title={'SuperPoder'} name={'superPoder'} handleChange = {handleInput}/>  
                    <Input type={'button'} className={'btn btn-info'} value='Crear' />
                </Form> 
            </Container>
}

Crear.getInitialProps = async (ctx) => {
     console.log(ctx)
     const heroe = new Heroe()
     return heroe;
  }

export default Crear