import './App.css';
import Nav from "./components/Nav/Nav";
import Dialog from "./components/Dialogs/Dialog";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<Dialog dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path='/profile/*' element={<Profile posts={props.posts}/>}/>
                        <Route path='news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
