import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return <div>
        <div className="row">
            <div className="col s12 m12">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' alt=''/>

                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default ProfileInfo