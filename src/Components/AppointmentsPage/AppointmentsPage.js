import { useState } from "react";
import PropTypes from 'prop-types';
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";
import { TileList } from "../TileList/TileList";
import './AppointmentPage.css';

export function AppointmentsPage(props) {
    const { appointments, contacts, addAppointment } = props;

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addAppointment(title, contact, date, time);
        resetAppointmentData();
    };

    const resetAppointmentData = () => {
        setTitle('');
        setContact('');
        setDate('');
        setTime('');
    };
    
    return (
        <div className="AppointmentsPage">
            <h1>Appointments</h1>

            <section className="AddAppointment">
                <h2>Add Appointment</h2>
                <AppointmentForm 
                            title={title}
                            contact={contact}
                            date={date}
                            time={time}
                            contacts={contacts}
                            setTitle={setTitle}
                            setContact={setContact}
                            setDate={setDate}
                            setTime={setTime}
                            handleSubmit={handleSubmit}/>
            </section>

            <section className="Appointments">
                <h2>Appointments</h2>
                <TileList list={appointments}/>
            </section>
        </div>
    );
}

AppointmentsPage.propTypes = {
    appointments: PropTypes.array.isRequired,
    contacts: PropTypes.array.isRequired,
    addAppointment: PropTypes.func.isRequired
};