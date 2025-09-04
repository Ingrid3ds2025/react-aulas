import React from "react";


const Mensagem = () => "Testando js com html e react";

const Equipe = (props) => {
  return (
    <div> 
      <Sobre nome={props.nome} idade={props.idade} social={props.social} rua={props.rua} bairro={props.bairro} cep={props.cep} estado={props.estado}/>
    </div>
  )
}

const Sobre = (props) => {
  return(
    <h2>Ola eu sou o integrante(a) {props.nome} com {props.idade} anos.</h2>
  )
}

const Social = (props) => {
  return(
    <div >
     

      <img src="https://lh3.googleusercontent.com/a/ACg8ocKx0gK37Ilx_ENAq87iu2T2dQUX80FvvwxHX2CQZ3TZ6abarG84=s360-c-no" height="200" borderRadius="20"/>
       
      <h3> Instagram</h3>
      <h3>Likedin</h3>
      <h3>You Tube</h3>
      
    </div>
  )
}

const Endereco = (props) => {
  return( 
    
    <div class="teste"> 
      <h3>Rua: {props.rua}</h3>
      <h3>Bairro: {props.bairro}</h3>
      <h3>CEP: {props.cep}</h3>
      <h3>Estado: {props.estado}</h3>
    </div>
  )
}

function App() {
  return (
    <div>
      <Mensagem/>
      <Equipe nome="Thamires" idade="18"/>
      <Social />
      
      <Endereco rua="das flores" bairro="da cidade" cep="89300000" estado="GO"/>
    </div>
  );
}

export default App;
