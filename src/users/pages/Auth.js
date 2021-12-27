import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "../../share/components/form-hook";
import Button from "../../share/components/FormElements/Button";
import Input from "../../share/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../../share/util/validators";
import {AuthContext} from '../../share/context/Auth-context';
import './Auth.css'


function Auth () {

    const auth = useContext(AuthContext);

    const [inputState,inputHandler,setFormData] = useForm({
        email:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        }

    },false)

    const [signUpMode,setSignUpMode] = useState(false);

    const signUpModeHandler = () => {
        if (signUpMode){
            setFormData(
                {
                  ...inputState.inputs,
                  name: undefined,
                },
                inputState.inputs.email.isValid && inputState.inputs.password.isValid
              );
        }else{
            setFormData({
                ...inputState.inputs,
                name:{
                    value:'',
                    isValid:false
                }
            },false)
        }
        setSignUpMode(prevMode=>!prevMode)
    }

    const loginSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(inputState.inputs)
        auth.login();
    }

  
    return(<Card className="authentication">
        <h2>Authentification Required</h2>
        <hr />
    <form onSubmit={loginSubmitHandler}>
        {signUpMode && (<Input element="input" id='name' label='Name' validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler} errormsg='Enetr your name'/>)
        }
        <Input id={'email'} element={'input'} label={'Username & E-Mail'} validators={[VALIDATOR_EMAIL()]} onInput={inputHandler} errormsg={"Please enter a valid address mail"} />
        <Input id={'password'} element={'input'} label={'Password'} type={"password"} validators={[VALIDATOR_MINLENGTH(5)]} onInput={inputHandler} errormsg={"Please enter a valid password"}/>
        <Button type="submit" disabled={!inputState.isValid}>{signUpMode ? ('Sign up'):('Login')}</Button>
        <Button inverse onClick={signUpModeHandler}>Switch to {!signUpMode ? ('Sign up'):('Sign in')}</Button>
    </form>
    </Card>)
}
export default Auth;