const Input = (props) => {
    return (  
        <div className="form-group">
            <label htmlFor={props.name} className="col-form-label">{props.title}</label> 
            <br/>         
            <input
            className={props.className ||  'form-control' }
            id={props.name}
            name={props.name}
            type={props.type}
            defaultValue={props.defaultValue}
            onChange={props.handleChange}
            placeholder={props.placeholder} 
            />
        </div>
        )
}

export default Input;