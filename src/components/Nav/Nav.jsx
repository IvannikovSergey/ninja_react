import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={style.nav}>
        <div className={style.item}>
            <NavLink
                to='/profile'
                className={event => event.isActive ? style.active : ''}>
                Profile
            </NavLink>
        </div>
        <div className={style.item}>
            <NavLink
                to="/dialogs"
                className={e => e.isActive ? style.active : ''}>
                Messages
            </NavLink>
        </div>
        <div className={style.item}><NavLink to="/news" className={e => e.isActive ? style.active : ''}>News</NavLink>
        </div>
        <div className={style.item}><NavLink to="/music" className={e => e.isActive ? style.active : ''}>Music</NavLink>
        </div>
        <div className={style.item}><NavLink to="/settings"
                                             className={e => e.isActive ? style.active : ''}>Settings</NavLink></div>
    </nav>
}
export default Nav;