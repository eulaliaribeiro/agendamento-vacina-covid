import React, { useState } from 'react'
import { useHistory } from 'react-router'
import api from '../../services/api'
import './styles.less'



const ScheduleCard = () => {
  // const history = useHistory()

  // const [message,setMessage] = useState('')

  const handleRequest = () => {
    api
    .get('/agendar/disponibilidade/30-05-2021')
    .then((response) => {
      /* setMessage('') */
    })
    .catch(({response}) => {
      /* setMessage(response.data.message) */
    })
  }

  return(
      <div className="schedule-card">  
        <form>
            <label className="campain-label">
                Campanha
                <select className="schedule-select" type="email" required={true}>
                    <option value="covid-19">Covid-19</option>
                </select>
            </label>
            <label>
                Município
                <select className="schedule-select" required={true}  />
            </label>
            <label>
                Data
                <input type='date' className="input-date" required={true} />
            </label>
            <div className="button-content">
              <div className="form-button" type="submit" onClick={() => handleRequest()}>
                <p>
                  Procurar
                </p>
              </div>  
            </div>
        </form>
      </div>
  );
}

export default ScheduleCard;