const redux = require('redux');
const combineReducer = redux.combineReducers;
const { default: logger } = require('redux-logger');
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

//initialState
const initialSneakerState = {
    numOfSneakers: 10,
}
const initialShirtState = {
    numOfShirts: 20,
}


//action
const BUY_SNEAKER = 'BUY_SNEAKER';
const BUY_SHIRT = 'BUY_SHIRT';
const RESTOCK_SNEAKER = 'RESTOCK_SNEAKER';
function buySneaker(){
    return {
        type: BUY_SNEAKER,
        info: 'My First Sneaker'
    }
}

function restockSneaker(qty){
    return {
        type: RESTOCK_SNEAKER,
        payload: qty
    }
}
function buyShirt(){
    return {
        type: BUY_SHIRT,
    }
}
//reducer
const sneakerReducer = (state = initialSneakerState, action) => {
    switch(action.type){
        case BUY_SNEAKER: return {
            ...state,
            numOfSneakers: state.numOfSneakers - 1
        }
        case RESTOCK_SNEAKER: return {
            ...state,
            numOfSneakers: state.numOfSneakers + action.payload
        }
        default : return state
    }
}
const shirtReducer = (state = initialShirtState, action) => {
    switch(action.type){
        case BUY_SHIRT: return {
            ...state,
            numOfShirts: state.numOfShirts - 1
        }
        default : return state
    }
}

// responsiblites
//1. Hold App State

//2. Allow access to state via getState()
//3. Allow state to updated via dispatch(action)
//4. Register Listener via subscribe()
//5. Unregister listener via subscribe() [unsubscribe]

const rootReducer = combineReducer({
    sneaker: sneakerReducer,
    shirt: shirtReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));

// console.log('State', store.getState());

// const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));

store.dispatch(buySneaker());
store.dispatch(buySneaker());
store.dispatch(buySneaker());
store.dispatch(buySneaker());
store.dispatch(restockSneaker(5));
store.dispatch(buyShirt());
store.dispatch(buyShirt());
store.dispatch(buyShirt());
store.dispatch(buyShirt());
// unsubscribe();

//immer
// redux thunk
//redux devetools