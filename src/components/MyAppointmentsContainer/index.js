import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import './styles.less'

import AppointmentCard from '../AppointmentCard'
import PreviousPageIcon from '../../assets/MeusAgendamentos/Icon feather-chevron-left.png'
import NextPageIcon from '../../assets/MeusAgendamentos/Icon feather-chevron-left-1.png'

const formatDate = (date) => {
  const [year, month, day] = date.split('-')

  return `${day}-${month}-${year}`
}

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

const MyAppointmentsContainer = ({ filterLocalization }) => {

    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)

    const [appointmentDate, setAppointmentDate] = useState("")
    const [appointmentStatus, setAppointmentStatus] = useState("")
    const [appointmentLocalization, setAppointmentLocalization] = useState("")
    const [appointmentTime, setAppointmentTime] = useState("")

    // inicia em 0 para o slice funcionar
    const [currentPage, setCurrentPage] = useState(0);
    const [lastPage, setLastPage] = useState(1);
    const [pagination, setPagination] = useState([1])

    // verificações da paginação

    const nextPage = () => {
        if((currentPage + 1) === lastPage){
            return
        } 
        setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if((currentPage+1) === 1){
            return
        }
        setCurrentPage(currentPage - 1)
    }

    useEffect(() => {
        api
        .get(`/agendamentos`,
        )
        .then(({data}) => {
            const result = filterLocalization ? data.data.filter(item => item.localizacao === filterLocalization) : data.data
            setData(result)
            setLastPage(Math.floor(result.length/4) + 1)
        })
        .catch((response) => {
          console.log(response)
        })
        //eslint-disable-next-line
    }, [filterLocalization])

    useEffect(() => {
        setPagination(Array(lastPage).fill(null).map((_, i) => i ))
    }, [lastPage])
   
    
    return(
        <>
        <div className="my-appointments-container">
            <div className="my-appointments-cards">
                {data && data.slice(0 + (currentPage*4),4 + (currentPage*4)).map(item => (
                    <AppointmentCard
                    vacina={item.vacina}
                    status={item.status}
                    municipio={item.municipio}
                    localizacao={item.localizacao}
                    data={formatDate(item.data)}
                    horario={item.horario}
                    openModal={() => {
                        setModal(true)
                        setAppointmentDate(item.data)
                        setAppointmentLocalization(item.localizacao)
                        setAppointmentTime(item.horario)
                        setAppointmentStatus(item.status)
                    }}
                    />
                ))   
                }
            </div>

            <div className="pages-buttons-content">
                <div className="previous-page-button" onClick={() => prevPage()} style={{cursor: 'pointer'}}>
                    <img src={PreviousPageIcon} alt='Voltar'/>
                </div>

                <div className="pagination" >
                    {pagination.map(page => (
                        <div className={`page-index ${(page === currentPage) && 'active'}`} onClick={() => { setCurrentPage(page) }}>
                            <p>
                                {page + 1}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="next-page-button" onClick={() => nextPage() } style={{cursor: 'pointer'}}>
                    <img src={NextPageIcon} alt='Próximo'/>
                </div>
            </div>



        {modal && 
                <div className="confirm-schedule-modal" style={{ display: `block`}}>
                    <div className="confirm-schedule-content">
                    <p className="confirm-schedule-title">
                        Comprovante de agendamento
                    </p>

                    <div className="confirm-schedule-subtitle">
                        <p className="date-and-hour">
                        {appointmentDate && dateInitial(appointmentDate)} - {appointmentTime}
                        </p>
                        <p className="status" style={statusColor(appointmentStatus)}>
                        {appointmentStatus}
                        </p>
                    </div>

                    <div className="confirm-schedule-text">
                        <p className="confirm-schedule-text-title">
                        Orientações
                        </p>
                        <ul style={{color: 'red'}}>
                        <li >
                        Caso sejam informados dados falsos relacionados ao seu agendamento, ele poderá ser cancelado a critério do vacinador ou supervisor da sala de vacina (Art. 299 - Código Penal)
                        </li>
                        <br/>
                        <li>
                        Você poderá cancelar seu agendamento com até 24h de antecedência. Em caso de não comparecimento, um novo agendamento será permitido após 48h do agendamento anterior.
                        </li>
                        <br/>
                        <li>
                        O horário de agendamento poderá sofrer alterações, caso surjam problemas logísticos identificados pelo supervisor da sala de vacina.
                        </li>
                        </ul>
                        <div className="horizontal-line"/>
                    </div>

                    <div className="appointment-information">
                        <div className="information">
                        <p>
                            Cidadão: 
                        </p>
                        <p>
                            Jhonny Clark
                        </p>
                        </div>
                        <div className="information">
                        <p>
                            Localização: 
                        </p>
                        <p>
                            {appointmentLocalization}
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
                        <div className="confirm-button" onClick={() => setModal(!modal)} style={{backgroundColor:'var(--white)', border:'1px solid #ABABAB', borderRadius:'4px'}}>
                        <p style={{color:'var(--dark-gray)'}}>
                            Fechar
                        </p> 
                        </div>

                        { appointmentStatus !== "Cancelado" && 
                        <div className="cancel-button" onClick={() => setModal(!modal)}> 
                            <p>
                                Cancelar agendamento
                            </p>
                        </div>}

                        <div className="confirm-button" onClick={() => window.print()} style={{backgroundColor:'var(--light-blue)', borderRadius:'4px'}}> 
                            <p style={{color:'var(--white)'}}>
                                Imprimir
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>}
        </div>
        </>
    );

}

export default MyAppointmentsContainer