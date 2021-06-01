import React from 'react' 
// import { useHistory } from 'react-router-dom'

import PrivateLayout from '../../Layouts/PrivateLayout'
import ScheduleCard from '../../components/ScheduleCard'
import SearchIcon from '../../assets/Agendar/Icon ionic-ios-search.png'


const UserScheduling = () => {

    // const history = useHistory();
    
    return(
        <PrivateLayout>
            <header className="private-header">
                <p className="title">
                    Agendar
                </p>
                
                <div className="search-container">
                 <input className="search" placeholder="Pesquisar"/>
                 <img className="search-icon" src={SearchIcon} alt='Lupa' />
                </div>
            </header>
            <div className="schedule-container">
                <ScheduleCard/>
            </div>
        </PrivateLayout>
    )
}

export default UserScheduling;