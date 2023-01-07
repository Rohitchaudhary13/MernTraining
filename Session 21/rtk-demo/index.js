const store = require('../react-rtk-demo/my-react-app/src/app/store');
const sneakerActions = require('../rtk-demo/features/sneaker/sneakerSlice').sneakerActions;
const shirtActions = require('../rtk-demo/features/shirt/shirtSlice').shirtActions;


// console.log('Initial State', store.getState());

// const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));


store.dispatch(sneakerActions.ordered());
store.dispatch(sneakerActions.ordered());
store.dispatch(sneakerActions.ordered());
store.dispatch(sneakerActions.restocked(5));

store.dispatch(shirtActions.ordered());
store.dispatch(shirtActions.ordered());
store.dispatch(shirtActions.restocked(4));


// unsubscribe();