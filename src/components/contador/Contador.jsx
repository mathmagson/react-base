import './Contador.css'
import { Component } from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    // metodo constructor para setar a variavel de estado
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         numero: this.props.numeroInicial
    //     }
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    // funcao constructor para o clique do botao apontar para essa instancia da funcao inc
    // constructor(props) {
    //     super(props)

    //     this.inc = this.inc.bind(this)
    // }

    // transformando a funcao inc em arrow function, ela nao precisa de construtor com bind para o this nao se perder
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }
}

export default Contador