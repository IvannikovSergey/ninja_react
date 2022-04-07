import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <div className='navbar-fixed'>
        <nav>
            <div className="nav-wrapper teal lighten-2">
                <a href="#" className="brand-logo right">Logo</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink
                        to='/profile'
                        className={event => event.isActive ? style.active : ''}>
                        Profile
                    </NavLink></li>
                    <li><NavLink
                        to="/dialogs"
                        className={e => e.isActive ? style.active : ''}>
                        Messages
                    </NavLink></li>
                    <li><NavLink to="/news" className={e => e.isActive ? style.active : ''}>News</NavLink></li>
                    <li><NavLink to="/music" className={e => e.isActive ? style.active : ''}>Music</NavLink></li>
                    <li><NavLink to="/settings" className={e => e.isActive ? style.active : ''}>Settings</NavLink></li>
                </ul>
            </div>
        </nav>
    </div>
}
export default Nav;