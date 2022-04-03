import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = () => {
    return <div className={style.appWrapperContent}>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}

export default Profile;