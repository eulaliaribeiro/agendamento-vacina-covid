import React from 'react' 
// import { useHistory } from 'react-router-dom'

import PrivateLayout from '../../Layouts/PrivateLayout'
import SearchIcon from '../../assets/Agendar/Icon ionic-ios-search.png'


const UserSchedules = () => {

    // const history = useHistory();
    
    return(
        <PrivateLayout>
            <header>
                <p className="title">
                    Meus agendamentos
                </p>
                <input className="search" placeholder="Pesquisar">
                    <img src={SearchIcon} alt='Lupa'/>
                </input>
            </header>
            
        </PrivateLayout>
    )
}

export default UserSchedules;