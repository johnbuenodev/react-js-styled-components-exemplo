import styled from 'styled-components';

//Sempre utilizar UPPERCASE
export const Container = styled.div`
  
  display: flex;
  flex-direction:column;
  width:100%;
  height: 500px;

`;

//Sempre utilizar UPPERCASE
export const HeadCustom = styled.header`
  
  width: 100%;
  height: 70px;
  background-color: brown;
  justify-content: center;
  align-items: center;
  display: flex;

  a {
    
  }
  
`;

// a {
//     font-size: 36px;
//     font-weight: bold;
//     color: white;
//     }

//Sempre utilizar UPPERCASE
export const TitleCustom = styled.a`
   font-size: 36px;
   font-weight: bold;
   color: white;
`;

export const BemVindo = styled.h2`
   font-size: ${props => props.fontCustom};
   font-weight: bold;
   color: ${props => props.corCustom};
`;
