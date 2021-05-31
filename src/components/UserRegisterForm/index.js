import React, {useState} from 'react'
import validator from 'validator'

import './styles.less'

const UserRegisterForm = () => {

    const [initial, setInicial] = useState(true)
    const [validateRegister, setValidateRegister] = useState(false)
    const [handleClick, setHandleClick] = useState(false)

    let modal = document.getElementById("terms-modal")    

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

    /* const openModal = () => {
        setModal(false)
    } */

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
                <p className="terms-and-politics">
                    Ao assinar você concorda com os <button id="terms-button" onClick={() => modal.style.display="block"}>termos de serviço</button> e <button id="politics-button" onClick={() => modal.style.display="block"}>política de privacidade</button>
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

                    <div id="terms-modal-close-button" onClick={() => modal.style.display="none"}>
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