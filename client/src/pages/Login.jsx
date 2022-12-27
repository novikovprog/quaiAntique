import React from 'react'
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className='auth'>
      <h1>Se connecter</h1>
      <form>
        <input required type="name" placeholder='Nom' />
        <input required type="password" placeholder='Mot de passe' />
        <button>Valider</button>
        <p>C'est une erreur</p>
        <span>Créer un compte <Link to="/register">Ici</Link>
        </span>
      </form>
    </div>
  )
}

export default login