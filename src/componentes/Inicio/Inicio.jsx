import './Inicio.css';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from "react";



const Inicio = () => {

  useEffect(() => {
  const el = document.querySelector(".calliopeH2");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
      }
    },
    { threshold: 0.3 }
  );

  if (el) observer.observe(el);

  return () => observer.disconnect();
}, []);

  return (
    <div>
      <div className="contenedorInicio">
        <div className="columnaIzquierda">
          <img src="./inicio.jpeg" className="imgInicio" alt="Andrea Paola Völk" />
          <div className="botonSobreImagen">
            <LinkContainer to="./informacion">
              <Button size="lg" className="btn-colon-custom">
                SOBRE MÍ
              </Button>
            </LinkContainer>
          </div>
        </div>
        <div className="columnaDerecha">
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
      </div>
      <p className='calliopeH2'>
        El nombre de la academia rinde homenaje a Calliope, la musa griega de la poesía épica y la elocuencia, cuya esencia se traduce como "la de la voz hermosa". Considerada por la mitología como la inventora del canto y madre de Orfeo, su legado representa la unión perfecta entre el don musical y la maestría poética.
        <br></br>
        <br></br>
        En Calliope Lyrica, este espíritu guía nuestra filosofía de enseñanza. Creemos que el canto lírico es un arte integral donde la historia, la técnica y la emoción deben converger. Nuestro compromiso es acompañar a cada alumno en el descubrimiento de su propia voz, brindando las herramientas necesarias para transformar la disciplina en una expresión artística profunda, auténtica y en constante armonía.
      </p>
      <div className="banner-institucional">
        <Link to="/CantoLirico" className=" overlay-link" />
        <img src='/canto.png' alt='' />
      </div>
      <div>
        <div className="imgContConciertos2">
          <img src='/conciertos.jpeg' alt='' className="imgConcert2" />
          <img src='/conciertos2.jpg' alt='' className="imgConcert2" />
          <img src='/conciertos3.jpeg' alt='' className="imgConcert2" />
        </div>
      </div>

      <div className="banner-institucional">
        <img src='/repertorio.png' alt='' />
        <Link to="/Repertorio" className="overlay-link" />
      </div>

      <div className='conteinerAlumnos2'>
        <img src="./alumnos.jpg" alt='' className='alumnos2' />
        <img src="./alumnos2.jpg" alt='' className='alumnos2' />
      </div>

    </div>
  );
}

export default Inicio;


