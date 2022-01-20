import PropTypes from 'prop-types';
import { Tile } from '../Tile/Tile';
import './TileList.css';

export function TileList(props) {
    const { contacts } = props;

    return (
        <ul className="TileList">
            {contacts.map(contact => (
                <li key={contact.name}>
                    <Tile contact={contact} />
                </li>
            ))}
        </ul>
    );
}

TileList.propTypes = {
    contacts: PropTypes.array.isRequired
};