import ReactDOMClient from "react-dom/client";
import App from "./App";
import {addPost, updatePostText} from "./redux/data";
import React from "react";

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

export const reRender = (state) => {
    root.render(
        <App state={state} addPost={addPost} updatePostText={updatePostText}/>
    );
}