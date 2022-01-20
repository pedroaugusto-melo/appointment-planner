import './App.css';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { ContactsPage } from '../ContactsPage/ContactsPage';
import { AppointmentsPage } from '../AppointmentsPage/AppointmentsPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phone, email) => {
    setContacts(prevContacts => [
      ...prevContacts, 
      {
        name: name,
        phone: phone,
        email: email
      }
    ]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments(prevAppointments => [
      ...prevAppointments, 
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      }
    ]);
  };

  return (
    <div className="App">
      <header className='AppHeader'>
        <nav className='NavBar'>
          <Link to="/" className="NavItem">Home</Link>
          <Link to="/contacts" className='NavItem'>Contacts</Link>
          <Link to="/appointments" className='NavItem'>Appointments</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route exact path="/" element={<Home />}/>

          <Route 
            path="/contacts" 
            element={<ContactsPage 
                      contacts={contacts}
                      addContact={addContact}/>} />
          <Route 
            path="/appointments" 
            element={<AppointmentsPage 
                      appointments={appointments}
                      contacts={contacts}
                      addAppointment={addAppointment}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
