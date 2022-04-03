import style from './Dialog.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    const path = '/dialogs/' + props.id
    return <div className={style.dialog}>
        <NavLink to={path}>
            {props.name}
        </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={style.dialog}>{props.message}</div>
}

const Dialog = () => {

    const dialogs = [
        {id: '1', name: 'Ivan'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Boris'},
        {id: '4', name: 'Vasia'},
        {id: '5', name: 'Sveta'},
    ]
    const messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'HiHi'},
        {id: '3', message: 'HoiHi'},
        {id: '4', message: 'HYoyoYo'}
    ]
    const dialogElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messageElements = messages.map(message => <Message id={message.id} message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogElements}
            </div>

            <div className={style.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialog