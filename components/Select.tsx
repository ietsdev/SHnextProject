import { Raza } from "../model/raza.model"

const Select = (props) => {
    return (  
        <div className="form-group">
            <label htmlFor={props.name} className="col-form-label">{props.title}</label> 
            <br/>
           
            <select 
                className={props.className ||  'form-control' }
                id={props.name}
                name={props.name}
                defaultValue={props.defaultValue}
                onChange={props.handleChange}
                placeholder={props.placeholder} 
            >
                {
                    props.razas.map((raza: Raza) => {
                    return (                         
                        <option value={ raza.id }>{ raza.descripcion }</option>
                    )})
                }
                
            </select>
            
        </div>
        )
}

export default Select;