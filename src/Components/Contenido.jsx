import React, {useState} from 'react'
import {Link} from 'react-router-dom'


import {Desuento, Precio, PreDes} from '../Styles/Rejistro_Styled'

const Contenido = () => {

   
    const [ verduras, setVerduras ] = useState([])

        React.useEffect(() => {

            obtenerDatos()
           
        }, [])

        const obtenerDatos = async () => {
            const data = await fetch(`https://apitiendita.herokuapp.com/productos`)
            const users = await data.json()
            setVerduras(users)
            console.log(users);
        }

     
    return (

    
        <div className="Container_Contenido">

             <h3 className="TicleOferta"><strong>Ofertas</strong></h3>

             <div className="aja">

             {verduras.map((verdura) => {
                 return  <div className="card-body" key={verdura.id}>

                      <Link to={`/Detalles/${verdura.id}`}>

                 <Desuento className="card-text"><strong>{verdura.porcentaje}</strong></Desuento>
                    <img src={verdura.imagen} className="cars card-img-top" alt="..."/>
                     <Precio className="card-title"><strong>{verdura.precio}</strong> <PreDes>{verdura.descuento}</PreDes></Precio>
                     <p className="card-text">{verdura.nombre}</p>
                     <button href="#" className="btn btn-primary">Agregar</button>
                     
                     </Link>
                   </div>
             
             })
            }
            </div>
        </div>
        
      );
}
 
export default Contenido;