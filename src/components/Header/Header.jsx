import logo from '/header/full-logo.svg'
import basket from '/header/basket.svg'
import favorites from '/header/favorites.svg'
import user from '/header/user.svg'
import './Header.css'
import {Link} from 'react-router-dom'


export default function Header(){
    return(
        <div className="container">
            <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <nav className="nav">
                <Link to="/catalog" className='header-link'>Catalog</Link>
                <Link to="/" className='header-link'>Sale</Link>
                <Link to="/" className='header-link'>Main Page</Link>
            </nav>
        </header>
        </div>
    )
}