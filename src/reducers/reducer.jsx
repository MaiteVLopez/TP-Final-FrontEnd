import { isFunctionLike } from "typescript";

//objeto
const initialState = {
    //guarda las tarjetas de los
    //personajes
    tarjetas: [],
    //inicia como null
    error: null,
    //al comuenzo es false puede ser q tarde la api
    //y diga cargando,
    //vuelve true al cargar los datos
    loading: false
}

//toma un satate, que va  aser el state inicial en principio
export default function(state = initialState, action) {
    switch(action.type){
        //describen lo que pasa en la app y cambian el state(los payload)
       
       
       
        default:
            //devuelve el state como se encuentra
            return state;
    }
}