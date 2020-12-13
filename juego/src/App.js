// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const elementos=['piedra.jpg','papel.jpg','tijeras.jpg','lagarto.jpg','spock.jpg']

const App = () =>{
  const [manos, setElegidos]= useState([]);
  const [mensajeGanador, setGanador]= useState([]);
  const [Played, SetPlayed] = useState(false);
    const jugar=(elegida)=>{
      const j1= parseInt(elegida.currentTarget.dataset.id);
      const pc= Math.floor(Math.random() * (elementos.length));
      SetPlayed(true)
      const jugadores =[];
      jugadores.push(j1);
      jugadores.push(pc);
      var empate = 0;
      var jugador = 0;
      var compu = 0;
      
      
      if (j1 === pc){
        setGanador("Empate")
        empate=empate + 1;
      }
      else if((j1 === 0 && pc === 2)||(j1 ===1 && pc === 0)||(j1 === 2 && pc ===1)||(j1===0 && pc===3)||(j1===3 && pc === 4)||(j1===4 && pc === 2)||(j1===2 && pc ===3)||(j1===3 && pc===1)||(j1===1 && pc ===4)||(j1===4 && pc === 0)){
        setGanador("Ganaste!")
        jugador = jugador + 1;
      }
      else {
        setGanador("Gano PC!");
        compu = compu + 1;
      }
      setElegidos(jugadores);
      console.log(empate);
      console.log(jugador);
      console.log(compu);
    }

      const Resultado = () =>{
        if (Played === true){
          return(
            <section>
              <div className="box1">
                <h3 className="player">Jugador</h3>
                <img className="img1"src={"img/"+ elementos[manos[0]]} alt=""/>
              </div>
              <p id="vs">VS</p>
              <div className="box1">
              <h3 className="player">PC</h3>
              <img className="img1"src={"img/" + elementos[manos[1]]} alt=""/>
              </div>
              <p id="mensaje">{mensajeGanador}</p>
              <button id="button"type="button" className="btn btn-secondary"onClick={()=> {SetPlayed(false)}}>Volver a Jugar</button>
              <p id="descripcion"> Las tijeras cortan el papel, el papel envuelve la piedra, la piedra aplasta al lagarto, el lagarto envenena a Spock, Spock aplasta las tijeras, las tijeras decapitan al lagarto, el lagarto devora el papel, el papel desaprueba a Spock, Spock desintegra la piedra y, como siempre, la piedra aplasta las tijeras.</p>
            </section>
          )
        }else{
          return null
        }
      }
  return(
    <main>
      
      {Played === false 
      ?<div id="box">
      <h1 id="titulo1">Piedra, Papel, Tijera, Lagarto o Spock</h1>
      <h2>Elije una figura!</h2>
      <ul id="elegir">
        {elementos.map((elegida,i)=>
        <li key={i} data-id={i} onClick={jugar}><img className="img" src={"img/" + elegida} alt="" /></li>)}
      </ul></div>:
      <Resultado/>}

      
      
    </main>
  )
}

export default App;
