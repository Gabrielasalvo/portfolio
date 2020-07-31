import React from 'react'
import {HeaderStyle, NavStyle, UlStyle, SpacingDiv, Name } from './styled'
import { theme } from '../../Theme'

function Header() {
    return (
        <NavStyle>
            <div>
                <Name  href="#">Gabriela</Name>
            </div>
        <SpacingDiv/> 
            <UlStyle>
               <li><a  href="#">quem sou</a></li> 
               <li><a  href="#">projetos</a></li> 
               <li><a  href="#">contato</a></li> 
            </UlStyle>
         

        </NavStyle>
    )
}

export default Header