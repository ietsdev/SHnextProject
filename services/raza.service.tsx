import fetch from 'node-fetch'
import { Raza } from '../model/raza.model';

export const Agregar = (raza: Raza) => {
  console.log(JSON.stringify(raza));
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  return fetch('https://localhost:44343/Razas/Agregar', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(raza)
  })  
}


/*debe validarse el resultado */
export async function getRazas() : Promise<Raza[]>{
  let heroes =  new Array<Raza>();
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  return await fetch('https://localhost:44343/Razas/Listar') 
         .then(responses => responses.json())  
         .catch(error => { console.log(error); return heroes; } )   
}

/*debe validarse el resultado */
export async function deleteRaza(id:number) : Promise<Raza>{
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  return await fetch('https://localhost:44343/Razas/Eliminar/' + id,
          {
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json'
            }
          }) 
         .then(responses => responses.json())  
         .catch(error => { console.log(error); return 'error'; } )   
}