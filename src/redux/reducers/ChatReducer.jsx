import { combineReducers } from "redux"

const initState = {
    chat: null,
}

const chatInitMsg = {
    message: ""
}

const ChatReducer = (state = initState, action) => {
    console.log("action",action.chat)
    if(action.type === "SELECT_CHAT"){
        state = action.chat
    }
    
    return state;
}

const MessageReducer = (state = chatInitMsg, action) => {
    console.log("action",action);

    if(action.type === "NEW_MSG") {
        state = action;
    }

    return state; 
}

export default combineReducers({ChatReducer: ChatReducer, MessageReducer: MessageReducer});