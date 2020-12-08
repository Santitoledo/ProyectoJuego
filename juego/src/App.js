// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const elementos=['piedra.jpg','papel.jpg','tijeras.jpg','lagarto.jpg','spock.jpg']

const App = () =>{
  const [manos, setElegidos]= useState([]);
  const [mensajeGanador, setGanador]= useState([]);
    const jugar=(elegida)=>{
      const j1= parseInt(elegida.currentTarget.dataset.id);
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
              <p>Jugador 1:<img src={"img/"+ elementos[manos[0]]}/></p>
              <p>PC:<img src={"img/" + elementos[manos[1]]}/></p>
              <p>{mensajeGanador}</p>
              <p> Las tijeras cortan el papel, el papel envuelve la piedra, la piedra aplasta al lagarto, el lagarto envenena a Spock, Spock aplasta las tijeras, las tijeras decapitan al lagarto, el lagarto devora el papel, el papel desaprueba a Spock, Spock desintegra la piedra y, como siempre, la piedra aplasta las tijeras.</p>
            </section>
          )
        }else{
          return null
        }
      }
  return(
    <main>
      <h1>Piedra, Papel, Tijera, Lagarto o Spock</h1>
      <h2>Elije una figura!</h2>
      <ul id="elegir">
        {elementos.map((elegida,i)=>
        <li key={i} data-id={i} onClick={jugar}><img src={"img/" + elegida} alt="" /></li>)}
      </ul>
      {Resultado}
    </main>
  )
}

export default App;
