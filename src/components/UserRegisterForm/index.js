import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import validator from 'validator'

import './styles.less'

const UserRegisterForm = () => {

    const history = useHistory()

    const [initial, setInicial] = useState(true)
    const [validateRegister, setValidateRegister] = useState(false)
    const [handleClick, setHandleClick] = useState(false)
    const [passwordValidate, setPasswordValidate] = useState("")
    const [confirmPasswordValidate, setConfirmPasswordValidate] = useState("")

    const [password, setPassword] = useState("")


    const [modal, setModal] = useState(false)    

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

    const validatePassword = (password) => {
        setPassword(password)
        //eslint-disable-next-line
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(!strongRegex.test(password)) {
            setPasswordValidate("A senha deve ter no mínimo 8 dígitos e possuir letras maiúsculas, letra minúsculas, caracteres especiais e números!")
            // parar execução
            return
        }
        setPasswordValidate("")
    }

    const confirmEqualPassword = (confirmPassword) => {
        if(password !== confirmPassword){
            setConfirmPasswordValidate("As senhas não são iguais!")
            return
        }
        setConfirmPasswordValidate("")
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
                        Nome completo
                        <input name="username" type="text" required={true} />
                    </label>

                    <label>
                        Senha
                        <input name="password" type="password" required={true} onChange={(e) => validatePassword(e.target.value)} />
                        <div className="password-validate">
                        {passwordValidate}
                        </div>
                    </label>

                    <label>
                        Confirmação de senha
                        <input name="password" type="password" required={true} onChange={(e) => confirmEqualPassword(e.target.value)} />
                        <div className="password-validate">
                        {confirmPasswordValidate}
                        </div>
                    </label>
                </>
                } 

                {!handleClick && <div className="button-content">
                    <div disabled className="form-button" type="submit" onClick={() =>  setHandleClick(!handleClick)} >
                        <p>
                        Continuar
                        </p>
                    </div>
                </div>}

                {handleClick && <div className="button-content">
                    <div disabled className="form-button" type="submit" onClick={() =>!passwordValidate && !confirmPasswordValidate && history.push('/meus-agendamentos')} >
                        <p>
                        Cadastrar
                        </p>
                    </div>
                </div>}

            </form>

            { (validateRegister && handleClick) && 
                <p className="terms-and-politics">
                    Ao assinar você concorda com os <button id="terms-button" onClick={() => setModal(!modal)}>termos de serviço</button> e <button id="politics-button" onClick={() => setModal(!modal)}>política de privacidade</button>
                </p>
            }

            <div id="terms-modal">
                <div className="terms-modal-content">
                    <p className="terms-modal-title">
                        Termos e Política de Privacidade
                    </p>

                    <p className="terms-modal-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        <br/>
                        <br/>
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                    </p>

                    <div id="terms-modal-close-button" onClick={() => setModal(!modal)}>
                        <p>
                            Fechar
                        </p> 
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UserRegisterForm;