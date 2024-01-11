import React, { useState } from 'react'
import '../../styles/Auth.css'
import { useAuth } from './Context/Auth'
import { useNavigate } from 'react-router-dom'
export const Register = () => {

    const { crearUsuario } = useAuth()
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
        if (usuario) {
            crearUsuario(usuario)
            navigate('/login')
            e.target.reset()

            setusuario({
                nombre: '',
                password: ''
            })
            return
        }
        return
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <h5>Registro</h5>
                <input onChange={handleChange} name='nombre' className="form-control inputField" type="text" placeholder='ingrese nombre' />
                <input onChange={handleChange} name='password' className="form-control inputField" type="text" placeholder='ingrese password' />
                <button className='btn btn-success'>Registro</button>
            </form>

        </>
    )
}
