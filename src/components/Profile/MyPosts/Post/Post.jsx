import style from './Post.module.css'

const Post = (props) => {
    return <div className={style.item}>
        <div>
            <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar"/>
        </div>
        <div className={style.textItem}>
            {props.message}
            likes: {props.likes}
        </div>
    </div>
}

export default Post