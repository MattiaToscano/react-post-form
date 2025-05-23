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

  //Variabile di stato corrispondente ad un oggetto
  const [formPost, setFormPost] = useState(initialFormPost);

  //Funzione per l'OnChange dei singoli campi
  function handleFormPost(event) {

    const checkboxValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setFormPost(formPost => ({
      ...formPost,
      [event.target.name]: checkboxValue
    }))
  }

  //Funzione per creare nuovo post tramite chiamata API
  function createPost(event) {

    event.preventDefault();

    //chiamata tramite axios all'endpoint fornito e variabile useState che verrà aggiornata
    axios.post(endpoint, formPost)
      .then(response => {
        console.log(response.data)

        //Bonus che non era da fare(Avvisare il cliente che l'operazione è andata a buon fine)
        alert('La creazione del post è andata a buon fine!');

        setFormPost(initialFormPost);
      })
      .catch(error => {
        //Bonus che non era da fare(Avvisare il cliente che l'operazione non è andata a buon fine)
        alert('Si è verificato un problema durante la compilazione!')
      })
  }



  return (
    <>
      <div>
        <h1> React Post Form</h1>
        <form onSubmit={createPost}>
          <div>
            <label>Autore del post</label>
            <input
              type="text"
              id="author-element"
              name="author"
              value={formPost.author}
              onChange={handleFormPost}
              placeholder="Nome dell'autore" />
          </div>

          <hr />

          <div>
            <label>Titolo del post</label>
            <input
              type="text"
              id="title-element"
              name="title"
              value={formPost.title}
              onChange={handleFormPost}
              placeholder="Titolo del post" />
          </div>

          <hr />

          <div>
            <label>Contenuto del post</label>
            <input
              type="text"
              id="body-element"
              name="body"
              value={formPost.body}
              onChange={handleFormPost}
              placeholder="Contenuto del post" />
          </div>

          <hr />

          <div>
            <label>Post pubblico?</label>
            <input
              type="checkbox"
              id="public-element"
              name="public"
              checked={formPost.public}
              onChange={handleFormPost}
            />
          </div>

          <hr />

          <button> Crea post </button>

        </form>
      </div>
    </>
  )
}

export default App
