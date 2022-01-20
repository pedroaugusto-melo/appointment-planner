import PropTypes from 'prop-types';
import { capitalize } from '../../Utilities/Utilities';
import { generateRandomKey } from '../../Utilities/Utilities';
import './Tile.css';

export function Tile(props) {
    const { contact } = props;

    const keyValues = Object.entries(contact);

    return (
        <ul className='TileListContact'>
            {keyValues.map(keyValue => (
                <li key={generateRandomKey()}><span className='PropTitle'>{capitalize(keyValue[0])}</span>: {keyValue[1]}</li>
            ))}
        </ul>
    );
}

Tile.propTypes = {
    contact: PropTypes.object.isRequired
};