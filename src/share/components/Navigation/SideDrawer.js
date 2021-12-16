import './SideDrawer.css';
import {CSSTransition} from 'react-transition-group';


function SideDrawer (props) {
    return (<div>
        <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
        <aside className="side-drawer" onClick={props.onClick}>
            {props.children}
        </aside>
        </CSSTransition>
        </div>
    )
}
export default SideDrawer;