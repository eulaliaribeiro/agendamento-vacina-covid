import React from 'react' 
import { useHistory } from 'react-router-dom'

import PublicLayout from '../../Layouts/PublicLayout'
import LoginForm from '../../components/LoginForm'

import UserIcon from '../../assets/Login/Icon feather-user.png'

 

const Login = () => {
    const history = useHistory();

    return(
        <div>
            <PublicLayout>
                <header className="create-account">
                    <p className="create-account-message">
                        Não tem uma conta?
                    </p>
                    <div className="create-account-button" onClick={() => history.push('/cadastro')}>
                        <img src={UserIcon} alt=""/>
                        <p>
                            Crie uma
                        </p> 
                    </div>
                </header>
                <LoginForm/>
            </PublicLayout>
        </div>
    )
}

export default Login;