// create the initial state
const initialState = {
    todos: ['wash car', 'work out', 'mow the lawn']
};

// create a string constant for our action type
// this will help to prevent any types and makes it easier to debug
export const ADD_TODO = 'ADD_TODO';


// create our reducer function
export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            const newTodos = [...state.todos, action.payload];
            return Object.assign({}, state, {todos: newTodos});
        default:
            return state;
    }
};