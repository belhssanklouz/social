import { useEffect, useReducer } from 'react';
import { validate } from '../../util/validators';

import './input.css';

const reducer =(state,action) =>{
    switch(action.type){
        case 'CHANGE':
            return {
                ...state,
                value:(action.value),
                isValid:validate(action.value,action.validators)
            };
            case 'TOUCH':
                return{
                    ...state,
                    isTouched:true
                };
            default : 
            return state;
    }
}
function Input (props) {


   const [inputState,dispatch]= useReducer(reducer,{
    value:props.value || '',
    isTouched:false,
   isValid:props.valid || false});

   const inputHandler = (e) =>{
    dispatch({type:'CHANGE',
    value:e.target.value,
    validators: props.validators
    });
}

const touchHandler = () =>{
    dispatch({
        type:'TOUCH',

    })
}
const {id,onInput} = props;
const {value, isValid}=inputState;

useEffect(()=>{
    onInput(id, value, isValid)
},[id,value,isValid,onInput]);

// let [enteredValue, setEnteredValue]=useState('');
    // const [isValid,setIsValid]=useState(false);
    // const changeHandler = (event) => {
    //     setEnteredValue(event.target.value);
    //     if(enteredValue.length > 0){
    //         setIsValid(true);
    //     }
    // };
    const element =(
        props.element === 'input' ? (
        <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={inputHandler} value={inputState.value} onBlur={touchHandler}></input>) 
        : (<textarea id={props.id} rows={props.rows || 3} placeholder={props.placeholder} onChange={inputHandler} value={inputState.value} onBlur={touchHandler}></textarea>)
    );

    return(
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'} `}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errormsg}</p>}
        </div>
        
    )
}
export default Input;