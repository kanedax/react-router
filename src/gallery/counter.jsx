import React from 'react';
import { useReducer } from 'react';

const init = {
    value1 : 0,
    value2 : 5
}

const reducer = (state , action)=>{
    switch (action.type) {
        case 'increase':
            return {...state , value1:state.value1 + action.val}
        case 'decrease':
            return {...state , value1:state.value1 - action.val}
        case 'increase2':
            return {...state , value2:state.value2 + action.val}
        case 'decrease2':
            return {...state , value2:state.value2 - action.val}
        case 'reset':
            return init
        default:
            return state;
    }
}

const Counter = () => {

    const[count , dispatch] = useReducer(reducer , init);

    return (
        <div className='counter'>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1> {count.value2} </h1>
            <h1> {count.value1} </h1>
            <button onClick={()=>dispatch({type : 'increase' , val : 1})}>increase</button>
            <button onClick={()=>dispatch({type : 'decrease' , val : 1})}>decrease</button>
            <button onClick={()=>dispatch({type : 'increase2' , val : 5})}>increase2</button>
            <button onClick={()=>dispatch({type : 'decrease2' , val : 3})}>decrease2</button>
            <button onClick={()=>dispatch({type : 'reset'})}>reset</button>
        </div>
    );
}

export default Counter;
