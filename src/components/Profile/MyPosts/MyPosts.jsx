import Post from "./Post/Post";
import style from './MyPosts.module.css'

const MyPosts = (props) => {

    const posts = [
        {id: '1', message: 'How are you?', likesCount: 12},
        {id: '2', message: 'OK', likesCount: 11}
    ]
    const postElement = posts.map(post => <Post message={post.message} likes={post.likesCount}/>)

    return <div className={style.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <textarea/>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={style.posts}>
            {postElement}
        </div>
    </div>
}

export default MyPosts
