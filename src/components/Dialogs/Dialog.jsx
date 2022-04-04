import style from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialog = (props) => {

    const dialogElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messageElements = props.messages.map(message => <Message id={message.id} message={message.message}/>)

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