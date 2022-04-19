import { isFunctionLike } from "typescript";

export interface PersonajesState {
    busqueda: String;
    personajes: Personaje[];
    status: "CARGANDO" | "COMPLETO" | "COMPLETO_CON_ERROR"
    error: string | null;
}

//objeto
const initialState: PersonajesState = {
    busqueda: "",
    //guarda las tarjetas de los
    //personajes
    tarjetas: [],
    //inicia como null
    error: null,
    //loading
    status: "COMPLETADO"
}

//toma un satate, que va  aser el state inicial en principio
export default function(state = initialState, action) {
    switch(action.type){
        //describen lo que pasa en la app y cambian el state(los payload)
       case "BUSCAR_PERSONAJES":
            return {
                ...state,
                busqueda: action.name
            }
        case "BUSCAR_PERSONAJES_EXITO":
            return{
                ...state
            }
        case "BUSCAR_PERSONAJES_ERROR":
            return{
                ...state
            }
        default:
            //devuelve el state como se encuentra
            return state;
    }
}