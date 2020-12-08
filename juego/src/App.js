// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const elementos=['piedra.jpg','papel.jpg','tijera.jpg','lagarto.jpg','spock.jpg']

const App = () =>{
  const [manos, setElegidos]= useState([]);
  const [mensajeGanador, setGanador]= useState([]);
  const jugar=(el)=>{
    const j1= parseInt(el.currentTarget.dataset.id);
    const pc= Math.floor(Math.random() + elementos.length);
    const jugadores =[];
    jugadores.push(j1);
    jugadores.push(pc);

    if (j1 === pc){
      setGanador("Empate");
    }
    else if((j1 === 0 && pc === 2)||(j1 ===1 && pc === 0)||(j1 === 2 && pc ===1)||(j1===0 && pc===3)||(j1===3 && pc === 4)||(j1===4 && pc === 2)||(j1===2 && pc ===3)||(j1===3 && pc===1)||(j1===1 && pc ===4)||(j1===4 && pc === 0)){
      setGanador("ganaste!")
    }
    else {
      setGanador("gano PC!");
    }
    setElegidos(jugadores);
  }

  const Resultado = () =>{
    if (manos.length !== 0){
      return(
        <section>
          <p>Jugador 1:<img src={"src/img/"+ elementos[manos[0]]}/></p>
          <p>PC:<img src={"src/img/"+ elementos[manos[1]]}/></p>
          <p>{mensajeGanador}</p>
        </section>
      )
    }else{
      return null
    }
  }
  return(
    <main>
      <h1>Piedra, Papel, Tijera, Lagarto o Spock</h1>
      <ul id="elegir">
        {elementos.map((el,i)=>
        <li key={i} data-id={i} onClick={jugar}><img src={"src/img/" + el} alt="" /></li>)}
      </ul>
      {Resultado}
    </main>
  )
}

export default App;
