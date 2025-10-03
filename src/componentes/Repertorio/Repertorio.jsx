import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import "./Repertorio.css"

const Repertorio = () => {
    const { handleVolver } = useContext(CartContext)

    return (
        <div className='catedraConteiner'>
            <h2 className='titleRepertorio'>
                Cátedra de Repertorio.
            </h2>
            <h3 className='textRepertorio'>
                Dirigida por el pianista Diego López, quien acompaña al piano y guía a los estudiantes en la comprensión profunda de cada pieza: su contexto histórico, el estilo del compositor y la esencia de la obra, fomentando un aprendizaje integral que armoniza técnica, sensibilidad y conocimiento musical.
            </h3>
            <img src='./diego.jpg' alt='' className='imgDiego' />
            <button onClick={handleVolver} className='buttonVolver'>VOLVER</button>
        </div>
    )
}

export default Repertorio