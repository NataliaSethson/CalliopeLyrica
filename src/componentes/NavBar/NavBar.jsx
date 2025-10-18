import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navContainer'>
      <Link to="/" className='logoLink'>
        <img src='/C.png' alt='' className="banner" />
      </Link>
      <div className='navLinks'>
        <nav >
          <ul>
            <li>
              <Link to='/institucional'> INSTITUCIONAL</Link>
            </li>
            <li>
              <Link to='/CantoLirico'> CÁTEDRA DE CANTO LÍRICO</Link>
            </li>
            <li>
              <Link to='/Repertorio'> CÁTEDRA DE REPERTORIO</Link>
            </li>
            <li>
              <Link to='/Conciertos'> CONCIERTOS</Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default NavBar