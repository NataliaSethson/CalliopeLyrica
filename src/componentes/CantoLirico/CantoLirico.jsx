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
                    La Cátedra de Canto Lírico está a cargo de la mezzosoprano Paola Völk y se enfoca en el desarrollo profesional de la voz a través de un entrenamiento personalizado. El programa integra tres pilares fundamentales: la técnica vocal sólida, la interpretación estilística y la presencia escénica, adaptándose a las necesidades específicas de cada registro y nivel.
                    <br></br>
                    <br></br>
                    La excelencia en el canto lírico requiere un dominio absoluto del idioma; por ello, realizamos un exhaustivo trabajo fonético en español, italiano, alemán, francés, inglés y ruso. Este estudio se complementa con la aplicación de principios de foniatría, garantizando que el alumno alcance su máximo potencial sonoro bajo estándares de salud vocal y eficiencia técnica.
                    <br></br>
                    <br></br>
                    En este espacio, cultivamos la precisión musical y el rigor artístico necesarios para abordar el repertorio profesional. Buscamos que cada estudiante logre una interpretación equilibrada, donde la pureza del sonido y el respeto por la partitura se unan en una ejecución de excelencia.
                </h3>
                <img src='./cantoLirico.jpeg' alt='' className='imgCatedra1' />
            </div>
            <Button variant="outlined" onClick={handleVolver} className='buttonVolver'>VOLVER</Button>
        </div>
    )
}

export default CantoLirico