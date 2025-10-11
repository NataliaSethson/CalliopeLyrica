import { Link } from 'react-router-dom';
import './Inicio.css';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Inicio = () => {
  return (
    <div>
      <div className="contenedorInicio">
        <div className="columnaIzquierda">
          <img src="./inicio.jpeg" className="imgInicio" alt="Andrea Paola Völk" />
        </div>
        <p className="textoInicio">
          Paola Völk reconocida cantante lírica y fundadora de Calliope Lyrica,
          una academia dedicada a la formación integral en canto lírico.
          <br></br>
          Se graduó en 2011 en el Conservatorio Alfredo Luis Schiuma,
          del partido de General San Martín, bajo la dirección de los maestros
          Carlos Achá Otterburg y María Cristina Zuccalá en Canto, y de Martha Fornella en Repertorio,
          quienes dejaron una impronta fundamental en su desarrollo vocal y artístico.
          <br></br>
          Su trayectoria se enriqueció con experiencias formativas de alto nivel:
          en 2008 participó de las Clases Magistrales del Instituto del Teatro Colón,
          dictadas por la célebre mezzo-soprano española Teresa Berganza,
          y en 2010 integró el Taller de Ópera impartido por Susana Cardonnet Rojas y Eduardo Casullo.
          <br></br>
          Posteriormente, profundizó su preparación en Canto con Marisa Albano y Marilú Anselmi,
          y en Repertorio con Susana Cardonnet Rojas y César Tello,
          consolidando un dominio técnico y expresivo que hoy transmite con pasión y rigor a sus alumnos.
        </p>
      </div>
      <div className="contenedorBoton">
        <LinkContainer to="./informacion" className="linkInicio">
          <Button variant="dark">MÁS SOBRE MÍ</Button>
        </LinkContainer>
      </div>

    </div>
  );
}

export default Inicio;


