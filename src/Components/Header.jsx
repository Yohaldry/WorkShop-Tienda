import React, {Fragment} from 'react'

import {TitleH, HEADERstyle, BTNcar, UBICACION } from '../Styles/Rejistro_Styled'

const Header = () => {
    return ( 
 <Fragment>

        <HEADERstyle>
            <TitleH>Tiendita</TitleH>

            <UBICACION>México City Marriott Reforma Hotel... |</UBICACION>
            <BTNcar>Car</BTNcar>
        </HEADERstyle>

 </Fragment>
     );
}
 
export default Header;