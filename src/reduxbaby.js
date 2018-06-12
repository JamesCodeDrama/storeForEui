const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return{
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    return state
}

// Store
const storetoto = createStore(rootReducer)

// Subscription
storetoto.subscribe(() => {
    console.log('[Subsacliption]', storetoto.getState());
});

// Dispatching Action
storetoto.dispatch({type: 'INC_COUNTER'})
storetoto.dispatch({type: 'ADD_COUNTER', value: 10})