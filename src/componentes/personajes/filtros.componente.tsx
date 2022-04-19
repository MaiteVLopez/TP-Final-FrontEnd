import { useDispatch, useSelector } from 'react-redux';
import './filtros.css';
import { buscarPersonajes } from '../../actions/personajesActions';
import { useEffect } from 'react';

const Filtros = (): JSX.Element => {
    const dispatch = useDispatch();

    const busqueda = useSelector(state => state.personaje.busqueda)

    useEffect(()=>{
        dispatch(buscarPersonajesConThunk());
    },[])

    return <div className="filtros">
        <div>
            <label htmlFor="nombre">Filtrar por nombre:</label>
            <input value = {busqueda} type="text" onChange={(e)=> dispatch(buscarPersonajes(e.target.value))} 
                   placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" autoFocus={true}/>
        </div>
        
    </div>
}

export default Filtros;