                    //increment
//index will tell us which post has it likes incremented

//action is the object returned but the action creator puts it together and dispatch it out
export function increment(index){
//return an object, as actions are just an object
    return {
        //name of the action

        //you dont want to send the entire post in your increment, you only want to send as little information as possible
        type: 'INCREMENT_LIKE',
        index
    }
}

//add comment
export function addComment (postId, author, comment){
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment
// 'i' is the comment index
export function removeComment (postId, i){
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}


//so when the action creators dispatch the action, how do we handle the data and insert it into the store which is what reducer is all about
//action or action creator gets dispatched with information about what happened

//so when action gets dispatched with information about what happened and what is doesn't do is update our states which are store in
//redux, so we need to create a reducer that will handle and update the state
