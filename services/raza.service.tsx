import fetch from 'node-fetch'
import { processEnv } from 'next/dist/lib/load-env-config'
import { Heroe } from '../model/heroe.model';
import { Raza } from '../model/raza.model';

export function razaService() {
   this.addRaza = function(raza: Raza) {
    console.log(JSON.stringify(raza));
      process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
      return fetch('https://localhost:44343/Razas/Agregar', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(raza)
      })
     
  };
}

export default razaService