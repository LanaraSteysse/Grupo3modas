import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="App">
      <div className='Login'>
        <div className='Image'></div>
        <h1> Grupo 3 Modas</h1>
        <div className='User'>
          <label>Login:</label>
          <input onChange={(e) => { setLogin(e.target.value) }} />
        </div>
        <div className='Senha'>
          <label>Senha:</label>
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div className='Button'>
          <button onClick={() => {
            alert("Login realizado \n \n Login: " + login + "\n Senha: " + password)
          }}>Mostrar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
