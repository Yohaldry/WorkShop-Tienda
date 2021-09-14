import styled from "styled-components";


const TitleHeader = styled.h2`
     
     color: #FC462D;
     @import url('https://fonts.googleapis.com/css2?family=Harmattan:wght@700&display=swap');
     font-family: 'Harmattan', sans-serif;
     display: flex;
     margin-top: 5px;
     margin-left: 80px;
`;

const head = styled.header`
     
     display: flex;
     background-color: #ffffff;
     width: 100%;
    
`;

const Bcar = styled.button`
     
     color: #ffffff;
     background-color: blue;
     @import url('https://fonts.googleapis.com/css2?family=Harmattan:wght@700&display=swap');
     font-family: 'Harmattan', sans-serif;
     width: 70px;
     height: 30px;
     margin-left: -75px;
     border-radius: 10px;
     margin-top: 8px;
     border: none;
`;

const Ubicacion = styled.label`
     
     color: #090909;
 
     @import url('https://fonts.googleapis.com/css2?family=Harmattan:wght@700&display=swap');
     font-family: 'Harmattan', sans-serif;
    
     width: 370px;
     font-size: 20px;
     margin-top: 8px;
     margin-left: 5px;
`;

const Slayder = styled.img`
     
     width: 940px;
     margin-left: 70px;
     margin-top: 30px;
     
`;

const Adquiere = styled.h2`
      @import url('https://fonts.googleapis.com/css2?family=Harmattan:wght@700&display=swap');
     font-family: 'Harmattan', sans-serif;
    color: #ffffff;
    margin-top: -110px;
    margin-left: 190px;
`;



const containercontenido = styled.main`
     
    background-color: #ffffff;
    color: #a20b0b;
`;

const descuento = styled.p`
     
     width: 60px;
     text-align: center;
     border-radius: 9px;
    background-color: #F0E3FE;
    color: #5E18BB;
`;

const Prec = styled.h5`
     
    font-size: 12px;
    
`;

const PrecA = styled.h5`
     
    font-size: 10px;
    color: #B8B4B4;
    text-decoration: line-through;
    
`;

const Sep = styled.p`
     
    font-size: 20px;
    color: #B8B4B4;
    margin-left: 10px;
    
`;



export const ImgS = Slayder
export const SEPARADOR = Sep
export const Precio = Prec
export const PreDes = PrecA
export const Desuento = descuento
export const ContainerContenido = containercontenido
export const TitleImg = Adquiere
export const TitleH = TitleHeader
export const HEADERstyle = head
export const BTNcar = Bcar
export const UBICACION = Ubicacion
