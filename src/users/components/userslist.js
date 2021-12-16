import UserItem from './useritem';
import './userslist.css'
function UsersList (props) {
    if(props.items.length === 0){
        return(
            <div className="center">
                <h2>
                    No users found.
                </h2>
            </div>
        )
    } 
    console.log(props.items);
    return (<ul className="users-list">
            {props.items.map(user =>
            <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placecount={user.places}/>
            )}
        </ul>
    )
}
export default UsersList;