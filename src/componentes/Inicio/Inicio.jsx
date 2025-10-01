import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
  return (
    <div>
      <div className="contenedorInicio">
        <img src='./inicio.jpeg' className='imgInicio' alt='Andrea Paola Völk' />
        <p className="textoInicio">
          Andrea Paola Völk reconocida cantante lírica y fundadora de Calliope Lyrica, una academia dedicada a la formación integral en canto lírico.
          Se graduó en 2011 en el Conservatorio Alfredo Luis Schiuma, del partido de General San Martín, bajo la dirección de los maestros Carlos Achá Otterburg y María Cristina Zuccalá en Canto, y de Martha Fornella en Repertorio, quienes dejaron una impronta fundamental en su desarrollo vocal y artístico.

          Su trayectoria se enriqueció con experiencias formativas de alto nivel: en 2008 participó de las Clases Magistrales del Instituto del Teatro Colón, dictadas por la célebre mezzo-soprano española Teresa Berganza, y en 2010 integró el Taller de Ópera impartido por Susana Cardonnet Rojas y Eduardo Casullo. Posteriormente, profundizó su preparación en Canto con Marisa Albano y Marilú Anselmi, y en Repertorio con Susana Cardonnet Rojas y César Tello, consolidando un dominio técnico y expresivo que hoy transmite con pasión y rigor a sus alumnos.
        </p>


      </div>
      <Link to='./informacion' className='linkInicio'>Más sobre mí</Link>
    </div>
  );
}

export default Inicio;


