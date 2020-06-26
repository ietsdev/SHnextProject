import fetch from 'node-fetch'
import { processEnv } from 'next/dist/lib/load-env-config'
import { Heroe } from '../model/heroe.model';

/*debe validarse el resultado */
export async function getHeroes() : Promise<Heroe[]>{
    let heroes =  new Array<Heroe>();
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    return await fetch('https://localhost:5001/SuperHeroes/Listar') 
           .then(responses => responses.json())  
           .catch(error => { console.log(error); return heroes; } )   
}

/*debe validarse el resultado */
export async function postHeroe(heroe: Heroe) : Promise<Heroe[]>{
    let heroes =  new Array<Heroe>();
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    return await fetch('https://localhost:5001/SuperHeroes/Agregar',{
                method: 'POST',
                headers:{
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(heroe)
            }) 
           .then(responses => responses.json())  
           .catch(error => { console.log(error); return heroes; } )   
}