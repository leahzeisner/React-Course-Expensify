import { createStore } from "redux";





// ACTION GENERATORS = functions that return Action Objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});





// REDUCERS
// 1. Reducers are pure functions -> output only determined by input
// 2. countReducer will never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;      
    }
}





const store = createStore(countReducer);





// subscribe() gets called every time the state changes
// call unsubscribe (at bottom) to stop subscription
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})





// ACTIONS - objects that get sent to the redux store


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5           
// });

// store.dispatch({
//     type: 'INCREMENT'               
// });
store.dispatch(incrementCount({ incrementBy: 5 }));     // count = 5
store.dispatch(incrementCount());                       // count = 6


store.dispatch(decrementCount());                       // count = 5
store.dispatch(decrementCount({ decrementBy: 8 }));     // count = -1


store.dispatch(resetCount());                           // count = 0


store.dispatch(setCount({ count: 101 }));               // count = 101





// stop subscription
unsubscribe();