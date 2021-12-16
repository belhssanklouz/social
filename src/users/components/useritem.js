import Avatar from '../../share/components/UIElement/Avatar';
import {Link} from 'react-router-dom';
import './useritem.css';
import Card from '../../share/components/UIElement/Card';
function UserItem (props) {
    return(
        <li className="user-item">
                <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                <div className="user-item__image">
                    <Avatar image={props.image} alt={props.name} />
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.placecount} {props.placecount===1 ? 'Place' : 'Places'}</h3>
                </div>
                </Link>
                </Card>
        </li>
    )
}
export default UserItem;