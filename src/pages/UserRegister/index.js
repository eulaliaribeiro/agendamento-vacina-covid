import React from 'react' 
import { useHistory } from 'react-router-dom'

import PublicLayout from '../../Layouts/PublicLayout'
import UserRegisterForm from '../../components/UserRegisterForm'

import UserIcon from '../../assets/Login/Icon feather-user.png'

const UserRegister = () => {

    const history = useHistory();
    
    return(
        <PublicLayout>
            <header className="create-account">
                <p className="create-account-message">
                    Já tem uma conta?
                </p>
                <div className="create-account-button" onClick={() => history.push('/login')}>
                    <img src={UserIcon} alt=""/>
                    <p>
                        Entrar
                    </p> 
                </div>
            </header>
            <UserRegisterForm/>
        </PublicLayout>
    )
}

export default UserRegister;