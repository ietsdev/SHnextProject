import Container from "../../components/container"
import { razaService } from "../../services/raza.service";
import { Raza } from "../../model/raza.model";
import Input from "../../components/Input";

const Crear = (props) => { 
    console.log(props);
    let model = new Raza();
    let service = new razaService();

    const handleSubmit = (e) => {
        e.preventDefault()       
        let newRaza = model;      
        service.addRaza(newRaza).then(async result  =>  { 
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
        <form onSubmit={handleSubmit}>
              <div>
                <Input title={'Descripción'} name={'descripcion'} handleChange = {handleInput}/>
              </div>
          <input type='submit' value='Submit' />
        </form>
     </Container>
    )
}

Crear.getInitialProps = async (ctx) => {
  console.log(ctx)
	const raza = new Raza()
	return raza;
}


export default Crear
