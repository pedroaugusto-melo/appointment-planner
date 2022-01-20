import { useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { TileList } from '../TileList/TileList';
import PropTypes from 'prop-types';
import './ContactsPage.css';

export function ContactsPage(props) {
    const { contacts, addContact } = props;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const onChangeName = name => {
        setName(name);
        if(contactExists(name)) window.alert('This contact\'s name already exists!');
    };

    const onChangePhone = phone => {
        setPhone(phone);
    };

    const onChangeEmail = email => {
        setEmail(email);
    };

    const onSubmit = (name, phone, email) => {
        if(!contactExists(name)) {
            addContact(name, phone, email);
            resetContactData();
        } else {
            window.alert('This contact\'s name already exists!');
        }
    };

    const resetContactData = () => {
        setName('');
        setPhone('');
        setEmail('');
    };

    const contactExists = name => {
        const alreadyIn = contacts.find(contact => contact.name === name);
        return alreadyIn;
    };

    return (
        <div className="Contacts">
            <h1>Contacts</h1>
            
            <h2>Add New Contact</h2>
            <ContactForm 
                name={name}
                phone={phone}
                email={email}
                onChangeName={onChangeName}
                onChangePhone={onChangePhone}
                onChangeEmail={onChangeEmail} 
                onSubmit={onSubmit}/>

            <h2>Contact List</h2>
            <TileList contacts={contacts}/>        
        </div>
    );
}

ContactsPage.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func.isRequired
};