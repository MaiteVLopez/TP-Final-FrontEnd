import { Reducer } from "@reduxjs/toolkit";
import { PersonajesAction } from "../actions/personajesActions";
import Personaje from "../componentes/types/personaje.types";

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
    personajes: [],
    //loading
    status: "COMPLETO",
    //inicia como null
    error: null
}

//toma un satate, que va  aser el state inicial en principio
const reducer: Reducer<PersonajesState, PersonajesAction> = 
(state = initialState, action): PersonajesState => {
    switch(action.type){
        //describen lo que pasa en la app y cambian el state(los payload)
       case "BUSCAR_PERSONAJES":
            return {
                ...state,
                status: "COMPLETO",
                busqueda: action.name
            }
        case "BUSCAR_PERSONAJES_CON_EXITO":
            return{
                ...state
            }
        case "BUSCAR_PERSONAJES_CON_ERROR":
            return{
                ...state,
                status: "COMPLETO_CON_ERROR"
            }
        default:
            //devuelve el state como se encuentra
            return state;
    }
}

export default reducer;