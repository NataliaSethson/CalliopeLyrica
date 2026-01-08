import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import "./Repertorio.css"
import Button from '@mui/material/Button';

const Repertorio = () => {
    const { handleVolver } = useContext(CartContext)

    return (
        <div className='catedraConteiner'>
            <h2 className='titleRepertorio'>
                Cátedra de Repertorio.
            </h2>
            <h3 className='textRepertorio'>
                La Cátedra de Repertorio es dirigida por el pianista Diego López, egresado del Conservatorio Superior de Música Manuel de Falla. Su labor va más allá del acompañamiento: El profesor López guía a los estudiantes en una comprensión profunda de cada pieza, abordando su contexto histórico, el estilo del compositor y la esencia dramática de la obra.
            <br></br>
            <br></br>
                Con una trayectoria que incluye escenarios de prestigio como el Salón Dorado del Teatro Colón, su enfoque fomenta un aprendizaje integral. En este espacio, la técnica vocal se armoniza con la sensibilidad musical y el conocimiento académico, brindando al intérprete las herramientas necesarias para abordar el gran repertorio lírico con solvencia y madurez artística.
            </h3>
            <img src='./diego.jpg' alt='' className='imgDiego' />
            <Button variant="outlined" onClick={handleVolver} className='buttonVolver'>VOLVER</Button>
        </div>
    )
}

export default Repertorio