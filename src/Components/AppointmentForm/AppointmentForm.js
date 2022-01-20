import { getActualDateFormated } from "../../Utilities/Utilities";
import { ContactPicker } from "../ContactPicker/ContactPicker";
import './AppointmentForm.css';

export function AppointmentForm(props){
    const { title, date, time, contacts } = props;
    const { setTitle, setContact, setDate, setTime } = props;
    const { handleSubmit } = props;

    const handleDateChange = e => {
        setDate(e.target.value);
    };

    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handleTimeChange = e => {
        setTime(e.target.value);
    };

    const handleContactChange = e => {
        setContact(e.target.value);
    };


    return (
        <form className="AppointmentForm" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input 
                type="text"
                id="title"
                value={title}
                minLength="5"
                maxLength="50"
                onChange={handleTitleChange}
                placeholder="Write the title here"/>

            <label htmlFor="date">Date:</label>
            <input 
                type="date"
                id="date"
                value={date}
                min={getActualDateFormated()} 
                onChange={handleDateChange}/>

            <label htmlFor="time">Time</label>
            <input 
                type="time"
                id="time"
                value={time}
                min="08:00"
                max="18:00"
                onChange={handleTimeChange} />

            <ContactPicker 
                contacts={contacts} 
                handleContactChange={handleContactChange} />
            
            <input type="submit" value="Add Appointment"/>
        </form>
    );
}