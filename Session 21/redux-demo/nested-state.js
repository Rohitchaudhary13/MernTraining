

const redux = require('redux');
const produce = require('immer').produce;

const applyMiddlewares = redux.applyMiddleware;

const createStore = redux.createStore;

//initialState
const initialState = {
    name: 'naman',
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    }
}


//action
const UPDATE_STREET = 'UPDATE_STREET';

function updateStreet(value){
    return {
        type: UPDATE_STREET,
        payload: value
    }
}

//reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_STREET: return produce(state, (draft) => {
            draft.address.street = action.payload
        })
        default : return state
    }
}

// responsiblites
//1. Hold App State

//2. Allow access to state via getState()
//3. Allow state to updated via dispatch(action)
//4. Register Listener via subscribe()
//5. Unregister listener via subscribe() [unsubscribe]

const store = createStore(reducer);

console.log('State', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));

store.dispatch(updateStreet('999 Main St'));

unsubscribe();

//immer

