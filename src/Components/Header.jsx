import React, {Fragment} from 'react'

import {TitleH, HEADERstyle, BTNcar, UBICACION, SEPARADOR } from '../Styles/Rejistro_Styled'

const Header = () => {
    return ( 
 <Fragment>

        <HEADERstyle>
            <TitleH>Tiendita</TitleH>
            <i class="ubi fas fa-map-marker-alt"></i>
            <UBICACION>México City Marriott Reforma Hotel... </UBICACION>
        
            <BTNcar>Car</BTNcar>
        </HEADERstyle>
        
 </Fragment>
     );
}
 
export default Header;