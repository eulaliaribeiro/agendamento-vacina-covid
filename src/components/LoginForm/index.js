import React, { useState } from 'react'
import { useHistory } from 'react-router'
import api from '../../services/api'
import './styles.less'



const LoginForm = () => {
  const history = useHistory()

  const [message,setMessage] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRequest = () => {
    api
    .post('/auth/login',{email, password}
    )
    .then((response) => {
      setMessage('')
      history.push('/meus-agendamentos')
    })
    .catch(({response}) => {
      setMessage(response.data.message)
    })
  }

  return(
      <div className="login-form">  
        <form>
          <p id="login-form-title">
            Preencha os campos abaixo
          </p>
            <label>
                Email
                <input name="user-email" type="email" required={true} placeholder="meunome@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Senha
                <input name="password" type="password" required={true} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <span style={{ fontWeight: 'bold', fontSize:'0.8rem', color: 'red',}}>{message}</span>
            <div className="forgot-password">
              <a href="/">Esqueceu sua senha?</a>
            </div>
            <div className="button-content">
              <div className="form-button" type="submit" onClick={() => handleRequest()}>
                <p>
                  Entrar
                </p>
              </div>  
            </div>
        </form>
      </div>
  );
}

export default LoginForm;