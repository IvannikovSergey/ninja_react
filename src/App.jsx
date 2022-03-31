import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
// import Profile from "./components/Profile/Profile"
import Dialog from "./components/Dialogs/Dialog";

const App = () => {
    return <div className='app-wrapper'>
        <Header/>
        <Nav/>
        <div className='app-wrapper-content'>
            <Dialog/>
            {/*<Profile/>*/}
        </div>
    </div>
}

export default App;
