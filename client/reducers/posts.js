// a reducer takes in 2 things
//1. the action (info about what happened)
//2. copy of the current state

//so essentially what happens is that the reducer gets the action (info about what happens) and the state (store) and handle and update the
//data then return a brand new copy of the store with the stuff that's been update, then react will update what it needs for the UI

//the reason why we set the state empty as this the first time the reducer runs, state wont be equal to anything
function posts(state = [], action){
   switch (action.type) {
       case 'INCREMENT_LIKE' :
           console.log('incrementing like');
           const i = action.index;
           // return the updated state
           return [
               ...state.slice(0, i), // before the one we are updating
               {...state[i], likes: state[i].likes + 1},//passing the new object, by taking a copy of the actual object
               ...state.slice(i + 1), // after the one we are updating
           ];

       default:
           return state;
   }
}

export default posts;
