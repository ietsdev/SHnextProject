import fetch from 'node-fetch'
import { Heroe } from '../model/heroe.model'
import Router from 'next/router'

// Método que obtiene los super heroes
export async function ListarHeroes() : Promise<Heroe[]>{
    let heroes =  new Array<Heroe>();
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    return await fetch('https://localhost:44343/SuperHeroes/Listar') 
           .then(responses => responses.json())  
           .catch(error => { console.log(error); return heroes; } )   
}

// Método que obtiene el detalle de un super heroe
export async function ListarDetalleHeroe(id) : Promise<Heroe>{
  let heroes =  new Heroe();
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  return await fetch('https://localhost:44343/SuperHeroes/Listar/'+ id) 
         .then(responses => responses.json())  
         .catch(error => { console.log(error); return heroes; } )   
}

// Método que agrega un super heroe
export const AgregarHeroe = (heroe: Heroe) => {
  console.log(JSON.stringify(heroe));
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  return fetch('https://localhost:44343/SuperHeroes/Agregar', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(heroe)
  })
  .then(responses => responses.json(), 
          alert("¡Registro Agregado!"),
          Router.push('/superheroe/listar'))  
  .catch(error => { console.log(error); return 'error'; } ) 
}

// Método que modifica un super heroe
export const ModificarHeroe = (heroe: Heroe) => {
  console.log(JSON.stringify(heroe));
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  return fetch('https://localhost:44343/SuperHeroes/Modificar/' + heroe.id, {
    method: 'PUT',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(heroe)
  })
  .then(responses => responses.json(),
            alert("¡Registro Modificado!"),
            Router.push('/superheroe/listar'))  
  .catch(error => { console.log(error); return 'error'; } ) 
}

//Método que elimina un super heroe
export async function EliminarHeroe(id:number) : Promise<Heroe>{
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    return await fetch('https://localhost:44343/SuperHeroes/Eliminar/' + id,
            {
              method: 'DELETE',
              headers:{
                'Content-Type': 'application/json'
              }
            }) 
           .then(responses => responses.json(), 
                    alert("¡Registro Eliminado!"),
                    Router.push('/superheroe/listar'))  
           .catch(error => { console.log(error); return 'error'; } )   
  }