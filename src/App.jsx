import './App.css'
import React from 'react'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'

// Usando funcao anonima se tiver 'export default' - tem que usar funcao declarada 'function App(props)' se nao usar 'default' depois de 'export'
// Podemos tirar a 'function' e usar a arrow function, reduzindo ainda mais
// Podemos tirar os parenteses dos parametros da funcao, quando se tem apenas um (por causa da sintaxe da arrow function)
// Podemos substituir 'props' por (), se nao tivermos parametros ou por '_' caso tivermos parametro mas nao nos importamos com ele
// Podemos tambem tirar o corpo da funcao '{ return () }' para ter a forma mais reduzida da funcao
// Para formatar no Mac: option + shift + f
export default _ =>
    <div className="App">
        <h1>Fundamento React</h1>

        <div className="Cards">
            <Card titulo="#14 - Megasena" color="#B9006E">
                <Mega />
            </Card>

            <Card titulo="#13 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#12 - Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="#11 - Comunicacao Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card titulo="#10 - Comunicacao Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card titulo="#09 - Renderizacao Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}/>
                {/* <UsuarioInfo usuario={{ email: 'fer@nando.com' }}/>
                <UsuarioInfo usuario={{}}/>
                <UsuarioInfo /> */}
            </Card>

            <Card titulo="#08 - Desafio Repeticao" color="#FF432E">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#07 - Repeticao" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#06 - Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={10} max={20} />
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={10} max={20} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#E8B71A">
                <ComParametro
                    titulo="Situacao do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

