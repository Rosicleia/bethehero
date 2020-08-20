//Importação essencial em todo lugar que for utilizar JSX (HTML dentro do JavaScript)
//Mesmo não utilizando essa variavel é obrigatorio
import React from 'react';

//Componete Header que vai utilizar o elemento header do HTML, não é a mesma coisa
//export default antes da function é o mesmo que fazer export default Header
//Para recuperar a propriedade que esta no App.js aqui no Header, tenho que passar como paramentro da minha função
//Recebe um unico parametro que são as propriedades
//Ao inves de recebor o objeto props inteiro, faço uma desestruturação, coloco {} e falo quais propriedades quero usar
//export default function Header(props) {
export default function Header({ children }) {
    return(
        <header>
            <h1>{ children }</h1>
        </header>
    );    
}
//export default Header;