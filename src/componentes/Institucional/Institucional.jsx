import { Link } from 'react-router-dom'
import './Institucional.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Institucional = () => {
  const { handleVolver } = useContext(CartContext)


  return (
    <div>
      <div className='divContainerAlumnos'>
        <p className='pAlumnos'>En Calliope Lyrica, la mezzosoprano Paola Völk ha concebido un espacio donde la técnica, la sensibilidad y la emoción se encuentran para dar forma a intérpretes completos. Cada alumno es invitado a descubrir su propia voz, a explorar la riqueza del canto lírico y a conectar con la música de manera profunda, auténtica y apasionada. Aquí, aprender no es solo dominar la técnica: es vivir el arte, disfrutarlo y transformarlo en expresión propia.</p>
        <div>
          <img src="./alumnos.jpg" alt='' className='alumnos' />
          <img src="./alumnos2.jpg" alt='' className='alumnos' />
        </div>
      </div>
      <br></br>
      <p className='calliopeH'>
        El nombre de la academia rinde homenaje a Calliope, la musa griega de la poesía épica y de la voz hermosa, considerada inventora del canto y madre de Orfeo, portador del don musical y poético. Este espíritu inspirador está presente en cada clase, en cada interpretación y en cada proyecto, recordando que el canto lírico es un arte que une historia, emoción y técnica en perfecta armonía.
      </p>
      <button onClick={handleVolver} className='buttonVolver'>VOLVER</button>

    </div>
  )
}

export default Institucional