import React from 'react'
import './styles.less'

import VaccineIcon from '../../assets/MeusAgendamentos/Group 561.png'
import LocationIcon from '../../assets/MeusAgendamentos/Icon awesome-map-marker-alt.png'
import CalendarIcon from '../../assets/MeusAgendamentos/Icon awesome-calendar-alt.png'
import ClockIcon from '../../assets/MeusAgendamentos/Icon ionic-ios-time.png'

const dateInitial = (date) => {
    const [year, month, day] = date.split('-')
  
    return `${day}/${month}/${year}`
}

const statusTypeColor = {
    'Cancelado' : 'var(--dark-red)',
    'Agendado': 'var(--green)',
    'Vacinado': 'var(--dark-blue)'
}
  
const statusColor = (currentStatus) => {
    const color = {
        "color": statusTypeColor[currentStatus] || ''
    }
    return color
}

const AppointmentCard = ({vacina, status, localizacao, data, horario, openModal}) => {

    return(
        <div className="appointment-card-container">
            <header className="appointment-card-header">
                <div className="appointment-card-header-content">
                    <img src={VaccineIcon} className="vaccine-icon" alt=''/>
                    <div className="vaccine-type-content">
                        <p className="vaccine-title">
                            Vacina:
                        </p>
                        <p className="vaccine-type">
                            {vacina}
                        </p>
                    </div>
                </div>

                <div className="appointment-card-status" style={statusColor(status)}>
                    {status}
                </div>

            </header>

            <div className="horizontal-line"/>
            
            <div className="appointment-card-information">
                <div className="appointment-location">
                    <img src={LocationIcon} alt='Localização'/>
                    <p>
                       {localizacao}
                    </p>
                </div>
                <div className="appointment-date-and-time">
                    <div className="appointment-date">
                        <img src={CalendarIcon} alt='Data'/>
                        <p>
                            {data && dateInitial(data)}
                        </p>
                    </div>
                    <div className="appointment-time">
                        <img src={ClockIcon} alt='Horário'/>
                        <p>
                          {horario}
                        </p>
                    </div>
                </div>
            </div>

            <div className="appointment-buttons">
                {(status === "Cancelado") ? 
                <button className="details-button" style={{width: `100%`, borderRadius:`0 0 4px 4px`}} onClick={() => openModal()}>
                    <p>
                        Detalhes
                    </p>
                </button>
                :
                <>
                <button className="details-button" onClick={() => openModal()}>
                    <p>
                        Detalhes
                    </p>
                </button>

                <button className="cancel-appointment-button">
                    <p>
                        Cancelar
                    </p>
                </button>
                </>
                }

            </div>


        </div>
    );
}

export default AppointmentCard