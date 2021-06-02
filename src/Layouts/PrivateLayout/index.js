import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.less';

import BlueCalendarImage from '../../assets/Agendar/Icon feather-calendar@2x.png'
import ProfileIcon from '../../assets/Agendar/Ellipse 1.png'
import DownArrow from '../../assets/Agendar/arrow-down.png'
// import WhiteFolder from '../../assets/Agendar/folder (3).png'
import BlueFolder from '../../assets/Agendar/folder (1).png'
// import WhitePencil from '../../assets/Agendar/edit (3).png'
import BluePencil from '../../assets/Agendar/edit (1).png'
import UserIcon from '../../assets/Agendar/user.png'
import LogoutIcon from '../../assets/Agendar/logout.png'

const PrivateLayout = ({children}) => {
    const history = useHistory();

    return(
        <div id="container">
            <div className="sidebar">
                <div className="sidebar-content">
                    <header>
                        <img className="blue-calendar" src={BlueCalendarImage} alt='Calendário azul'/>
                        <p className="sidebar-title">
                            Agendamento <br/> Online
                        </p>
                    </header>

                    <div className="dropdown-profile">
                        <div className="profile-content">
                            <img className="profile-icon" src={ProfileIcon} alt='Jhonny Clark'/>
                            <p className="welcome-text">
                                Seja bem-vindo
                                <br/>
                                <p className="username">
                                Jhonny Clark
                                </p>
                            </p>
                            <img className="arrow" src={DownArrow} alt='Seta para baixo'/>
                        </div>

                        <div className="dropdown-content">
                            <div className="dropdown-buttons">
                                <div className="my-profile-button">
                                    <img src={UserIcon} alt=''/>
                                    <p>
                                        Meu perfil
                                    </p>
                                </div>

                                <div className="logout-button" onClick={() => history.push('/login')}>
                                    <img src={LogoutIcon} alt=''/>
                                    <p>
                                        Sair
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div id="horizontal-line" style={{border: `solid 1px #92929257`, width: `100%`}}/>

                    <div className="sidebar-buttons">
                        <div className="my-schedules-button" type="submit" onClick={() => history.push('/meus-agendamentos')}>
                            <img src={BlueFolder} alt='Ícone de pasta'/>
                            <p>
                                Meus agendamentos
                            </p>
                        </div>
                        <div className="schedule-button" type="submit" onClick={() => history.push('/agendar')}>
                            <img src={BluePencil} alt='Ícone de lápis'/>
                            <p>
                                Agendar
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="schedule-content">
                {children}
            </div>

        </div>
    );
}

export default PrivateLayout;