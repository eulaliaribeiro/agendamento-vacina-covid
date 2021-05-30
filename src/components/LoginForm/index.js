import React from 'react'

import './styles.less'

const LoginForm = () => {

    return(
        <div className="login-form">  
          <form>
            <p id="login-form-title">
              Preencha os campos abaixo
            </p>
              <label>
                  Email
                  <input name="user-email" type="email" required={true} placeholder="meunome@gmail.com" />
              </label>
              <label>
                  Senha
                  <input name="password" type="password" required={true} />
              </label>
              <div className="forgot-password">
                <a href="/">Esqueceu sua senha?</a>
              </div>
              <div className="button-content">
                <div className="form-button" type="submit">
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