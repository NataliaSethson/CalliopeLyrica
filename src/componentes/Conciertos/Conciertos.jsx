import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import "./Conciertos.css"


const Conciertos = () => {

    const { handleVolver } = useContext(CartContext)

    return (
        <div className="divConcert">
            <h4 className="textConcert">
                A lo largo de su historia, Calliope Lyrica ha presentado conciertos de alumnos en espacios de relevancia, como la Biblioteca Roffo de CABA, la Parroquia Nuestra Señora del Líbano de San Martín, la Asociación de Panaderos, la Asociación Suabos del Danubio y su propia sede. El repertorio abarca obras de grandes compositores del Barroco, Clasicismo, Romanticismo y Verismo, incluyendo desde obras de cámara hasta arias y escenas de ópera, reflejando la diversidad, riqueza y profundidad del canto lírico.

                Actualmente, los alumnos se preparan para presentar “Le nozze di Figaro” de Mozart en versión concierto, consolidando la formación rigurosa, sensible y apasionada que distingue a la academia.
            </h4>
            <img src='./conciertos.jpeg' alt='' className="imgConcert" />
            <img src='./conciertos2.jpg' alt='' className="imgConcert" />
            <button onClick={handleVolver} className='buttonVolver'>VOLVER</button>
        </div>
    )
}

export default Conciertos