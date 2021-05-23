export const messageChat = (chat) => {
    return {
        type: 'NEW_MSG',
        chat
    }
}