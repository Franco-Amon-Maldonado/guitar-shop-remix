import { Link, useLocation } from "@remix-run/react";
import Logo from '../../public/img/logo.svg'

function Header() {
    const location = useLocation()
    return ( 
        <header className="header">

            <div className="contenedor barra">
                <Link to="/">
                    <img className="logo"  src={Logo} alt="logo"/>
                </Link>

                <nav className="navegacion">
                    <Link className={location.pathname === '/' ? 'active' : ''} to='/'>Inicio</Link>       
                    <Link className={location.pathname === '/nosotros' ? 'active' : ''} to='/nosotros'>Nosotros</Link>       
                    <Link className={location.pathname === '/blog' ? 'active' : ''} to='/blog'>Blog</Link>       
                    <Link className={location.pathname === '/tienda' ? 'active' : ''} to='/tienda'>Tienda</Link>       
                </nav>

            </div>

        </header>
     )
}

export default Header;