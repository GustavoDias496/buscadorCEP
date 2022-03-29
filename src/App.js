import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css'; 
import api from './services/Api';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
    async function handleSearch(){
    // http://viacep.com.br/ws/01310930/json/
    if(input === ""){
      alert("Insira um CEP antes de pesquisar!");
      return;
    }
    
    try{
      
      const response = await api.get(input + "/json");
      setCep(response.data)
      setInput("");
    }catch{
      alert("Erro ao buscar!");
      setInput("");
    } 
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o seu CEP..."
          value={input}
          onChange={ (event) => setInput(event.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: { cep.cep } </h2>

          <span> { cep.logradouro} </span>
          <span>Complemento: { cep.complemento }</span>
          <span> { cep.bairro } </span>
          <span> { cep.localidade } - { cep.uf } </span>
          <span>DDD: { cep.ddd } </span>
        </main>
      )}
    </div>
  );
}

export default App;


