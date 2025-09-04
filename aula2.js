import React, {Component} from "react";
import './App.css';

class Aula02 extends Component{
    render(){
        return(
            <div className="app-contaier">
                 <Header title="Aprendendo React">
                    <MainContent
                        message="Bem-vindo ao mundo React com class e Component"
                        lesson="Props e State"
                    />
                    <Footer year={2025}/>
                 </Header>
            </div>
        )
    }
}

export default Aula02;

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            showTitle: true
        }
    }

    render(){
        return(
            <header className="app-header">
                {this.state.showTitle && <h1>{this.props.title}</h1>}
                <p>Componente Header usando props e state</p>
            </header>
        )
       
    }
}

class MainContent extends React.Component{
    
    constructor(props){
        super(props);
    }
   
     render(){
        return(
            <main className="main-content"> 
                <div className="card">
                    <h2>{this.props.message}</h2>
                    <p>Aprendendo sobre: <strong>{this.props.lesson}</strong></p>
                    <button> Teste</button>
                </div>
            </main>
        )
    }
}

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            year: true
        }
    }

    render(){
        return(
            <footer>
                <p>{this.props.year} - React com class e Component</p>
            </footer>
        );
    }
}