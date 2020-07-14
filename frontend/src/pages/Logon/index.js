import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { BsShieldLock } from 'react-icons/bs'

// call api backend
// import api from '../../services/api'

import imgLogon from '../../assets/icon-logon.png'

import './styles.css'


export default function Logon() { 
  //VERIFICACAO


return(
  <div className="logon-container">
    <img src={imgLogon} />
    <section className="form">
      
      <form /*onSubmit={}*/>
        <div className="icon-logon">
          <BsShieldLock size={64} color="#000080" />
        </div>

        <h1>React Tracks - Login</h1>

        <p>Usuário *</p>
        <input type="text"/>
        <p>Senha *</p>
        <input type="password"/><br></br>
        <button  class="button" type="submit">Entrar</button>
        <button  class="buttonCad" type="submit">Cadastrar-se</button>
      </form>

    </section>
  </div>
)

}