import './ContactPicker.css';

export function ContactPicker(props) {
    const { contacts, handleContactChange } = props;

    return (
        <div className='ContactPicker'>
            <label htmlFor='contact'>Contact</label>
            <select id="contact" onChange={handleContactChange} required>
                <option key="" value=""></option>
                {contacts.map(contact => (
                    <option 
                        key={contact.name} 
                        value={contact.name}>{contact.name}</option>
                ))}
            </select>
        </div>
    );
}