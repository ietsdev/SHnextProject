import Container from "../../components/container"
import * as razaService from '../../services/raza.service';
import { Raza } from "../../model/raza.model";
import Input from "../../components/Input";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Crear = (props) => {     
    let model = new Raza();    

    const handleSubmit = (e) => {
        e.preventDefault()       
        let newRaza = model;      
        razaService.Agregar(newRaza).then(async result  =>  { 
          const post = await result.json()
          console.log(post);
        })
        .catch(error => {
          console.log(error);
        });
              
    }

    const handleInput = (e) => {
      let value = e.target.value;
      model[e.target.name] = value; 
     }

    return (
     <Container>
        <Form onSubmit={handleSubmit}>
              <div>
                <Input required title={'Descripción'} name={'descripcion'} handleChange = {handleInput}/>                
                <Button type="submit" className="btn btn-primary" >Crear</Button>
              </div>         
        </Form>
     </Container>
    )
}

Crear.getInitialProps = async (ctx) => {
  console.log(ctx)
	const raza = new Raza()
	return raza;
}


export default Crear
