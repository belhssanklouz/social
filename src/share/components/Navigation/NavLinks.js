import './NavLinks.css';
import {NavLink} from 'react-router-dom';
import { useState,useContext } from 'react';
import { AuthContext } from '../../context/Auth-context';
function NavLinks (props) {

    const auth = useContext(AuthContext);

    let [CurrentPosition,setCurrentPosition]=useState();

    let over =(ev)=>{
        let style = ev.target;
        let OldPosition = CurrentPosition;
        CurrentPosition = ev.clientX
        if (OldPosition < CurrentPosition) {
            style.classList.add("right");
            style.classList.remove("left");
            setCurrentPosition(CurrentPosition)
        } else if (OldPosition > CurrentPosition) {
            style.classList.add("left");
            style.classList.remove("right");
            setCurrentPosition(CurrentPosition);
        }
    }
    let out =(ev)=>{
        let style = ev.target;
        let OldPosition = CurrentPosition;
        if (OldPosition < ev.clientX) {
            style.classList.add("right");
            style.classList.remove("left");
            setCurrentPosition(CurrentPosition);

        } else if (OldPosition > ev.clientX) {
            style.classList.remove("right");
            style.classList.add("left");
            setCurrentPosition(CurrentPosition);

        }
    }
    return(
        <ul className="nav-links">
           <NavLink to="/"><li onMouseOver={over} onMouseOut={out}>All Users</li></NavLink>
           {auth.isLoggedIn && <NavLink to="/u1/places"><li onMouseOver={over} onMouseOut={out}>My Places</li></NavLink>}
           {auth.isLoggedIn && <NavLink to="/places/new"><li onMouseOver={over} onMouseOut={out}>New Place</li></NavLink>}
           {!auth.isLoggedIn &&<NavLink to="/auth"><li onMouseOver={over} onMouseOut={out}>Authenticate</li></NavLink>}
           {auth.isLoggedIn &&<NavLink to='/' onClick={auth.logout}><li onMouseOver={over} onMouseOut={out}>Logout</li></NavLink>}

        </ul>
    )
}
export default NavLinks;