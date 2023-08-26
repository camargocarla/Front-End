// Utilizando a API do ViaCEP, peça um CEP e retorne:
// Estado, Cidade, Bairro e Logradouro .

import { useState } from "react";

export default function Atividade01(){

    const [cep, setCEP] = useState();
    const [retornoCep, setRetornoCep] = useState([]);

    const buscarCep = () => {

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(requisicao => requisicao.json())
        .then(retorno => setRetornoCep(retorno))
    }
       return (
        <div>
            <input type="text" onChange={e =>{setCEP(e.target.value)}}/>
            <button onClick={() => {buscarCep()}}>Buscar CEP</button>

            <p>Estado: {retornoCep.uf}</p>
            <p>Cidade: {retornoCep.localidade}</p>
            <p>Bairro: {retornoCep.bairro}</p>
            <p>Logradouro: {retornoCep.logradouro}</p>

        </div>
    )


}