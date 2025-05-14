// Hook
import { useState, useEffect } from 'react';
//Importiamo Axios
import axios from 'axios';
//Importo Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

//Creo costante endpoint
const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'


function App() {

  //Creo variabile con lo stato iniziale
  const initialFormPost = {
    author: '',
    title: '',
    body: '',
    public: false
  }


  return (
    <>
      <div>
        <h1> React Post Form</h1>
        <form>
          <div>
            <label>Autore del post</label>
            <input></input>
          </div>

          <hr />

          <div>
            <label>Titolo del post</label>
            <input></input>
          </div>

          <hr />

          <div>
            <label>Contenuto del post</label>
            <input></input>
          </div>

          <hr />

          <div>
            <label>Post pubblico?</label>
            <input></input>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
