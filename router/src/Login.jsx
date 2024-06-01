import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <h1>Login</h1>
        {/**link para de navegação a pagina de produto que o "to" é nome igual ao que fica no app.jsx */}
        <Link to={"/produto"}>produto</Link>

    </div>
  )
}

export default Login