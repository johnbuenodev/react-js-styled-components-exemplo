import './App.css';
import {BemVindo, Container, HeadCustom, TitleCustom } from './styles';

function App() {
  return (
    <div>
      <Container>
        <HeadCustom>
          <TitleCustom>Projeto Styled</TitleCustom>
        </HeadCustom> 

        <BemVindo corCustom="#00CED1" fontCustom="24px">Bem-vindo ao sistema!</BemVindo>
      </Container>
      
    </div>
  );
}

export default App;

/*

 <div className="container">
      <header className="header">
       <a className="titulo">Projeto Styled</a>
      </header>

      <h2>Bem-vindo ao sistema!</h2>
    </div>
    

*/