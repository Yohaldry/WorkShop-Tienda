  
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {MainDetalles, ProfileM, BX} from '../Styles/Rejistro_Styled'

const VerdurasDetalles = () => {

    const id = useParams().id
    

    const [ info, setInfo ] = useState([])

        React.useEffect(() => {
            obtenerDatos()
        }, [])

        const obtenerDatos = async () => {
            const data = await fetch(`https://apitiendita.herokuapp.com/productos/${id}`)
            const users = await data.json()
            setInfo(users)
            console.log(info);
        }

    return ( 
 
        <MainDetalles>
            <ProfileM src={info.imagen} alt="" />
            
        <div className="contenido_mostrar">

                 <BX> <strong>X</strong> </BX>
                 <h1>{info.nombre}</h1>
                <h2>{info.precio}</h2>
                <h5>{info.iva}</h5>
                 <p>{info.descripcion}</p> 
                 <button>Agregar</button>
                 
        </div>
         </MainDetalles>

     );
}
 
export default VerdurasDetalles;