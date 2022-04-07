import ReactDOMClient from "react-dom/client";
import App from "./App";
import {updateText, addPost} from "./redux/data";
import React from "react";


export const reRender = (state) => {
    const container = document.getElementById('root')
    const root = ReactDOMClient.createRoot(container)
    root.render(
        <App state={state} addPost={addPost}/>
    );
}