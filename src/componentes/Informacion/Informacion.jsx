import { useContext, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Informacion.css'
import { CartContext } from '../../Context/CartContext';
import Button from '@mui/material/Button';

const Informacion = () => {
  const [index, setIndex] = useState(0);
  const { handleVolver } = useContext(CartContext)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='divInf'>
      <h3 className='titlInf'>A lo largo de su carrera, Paola Völk ha llevado su voz a escenarios diversos, interpretando obras de cámara y arias de ópera en teatros, auditorios y espacios culturales de gran prestigio.
        <br></br>
        Su versatilidad la ha llevado a presentarse tanto en salas históricas como en ámbitos académicos y comunitarios, siempre transmitiendo la esencia del canto lírico con sensibilidad y fuerza interpretativa.
        <br></br>
        En el terreno operístico, bajo la dirección de la Maestra Clara Mastrango, encarnó personajes de gran intensidad dramática en Suor Angelica y Gianni Schicchi de Giacomo Puccini, roles que consolidaron su presencia escénica y su madurez artística.
        <br></br>
        Cada una de sus interpretaciones refleja no solo su formación y técnica, sino también una pasión inquebrantable por el arte lírico, que convierte cada concierto en una experiencia viva y memorable para el público. </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px" }}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            fade
            interval={2000}
          >
            <Carousel.Item>
              <img
                src="/1.png"
                alt="ZIA PRINCIPESSA"
                className="d-block mx-auto img-fluid"

              />
              <Carousel.Caption>
                <h3>ZIA PRINCIPESSA </h3>
                <p>SUOR ANGELICA - G. PUCCINI</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="/2.png"
                alt="ZITA"
                className="d-block mx-auto img-fluid"

              />
              <Carousel.Caption>
                <h3>ZITA</h3>
                <p> GIANNI SCHICCHI - G. PUCCINI</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="/3.png"
                alt="MADRASTRA"
                className="d-block mx-auto img-fluid"

              />
              <Carousel.Caption>
                <h3>MADRASTRA</h3>
                <p>CENICIENTA - ALEJANDRO CATTANEO</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className='conteinerButtonInf'>
        <Button
          onClick={handleVolver}
          className="buttonVolver"
          disableRipple >
          VOLVER
        </Button>
      </div>
    </div>
  )
}

export default Informacion;
