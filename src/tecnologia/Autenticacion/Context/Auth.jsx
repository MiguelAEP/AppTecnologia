import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    let userArray
    const [almacenarUsuario, setalmacenarUsuario] = useState(getLocal())

    const [isAutenticated, setisAutenticated] = useState(false)

    const [userLogeado, setUserLogeado] = useState({
        nombre: '',
        password: ''
    })

    function crearUsuario(usuario) {
        if (almacenarUsuario) {
            setalmacenarUsuario([...almacenarUsuario, usuario])
            setisAutenticated(false)
        }
    }

    useEffect(() => {
        localStorage.setItem('usuario', JSON.stringify(almacenarUsuario))
    }, [almacenarUsuario])


    function getLocal() {
        userArray = JSON.parse(localStorage.getItem('usuario'))
        if (userArray) {
            return userArray
        } else {
            return []
        }
    }


    useEffect(() => {

        setalmacenarUsuario(getLocal())

    }, [])




    function usuarioExiste(usuario) {

        const existe = almacenarUsuario.find(elemento => {
            return elemento.nombre === usuario.nombre && elemento.password === usuario.password
        })
        console.log(existe);

        if (existe) {
            setisAutenticated(true)
            setUserLogeado(usuario)
            return existe
        }
        setisAutenticated(false)
        setUserLogeado({
            nombre: '',
            password: ''
        })
        return existe
    }

    return (<AuthContext.Provider value={{
        crearUsuario, almacenarUsuario, usuarioExiste, isAutenticated, userLogeado, setUserLogeado, setisAutenticated
    }}
    >
        {children}
    </AuthContext.Provider>)


}

export const useAuth = () => useContext(AuthContext)