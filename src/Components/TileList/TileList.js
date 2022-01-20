import PropTypes from 'prop-types';
import { generateRandomKey } from '../../Utilities/Utilities';
import { Tile } from '../Tile/Tile';
import './TileList.css';

export function TileList(props) {
    const { list } = props;

    return (
        <ul className="TileList">
            {list.map(item => (
                <li key={generateRandomKey()}>
                    <Tile contact={item} />
                </li>
            ))}
        </ul>
    );
}

TileList.propTypes = {
    list: PropTypes.array.isRequired
};