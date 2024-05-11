import React from 'react'
import "./navbar.css"


const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Nuntius</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav me-auto mb-2'>
                        <li className='nav-item'>
                            <a className='nav-link' href="">Chats</a>
                            <a className='nav-link' href="">Perfil</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default NavBar