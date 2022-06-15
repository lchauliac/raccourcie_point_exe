import logo from './logo.svg';
import './App.css';
import Character from './Character';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  })
  useEffect(() => console.log(state), [state])
  useEffect(() => {
    console.log("banane")
    window.addEventListener("keydown", event => {
      console.log(event)
      if (state.x >= 0 && state.y >= 0) {

        if (event.code === "ArrowRight") {

          setState(state => ({
            ...state,
            x: state.x + 10,
          }))
        }
        else if (event.code === "ArrowLeft") {

          setState(state => ({
            ...state,
            x: state.x - 10,
          }))
        }
        else if (event.code === "ArrowUp") {

          setState(state => ({
            ...state,
            y: state.y - 10,
          }))
        }
        else if (event.code === "ArrowDown") {

          setState(state => ({
            ...state,
            y: state.y + 10,
          }))
        }
      }

    })
  }, [])
  return (
    <div className="App">
      <Character x={state.x} y={state.y} />

    </div>
  );
}



export default App;
