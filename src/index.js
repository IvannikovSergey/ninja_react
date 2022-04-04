import React from 'react';
import './index.css';
import App from './App';
import ReactDOMClient from "react-dom/client";

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

const posts = [
    {id: '1', message: 'How are you?', likesCount: 12},
    {id: '2', message: 'OK', likesCount: 11}
]

const dialogs = [
    {id: '1', name: 'Ivan'},
    {id: '2', name: 'Andrey'},
    {id: '3', name: 'Boris'},
    {id: '4', name: 'Vasia'},
    {id: '5', name: 'Sveta'},
]
const messages = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'HiHi'},
    {id: '3', message: 'HoiHi'},
    {id: '4', message: 'HYoyoYo'}
]

root.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>
);
