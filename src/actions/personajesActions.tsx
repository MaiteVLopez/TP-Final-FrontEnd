import {Action, ActionCreator, ThunkAction} from "@reduxjs/toolkit";
import Personaje from "../componentes/types/personaje.types";
import { buscarPersonajeAPI } from "../services/personaje.services";

export interface BuscarPersonajesAction extends Action {
    type: "BUSCAR_PERSONAJES",
    name: string
}

export interface BuscarPersonajesnExitoAction extends Action {
    type: "BUSCAR_PERSONAJES_CON_EXITO",
    personajes: Personaje[]
}

export interface BuscarPersonajesErrorAction extends Action {
    type: "BUSCAR_PERSONAJES_CON_ERROR",
    name: string
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
        try{
            const response = await buscarPersonajeAPI(name);
        }catch(e){

        }
    }

}



export type PersonajesAction = | ReturnType<typeof buscarPersonajes> | BuscarPersonajesnExitoAction | BuscarPersonajesErrorAction