import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import "./Conciertos.css"
import Button from '@mui/material/Button';

const Conciertos = () => {
    const { handleVolver } = useContext(CartContext)

    return (
        <div className="divConcert">
            <h4 className="textConcert">
                Desde su fundación, Calliope Lyrica ha mantenido un compromiso constante con la práctica escénica, llevando el talento de sus alumnos a espacios de relevancia cultural como la Biblioteca Roffo (CABA), la Parroquia Nuestra Señora del Líbano (San Martín), la Asociación Suabos del Danubio y la Asociación de Panaderos, además de las galas realizadas en nuestra propia sede.
                <br></br>
                <br></br>
                Nuestra propuesta académica recorre la historia de la música desde el Barroco y el Clasicismo hasta el Romanticismo y el Verismo, abordando desde la intimidad de la música de cámara hasta la complejidad dramática de las arias y escenas de ópera.
                <br></br>
                <br></br>
                Como culminación de un proceso de estudio riguroso, el pasado mes de noviembre la academia alcanzó un nuevo estándar de excelencia con la exitosa puesta de “Le nozze di Figaro” de Mozart en versión concierto. Esta producción reafirma la identidad de Calliope Lyrica: un espacio de formación integral donde la precisión técnica y la pasión artística se encuentran para dar vida al gran repertorio lírico.
            </h4>


            <div className="imgContConciertos">
                <img src='/conciertos.jpeg' alt='' className="imgConcert" />
                <img src='/conciertos2.jpg' alt='' className="imgConcert" />
                <img src='/conciertos3.jpeg' alt='' className="imgConcert" />
                <img src='/camila.jpg' alt='' className="imgConcert" />
            </div>

            <Button
                onClick={handleVolver}
                className='buttonVolver'
                disableRipple
            >
                VOLVER
            </Button>
        </div>
    )
}

export default Conciertos