import React, { Component } from "react";

class Aula03 extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: 'Thamires',
            contador: 0,
            imagem: null, //armazena a url da imagem selecionada
        }
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
        this.mudarNome = this.mudarNome.bind(this);
        this.subirImagem = this.subirImagem.bind(this); //bind da nova funcao
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        this.setState(state)
    }

    diminuir(){
        let state = this.state;
        state.contador -= 1;
        this.setState(state);

        if(state.contador === 0 || state.contador <=-1){
            alert("Chegou a zero ... o contador nao pode contarr numeros negativos");
            state.contador = 0;
        }
    }

    mudarNome(){
        let state = this.state;
        state.nome = 'Palominha';
        this.setState(state);
    }

    subirImagem(event){
        const arquivo = event.target.files[0];
        if( arquivo ){
            const leitor = new FileReader();
            leitor.onload = (e) => {
                this.setState({imagem: event.target.result});
            };
            leitor.readAsDataURL(arquivo);
        }
    }

    render(){
        return(
            <div>
                <h2> {this.state.nome} </h2>
                <button onClick={this.state.aumentar}>+</button>
                {this.state.contador}
                <button onClick={this.state.diminuir}>-</button>

                <button onClick={this.state.mudarNome}>Mudar Nome</button>

                <div>
                    <label>Escolher imagem</label>
                    {this.state.imagem}
                
                <button onClick={this.state.subirImagem}>Subir </button>
                
                </div>

                
            </div>
        )
    }
}

export default Aula03;