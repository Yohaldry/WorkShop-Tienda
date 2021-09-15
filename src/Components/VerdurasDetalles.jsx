  
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import {MainDetalles, ProfileM, BX, BA, IVA, TitleDetalles, PreciosDetalles, DescripcionD} from '../Styles/Rejistro_Styled'

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
        
     <Link to="/inicio"> <BX id="Salir"> <strong>X</strong> </BX></Link>
   
                 <TitleDetalles>{info.nombre}</TitleDetalles>
                <PreciosDetalles>{info.precio}</PreciosDetalles>
                <IVA>{info.iva}</IVA>
                 <DescripcionD>{info.descripcion}</DescripcionD> 
                 <BA className="btn btn-primary">Agregar</BA>
                 
        </div>
         </MainDetalles>

     );
}
 
export default VerdurasDetalles;