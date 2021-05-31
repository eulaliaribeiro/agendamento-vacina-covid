import React, {useState} from 'react'
import validator from 'validator'

import './styles.less'

const UserRegisterForm = () => {

    const [initial, setInicial] = useState(true)
    const [validateRegister, setValidateRegister] = useState(false)
    const [handleClick, setHandleClick] = useState(false)
    

    const validateEmail = (e) => {
      var email = e.target.value
      if (validator.isEmail(email)) {
        setValidateRegister(true)
      } else {
        setHandleClick(false)
        setValidateRegister(false)
      }
      setInicial(false)
    }

    //  TODO: validar campos do formulário
    // nome só pode ser letra
    // comparar as senhas
    
    return(
        <div className="content">
            <form>
                <div id="form-title">
                    <p>
                        Preencha os campos abaixo
                    </p>
                    <p>
                        É rápido, simples e seguro
                    </p>
                </div>
                <label>
                    Email
                    <input name="user-email" type="email" placeholder="meunome@gmail.com" onChange={(e) => validateEmail(e)} />
                    {!validateRegister && !initial && <span style={{ fontWeight: 'bold', fontSize:'0.8rem', color: 'red',}}>Esse e-mail não é válido!</span>} 
                </label>


                { (validateRegister && handleClick) && 
                <>            
                    <label>
                        Nome
                        <input name="username" type="text" required={true} />
                    </label>

                    <label>
                        Senha
                        <input name="password" type="password" required={true} />
                    </label>

                    <label>
                        Confirmação de senha
                        <input name="password" type="password" required={true}  />
                    </label>
                </>
                } 

                <div className="button-content">
                    <div className="form-button" type="submit" onClick={() => setHandleClick(!handleClick)} >
                        <p>
                        Continuar
                        </p>
                    </div>
                </div>

            </form>

            { (validateRegister && handleClick) && 
                <p>
                    Ao assinar você concorda com os <a href="/">termos de serviço</a> e <a href="/">política de privacidade</a>
                </p>
            }

        </div>
    );
}

export default UserRegisterForm;