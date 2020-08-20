import React from 'react';

//Não vai usar mais. Não deletei o Header por causa das anotações
//import Header from './Header';

import './global.css';

import Routes from './routes';


function App() {
  //Método useState retorna um Array com duas posições [valor, funçãoDeAtualização]
  //counter: armazena, guarda o valor da variavel
  //setCounter: altera o valor da varivel
  //Toda vez que precisar mudar o valor desse contador, tenho que chamar a função setCounter
  //const [counter, setCounter ] = useState(0);
 //function increment() {
    //setCounter(counter + 1);
 //}

  return (
    //Componente
    <Routes /> 
  );
}

export default App;
