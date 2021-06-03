import React, { useState } from 'react'

import PrivateLayout from '../../Layouts/PrivateLayout'
import MyAppointmentsContainer from '../../components/MyAppointmentsContainer'
import SearchIcon from '../../assets/Agendar/Icon ionic-ios-search.png'
import FilterIcon from '../../assets/MeusAgendamentos/Icon awesome-filter.png'


const UserSchedules = () => {
    
    const [filterLocalization, setFilterLocalization] = useState(null)

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
            <div className="appointments-filter">
                <p>Filtrar agendamento</p>
                <div className="filter-container">
                    <img className="filter-icon" src={FilterIcon} alt=''/>
                    <select className="filter-select" onChange={(e) => setFilterLocalization(e.target.value)}>
                        <option value="">Selecione um local</option>
                        <option value="Arena das Dunas">Arena das Dunas</option>
                        <option value="Via Direta">Via Direta</option>
                        <option value="SESI">SESI</option>
                        <option value="UBS Centro">UBS Centro</option>
                    </select>
                </div>
            </div>
 
            <MyAppointmentsContainer filterLocalization={filterLocalization}/>
           
        </PrivateLayout>
    )
}

export default UserSchedules;