import PropTypes from 'prop-types';
import './Tile.css';

export function Tile(props) {
    const { contact } = props;

    return (
        <ul className='TileListContact'>
            <li key={contact.name}>Name: {contact.name}</li>
            <li key={contact.phone}>Phone: {contact.phone}</li>
            <li key={contact.email}>Email: {contact.email}</li>
        </ul>
    );
}

Tile.propTypes = {
    contact: PropTypes.object.isRequired
};