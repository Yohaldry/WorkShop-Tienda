import React from 'react'

import {Desuento, Precio, PreDes} from '../Styles/Rejistro_Styled'

const Contenido = () => {
    return (

        <div className="Container_Contenido">
             <h3 className="TicleOferta"><strong>Ofertas</strong></h3>

             <div className="aja">

                   <div class="card-body">

                    <Desuento class="card-text"><strong>20% dto</strong></Desuento>
                    <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631646456/Product_xnxqvq.png" class="cars card-img-top" alt="..."/>
                     <Precio class="card-title"><strong>$26.82/kg</strong> <PreDes>39.9/kg</PreDes></Precio>
                     <p class="card-text">Limon con semilla</p>
                     <button href="#" class="btn btn-primary">Agregar</button>

                   </div>

            </div>
        </div>
      );
}
 
export default Contenido;