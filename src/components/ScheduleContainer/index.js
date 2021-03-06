import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import api from '../../services/api'
import './styles.less'

export const formatDate = (date) => {
  const [year, month, day] = date.split('-')

  return `${day}-${month}-${year}`
}

export const dateInitial = (date) => {
  const [year, month, day] = date.split('-')

  return `${day}/${month}/${year}`
}

export const dateInitialModal = (date) => {
  const [day, month, year] = date.split('-')

  return `${day}/${month}/${year}`
}

const ScheduleContainer = () => {
  const history = useHistory()

  const [date, setDate] = useState("")
  const [dateText, setDateText] = useState("")

  const [dateModal, setDateModal] = useState("")
  
  const [city, setCity] = useState("")
  const [modal, setModal] = useState(false)
  const [data, setData] = useState([]);
  const [result, setResult] = useState([])

  const [selectedAppointment, setSelectedAppointment] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const [currentLocation, setCurrentLocation] = useState('')

  useEffect(() => {
    api
    .get(`/agendar/disponibilidade/`,
    )
    .then(({data}) => {
      setData(data.data)
    })
    .catch((response) => {
      console.log(response)
    })
  }, [])

  useEffect(() => {
    handleSearch()
    //eslint-disable-next-line
  }, [data])

  const handleSearch = () => {
    let resultado = data
    if(date){
      resultado = resultado.filter(item => item.data === formatDate(date))
      setDateText(dateInitial(date))
    }
    if(city){
      resultado = resultado.filter(item => item.municipio === city)
    }
    setResult(resultado)
  }

  useEffect(() => {
    api
    .get(`/agendamentos/`,
    )
    .then(({data}) => {
      setSelectedAppointment(data.data)
    })
    .catch((response) => {
      console.log(response)
    })
  }, [selectedAppointment])

  const modalSetData = (modal, time, location, date) => {
    setModal(!modal)
    setCurrentTime(time)
    setCurrentLocation(location)
    setDateModal(date)
  }

  return(
    <>
      <div className="schedule-card">  
        <form>
            <label className="campain-label">
              Campanha
              <select className="schedule-select" required={true}>
                  <option value="covid-19">Covid-19</option>
              </select>
            </label>
            <label>
              Munic??pio
              <select value={city} className="schedule-select" onChange={e => {setCity(e.target.value)}}>
                <option value="">Selecione uma cidade</option>
                <option value="Natal">Natal</option>
                <option value="Mossor??">Mossor??</option>
              </select>
            </label>
            <label>
              Data
              <input value={date} type='date' className="input-date" required={true} onChange={e => {setDate(e.target.value)}} />
            </label>
            <div className="button-content">
              <div className="form-button" onClick={() => handleSearch()}>
                <p>
                  Procurar
                </p>
              </div>  
            </div>
        </form>
      </div>


      <div className="avaiable-times-panel" >
        <header className="avaiable-times-header">
            <p className="title">
                Locais de vacina????o {dateText &&  ` - ${dateText}`}
            </p>
        </header>

        {result.map(item => (
            <div className="times-and-vacancies-container">
              <p className="times-and-vacancies-title">
                {item.localizacao} | Covid-19 | 8h ??s 16h
              </p>
              <div className="times-and-vacancies-buttons">
                {item.vagas && Object.entries(item.vagas).filter(horario => horario[1] > 0).map((horario) => (<button className="time-and-vacancy-button" onClick={() => modalSetData(modal, horario[0], item.localizacao, item.data)}><div className="time"><p>{horario[0]}00</p></div><div className="vacancies"><p>{horario[1]} vagas</p></div></button>))}
              </div> 
              <div className="horizontal-line"/>
            </div>
          ))
        }
      </div>
      

      {/*quando o usu??rio clicar no bot??o de hor??rio desejado, aparecer?? o modal do comprovante de agendamento, no qual
      o usu??rio pode confirmar o agendamento ou cancelar e voltar para a o painel de hor??rios dispon??veis */}

      {modal && 
      <div className="confirm-schedule-modal" style={{ display: `block`}}>
        <div className="confirm-schedule-content">
          <p className="confirm-schedule-title">
            Confirmar agendamento
          </p>

          <div className="confirm-schedule-subtitle">
            <p className="date-and-hour">
            {dateModal && dateInitialModal(dateModal)} - {currentTime}
            </p>
          </div>

          <div className="confirm-schedule-text">
            <p className="confirm-schedule-text-title">
              Orienta????es
            </p>
            <ul style={{color: 'red'}}>
              <li>
              Caso sejam informados dados falsos relacionados ao seu agendamento, ele poder?? ser cancelado a crit??rio do vacinador ou supervisor da sala de vacina (Art. 299 - C??digo Penal)
              </li>
              <br/>
              <li>
              Voc?? poder?? cancelar seu agendamento com at?? 24h de anteced??ncia. Em caso de n??o comparecimento, um novo agendamento ser?? permitido ap??s 48h do agendamento anterior.
              </li>
              <br/>
              <li>
              O hor??rio de agendamento poder?? sofrer altera????es, caso surjam problemas log??sticos identificados pelo supervisor da sala de vacina.
              </li>
            </ul>
            <div className="horizontal-line"/>
          </div>

          <div className="appointment-information">
            <div className="information">
              <p>
                Cidad??o: 
              </p>
              <p>
                Jhonny Clark
              </p>
            </div>
            <div className="information">
              <p>
                Localiza????o: 
              </p>
              <p>
                {currentLocation}
              </p>
            </div>
            <div className="information">
              <p>
                Vacina: 
              </p>
              <p>
                Coronavac - Butantan
              </p>
            </div>
          </div>         


          <div className="confirm-schedule-buttons" >
            <div className="confirm-button" onClick={() => history.push('/meus-agendamentos')}>
              <p>
                Agendar
              </p> 
           </div>

           <div className="cancel-button" onClick={() => setModal(!modal)}> 
              <p>
                Cancelar
              </p>
            </div>
          </div>

        </div>

      </div>
      }

    </>
  );
}

export default ScheduleContainer;