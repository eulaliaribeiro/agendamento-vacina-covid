import React from 'react'
import './styles.less';

import CalendarImage from '../../assets/Login/Icon feather-calendar.png'
import UFRNLogo from '../../assets/Login/g10-8.png'
import LAISLogo from '../../assets/Login/Group 10.png'

const PublicLayout = ({children}) => {
    return(
        <div id="container">
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
                {children}
            </div>

        </div>
    );
}

export default PublicLayout;

