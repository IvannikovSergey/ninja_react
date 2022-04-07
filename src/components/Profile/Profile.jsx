import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div className={style.appWrapperContent}>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts} addPost={props.addPost} updatePostText={props.updatePostText}/>
    </div>
}

export default Profile;