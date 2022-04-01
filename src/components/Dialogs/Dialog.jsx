import style from './Dialog.module.css'

const Dialog = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog}>
                    Petya
                </div>
                <div className={style.dialog}>
                    Petya
                < /div>
                <div className={style.dialog}>
                    Petya
                </div>
                <div className={style.dialog}>
                    Petya
                </div>
                <div className={style.dialog}>
                    Petya
                </div>
            </div>

            <div className={style.messages}>
                <div className={style.dialog}>Hi</div>
                <div className={style.dialog}>HiHi</div>
                <div className={style.dialog}>HoiHoi</div>
            </div>
        </div>
    )
}

export default Dialog