import Container from "../../components/container"
import { Heroe } from "../../model/heroe.model";
import Input from "../../components/Input";

const Crear = (props) => { 
    let model = new Heroe();

    const handleInput = (e) => {
        let value = e.target.value;
        model[e.target.name] = value; 
    }

    const handleSubmit = (e) => {
        e.preventDefault()       
        let newRaza = model;
    }

    return 
    (<Container> 
        <form onSubmit={handleSubmit}>
            <Input title={'Descripción'} name={'descripcion'} handleChange = {handleInput}/>  
            <input type='submit' value='Submit' />
        </form> 
    </Container>)
}

Crear.getInitialProps = async (ctx) => {
     console.log(ctx)
     const heroe = new Heroe()
     return heroe;
  }

export default Crear