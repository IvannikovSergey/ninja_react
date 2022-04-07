import Post from "./Post/Post";
import style from './MyPosts.module.css'
import {useRef} from "react";

const MyPosts = (props) => {
    const postElement = props.posts.map(post => <Post message={post.message} likes={post.likesCount}/>)
    const getMessage = useRef(null)

    const addNewPost = () => {
        props.addPost()
    }

    const onTextChange = () => {
        let text = getMessage.current.value;
        props.updatePostText(text)
    }
    return <div className="row">
        <h3>Мои сообщения</h3>
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <textarea onChange={onTextChange} defaultValue={props.newPostText} ref={getMessage}
                                  placeholder='Написать новость' id="textarea1"
                                  className="materialize-textarea"/>
                    </div>
                </div>
            </form>
        </div>
        <button onClick={addNewPost} className='waves-effect waves-light btn'>Add post</button>
        <div className={style.posts}>
            {postElement}
        </div>
    </div>
}

export default MyPosts
