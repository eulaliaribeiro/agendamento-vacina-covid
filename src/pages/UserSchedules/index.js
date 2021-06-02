import React from 'react' 
// import { useHistory } from 'react-router-dom'

import PrivateLayout from '../../Layouts/PrivateLayout'
import SearchIcon from '../../assets/Agendar/Icon ionic-ios-search.png'


const UserSchedules = () => {

    // const history = useHistory();
    
    return(
        <PrivateLayout>
            <header className="private-header">
                <p className="title">
                    Meus agendamentos
                </p>
                
                <div className="search-container">
                 <input className="search" placeholder="Pesquisar"/>
                 <img className="search-icon" src={SearchIcon} alt='Lupa' />
                </div>
            </header>
            <div className="schedules-container">
                {/* cards dos agendamentos do usuário */}
            </div>
        </PrivateLayout>
    )
}

export default UserSchedules;