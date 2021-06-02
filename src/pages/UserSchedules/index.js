import React from 'react' 
// import { useHistory } from 'react-router-dom'

import PrivateLayout from '../../Layouts/PrivateLayout'
import SearchIcon from '../../assets/Agendar/Icon ionic-ios-search.png'
import FilterIcon from '../../assets/MeusAgendamentos/Icon awesome-filter.png'


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
            <div className="filter-appointments">
                <p>Filtrar agendamento</p>
                <div className="filter-container">
                    <img className="filter-icon" src={FilterIcon} alt=''/>
                    <select className="filter-select">
                        <option>Local de vacinação</option>
                        <option>Data</option>
                    </select>
                </div>
            </div>
            <div className="schedules-container">
                {/* TODO cards dos agendamentos do usuário */}
            </div>
        </PrivateLayout>
    )
}

export default UserSchedules;