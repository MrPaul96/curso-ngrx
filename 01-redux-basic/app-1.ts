/* An action that the reducer should do   */

/* An interface is a rule that an object should follow */

interface Action {
    type: string;
    payload?: any;  //Parameters that we can send to the action.
}

/* Reducer is just a function */

/* The main goal of reducer is to return a new state. Reducer must return a state. */
/* Default Value = 10 */
/* It is not usual to work with if - else inside a reducer. You use switch.*/

function reducer(state = 10, action: Action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        default:
            return state;
    }
}

//Using the reducer.

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};


const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};


const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};


const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};


console.log(reducer(10, incrementadorAction)); //11


console.log(reducer(10, decrementadorAction)); // 9


console.log(reducer(10, multiplicarAction)); // 20


console.log(reducer(10, dividirAction)); //5