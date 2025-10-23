import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import "./CantoLirico.css"
import Button from '@mui/material/Button';

const CantoLirico = () => {

    const { handleVolver } = useContext(CartContext)

    return (
        <div>
            <div className='catedraConteiner'>

                <h2 className='titleCatedra'>
                    Cátedra de Canto Lírico.
                </h2>
                <h3 className='textCatedra'>
                    A cargo de la mezzosoprano Paola Völk, donde los alumnos reciben un entrenamiento personalizado que combina técnica vocal, interpretación y expresión artística. 
                    <br></br>
                    Se trabaja fonéticamente en diversos idiomas —español, italiano, alemán, francés, inglés y ruso—, aplicando principios de foniatría y cultivando la musicalidad y la precisión en cada obra.
                </h3>
                <img src='./cantoLirico.jpeg' alt='' className='imgCatedra' />
            </div>
            <Button variant="outlined" onClick={handleVolver} className='buttonVolver'>VOLVER</Button>
        </div>
    )
}

export default CantoLirico