import PropTypes from 'prop-types';
import './ContactForm.css';

export function ContactForm(props) {
    const { name, phone, email } = props;  
    const {onChangeName, onChangePhone, onChangeEmail} = props;
    const {onSubmit} = props;

    const handleNameChange = ({ target }) => {
        onChangeName(target.value);
    };

    const handlePhoneChange = ({ target }) => {
        onChangePhone(target.value);
    };

    const handleEmailChange = ({ target }) => {
        onChangeEmail(target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, phone, email);
    };

    
    return (
        <form className="ContactForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                value={name} 
                id="name" 
                placeholder="Write the name here"
                onChange={handleNameChange} 
                required/>

            <label htmlFor="phone">Phone</label>
            <input 
                type="text"
                value={phone}
                id="phone"
                placeholder="Write the phone here"
                onChange={handlePhoneChange}
                pattern='[0-9]{11}' 
                required/>

            <label htmlFor="email">Email</label>
            <input 
                type="email"
                value={email}
                id="email"
                placeholder="Write the email here"
                onChange={handleEmailChange} 
                required/>

            <input type="submit" value="Add Contact"/>
        </form>
    );
}

ContactForm.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onChangePhone: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};