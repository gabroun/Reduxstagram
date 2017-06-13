function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            //return the new state with the new comment
            return[...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            //we need to return the new state with the deleted comment

            return [
                //from the state to the one that we want to delete
                ...state.slice(0, action.i),
                //after the deleted one to the end
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
    return state
}
function comments(state = [], action){
   if(typeof action.postId !== 'undefined'){
        return {
            //take the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
   }
    return state;
}

export default comments;

//in redux we can only have one reducer, in this example we created comments and post reducer but we need to put them inside a root reducer
//in order for us to use it

//reducer composition, is updating a slice of the state which we can up in a reducer subdomain