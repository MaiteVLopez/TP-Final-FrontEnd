import {Action, ActionCreator, ThunkAction} from "@reduxjs/toolkit";
import Personaje from "../componentes/types/personaje.types";
import { buscarPersonajeAPI } from "../services/personaje.services";

export interface BuscarPersonajesnExitoAction extends Action {
    type: "BUSCAR_PERSONAJES_CON_EXITO",
    personajes: Personaje[]
}

export const BuscarPersonajesnExitoAction = (personajes: Personaje[]) => {
    return {
        type: 'BUSCAR_PERSONAJES_EXITO',
        personajes: personajes
    }
}

export interface BuscarPersonajesErrorAction extends Action {
    type: "BUSCAR_PERSONAJES_CON_ERROR",
    name: string
}

export const BuscarPersonajesnErrorAction = (personajes: Personaje[]) => {
    return {
        type: 'BUSCAR_PERSONAJES_ERROR',
        personajes: personajes
    }
}

export const buscarPersonajes: ActionCreator<BuscarPersonajesAction> = (name: string): any => {
    return {
        type: "BUSCAR_PERSONAJES",
        name: name
    }
}

export interface BuscarPersonajesAction extends  ThunkAction<any,any,any,any> {
    type: "BUSCAR_PERSONAJES",
    name: string
}

export const buscarPersonajesConThunk: ActionCreator<BuscarPersonajesAction> = (name: string): any => {
    return async (dispatch: any, getState: any) => {
        dispatch(buscarPersonajes(name));
        try{
            const results = await buscarPersonajeAPI(name);
            dispatch(BuscarPersonajesnExitoAction(results))
        }catch(e){
            dispatch(BuscarPersonajesnErrorAction('Ocurrio un error'))
        }
    }

}



export type PersonajesAction = | ReturnType<typeof buscarPersonajes> | BuscarPersonajesnExitoAction | BuscarPersonajesErrorAction