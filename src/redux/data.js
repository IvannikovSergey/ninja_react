import {reRender} from "../Render";

const state = {
    profilePage: {
        posts: [
            {id: '1', message: 'How are you?', likesCount: 12},
            {id: '2', message: 'OK', likesCount: 11}
        ],
        newPostText: 'Helloчччч'
    },
    dialogPage: {
        dialogs: [
            {id: '1', name: 'Ivan'},
            {id: '2', name: 'Andrey'},
            {id: '3', name: 'Boris'},
            {id: '4', name: 'Vasia'},
            {id: '5', name: 'Sveta'},
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'HiHi'},
            {id: '3', message: 'HoiHi'},
            {id: '4', message: 'HYoyoYo'}
        ]
    }
}
// window.state = state
export let addPost = (newPost) => {
    let post = {
        id: '3',
        message: newPost,
        likesCount: 0
    }
    state.profilePage.posts.push(post);
    updateText(newPost)
    reRender(state)
    updateText('')
}

export const updateText = (text) => {
    state.profilePage.newPostText = text
}

export default state