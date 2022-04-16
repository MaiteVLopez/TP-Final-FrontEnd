import { useDispatch } from 'react-redux';
import './filtros.css';

const Filtros = () => {
    const dispatch = useDispatch();

    return <div className="filtros">
        <div>
            <label for="nombre">Filtrar por nombre:</label>
            <input type="text" onChange={(e)=> distpach(buscarPersonajes(e.target.value))} 
                   placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" autoFocus={true}/>
        </div>
        
    </div>
}

export default Filtros;