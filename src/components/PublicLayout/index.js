import React from 'react'
import './styles.less';
import UserRegisterForm from '../UserRegisterForm'
import LoginForm from '../LoginForm'

import CalendarImage from '../../assets/Login/Icon feather-calendar.png'
import UFRNLogo from '../../assets/Login/g10-8.png'
import LAISLogo from '../../assets/Login/Group 10.png'
import UserIcon from '../../assets/Login/Icon feather-user.png'

const PublicLayout = () => {
    return(
        <div className="container">
            <div className="panel">
                <div className="panel-content">
                    <img className="calendar" src={CalendarImage} alt="Calendário"/>
                    <p className="title">
                        Agendamento online
                    </p>
                    <p className="p1">
                        Rápido e seguro.
                    </p>
                    <p className="p2">
                        Evite filas e aglomeração. <br/>
                        O seu bem é o bem de todos.
                    </p>
                </div>
               
                <footer>
                    <img src={LAISLogo} alt="LAIS"/>
                    <img src={UFRNLogo} alt="UFRN"/>
                </footer>
            </div> 

            <div id="right-content">

                {/* TODO: já tem uma conta? Entre*/ }
                <header className="create-account">
                    <p className="create-account-message">
                        Não tem uma conta?
                    </p>
                    <div className="create-account-button">
                        <img src={UserIcon} alt=""/>
                        <p>
                            Crie uma
                        </p> 
                    </div>
                </header>
                <LoginForm/>
            </div>

        </div>
    );
}

export default PublicLayout;

