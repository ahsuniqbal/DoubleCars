const initState = {
    chat: null,
}

const ChatReducer = (state = initState, action) => {
    console.log("action",action.chat)
    if(action.type === "SELECT_CHAT"){
        state = action.chat
    }
    return state;
}

export default ChatReducer;