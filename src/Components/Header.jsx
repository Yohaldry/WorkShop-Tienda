import React, {Fragment} from 'react'

import {TitleH, HEADERstyle, BTNcar, UBICACION, C } from '../Styles/Rejistro_Styled'

const Header = () => {
    return ( 
 <Fragment>

        <HEADERstyle>
            <TitleH>Tiendita</TitleH>
            <i class="ubi fas fa-map-marker-alt"></i>
            <UBICACION>México City Marriott Reforma Hotel... </UBICACION>
        
            <BTNcar><i class="fas fa-cart-arrow-down"></i><C>  5</C></BTNcar>
        </HEADERstyle>
        
 </Fragment>
     );
}
 
export default Header;