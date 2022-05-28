import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

  let [ posts, setPosts ] = useState([{
    "id_cliente": "--",
    "nombre": "--",
    "descripcion": "--",
    "correo": "--",
    "reg_fiscal": "--",
    "rfc": "--"
}]);

  const consulta = async ()=>{
    await axios({
      url: "https://apigrupogr.com/grapi/clientes/lista-clientes",
      method: 'get',
      dataType: 'json',
      ContentType: 'application/json',
  })
  .then(response =>{
    setPosts(response.data.clients)
    console.log(response.data.clients)
  }).catch(error => {
    console.log(error);
  })
  };
  

  return (
    <div className="App">
       <button type="button" onClick={consulta}>Consultar</button> 
      <table>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Correo</th>
          <th>Reg Fiscal</th>
          <th>rfc</th>
        </tr>
        {posts.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id_cliente}</td>
              <td>{val.nombre}</td>
              <td>{val.descripcion}</td>
              <td>{val.correo}</td>
              <td>{val.reg_fiscal}</td>
              <td>{val.rfc}</td>
            </tr>
          )
        })}
      </table>
    </div>
    
  );
}

export default App;
