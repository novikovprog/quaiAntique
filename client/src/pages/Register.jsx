import React from 'react'
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className='auth'>
      <h1>Créer un compte</h1>
      <form>
        <input required type="name" placeholder='Nom' />
        <input required type="email" placeholder='Email' />
        <input required type="password" placeholder='Mot de passe' />
        <button>Valider</button>
        <p>C'est une erreur</p>
        <span>Vous avez un compte <Link to="/login">Ici</Link>
        </span>
      </form>
    </div>
  )
}

export default register