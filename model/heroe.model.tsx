import { Raza } from './raza.model';

//Clase modelo que representa Heroe
export class Heroe {

   //Obtiene o asigna id
   id: number;

   //Obtiene o asigna nombre
   nombre: string;

   //Obtiene o asigna fechaAparicion
   fechaAparicion: string;

   //Obtiene o asigna alias
   alias: string;

   //Obtiene o asigna fuerza
   fuerza: number;

   //Obtiene o asigna velocidad
   velocidad: number;

   //Obtiene o asigna resistencia
   resistencia: number;

   //Obtiene o asigna inteligencia
   inteligencia: number;

   //Obtiene o asigna superPoder
   superPoder: string;

   //Obtiene o asigna vigente
   vigente: boolean;   

   //Obtiene o asigna Raza
   raza: Raza;

   //maneja el id de raza
   razaId: number;
}
