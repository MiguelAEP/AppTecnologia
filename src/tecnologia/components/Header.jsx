import React from 'react'
import '../../Styles/Principal.css'
import { Link, Outlet } from 'react-router-dom'

export const Header = () => {

    return (
        <div>
            <header >
                <h1>EPSON ELECTRO</h1>
                <nav className='navbar '>

                    <ul>
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" >Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Informacion
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to='/action' className="dropdown-item" >Conocenos</Link></li>
                            </ul>

                        </li>



                        <li className="nav-item">
                            <Link to='/login' className="nav-link active" >Login</Link>

                        </li>


                        <li className="nav-item">
                            <Link to='/register' className="nav-link active" >Register</Link>

                        </li>



                        <Outlet />
                    </ul>

                </nav>
            </header>


        </div>
    )
}
