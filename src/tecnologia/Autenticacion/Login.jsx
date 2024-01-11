import React, { useState } from 'react'
import { useAuth } from './Context/Auth'
import '../../Styles/Auth.css'
import { useNavigate } from 'react-router-dom'
export const Login = () => {

    const [MensajeErrorExisteUser, setMensajeErrorExisteUser] = useState(false)
    const [mensajeExisteUser, setMensajeExisteUser] = useState(false)
    const { usuarioExiste } = useAuth()

    const [usuario, setusuario] = useState({
        nombre: '',
        password: ''
    })

    const navigate = useNavigate()

    function handleChange(e) {

        setusuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const user = usuarioExiste(usuario)
        if (user === undefined) {
            setMensajeErrorExisteUser(true)
            setMensajeExisteUser(false)
            return
        }
        setMensajeErrorExisteUser(false)
        setMensajeExisteUser(true)
        navigate('/')
        e.target.reset()

        setusuario({
            nombre: '',
            password: ''
        })
        return
    }

    return (
        <>
            {MensajeErrorExisteUser && <div className='loginError'>Usuario no existe</div>}
            {mensajeExisteUser && <div className='createSuccess'>Usuario existe</div>}
            <form onSubmit={handleSubmit}>

                <h5>Login</h5>
                <input onChange={handleChange} name='nombre' className="form-control inputField" type="text" placeholder='ingrese nombre' />
                <input onChange={handleChange} name='password' className="form-control inputField" type="text" placeholder='ingrese password' />
                <button className='btn btn-success'>Login</button>

            </form>



        </>
    )
}
