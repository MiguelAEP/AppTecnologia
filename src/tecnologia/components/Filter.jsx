import { useNavigate } from 'react-router-dom';
import '../../styles/Filter.css'
import { useAuth } from '../Autenticacion/Context/Auth';

export const Filter = ({ categoria, setcategoria }) => {
    const { userLogeado, setisAutenticated, setUserLogeado } = useAuth()
    const navigate = useNavigate()
    function handleChange(e) {
        setcategoria(e.target.value);
        navigate('/')

    }

    function cerrarSesion() {
        console.log("hola");
        setisAutenticated(false)
        setUserLogeado({
            nombre: '',
            password: ''
        })
    }

    return (

        < >
            <div className='mt-4 cate'>
                <label htmlFor="category">Categoria</label>
                <select onChange={handleChange} value={categoria}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                    <option value="fragrances">Fragancias</option>
                    <option value='skincare'>Cuidado Piel</option>
                    <option value="groceries">Cereales</option>
                    <option value="home-decoration">Decoracion</option>

                </select>
            </div>
            {!userLogeado.nombre !== '' && userLogeado.password !== '' ? <h5 className='infoLogin mt-4'>Bienvenido : {userLogeado.nombre} </h5> : <></>}
            {!userLogeado.nombre !== '' && userLogeado.password !== '' ? <button className='closeSesion mt-4' onClick={cerrarSesion}>Cerrar Sesion</button> : <></>}
        </ >
    )
}
