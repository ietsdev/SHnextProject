import fetch from 'node-fetch'
import { processEnv } from 'next/dist/lib/load-env-config'
import { Heroe } from '../model/heroe.model';

export async function getHeroes(){
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const res = await fetch('https://localhost:44343/SuperHeroes/Listar')
    var data = Array<Heroe>()
    data = await res.json()    

    return data
}