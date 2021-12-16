
import Input from "../../share/components/FormElements/Input";
import {
    VALIDATOR_MINLENGTH,
     VALIDATOR_REQUIRE} 
from '../../share/util/validators';
import Button from '../../share/components/FormElements/Button'
import './PlaceForm.css';
import { useForm } from "../../share/components/form-hook";


const NewPlaces =() => {
   const [formState , inputHandler] = useForm({
        title:{
            value :'',
            isValid: false
        },
        description:{
            value :'',
            isValid: false
        },
        address:{
            value :'',
            isValid: false
        }
    },false);
    const formSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }
 
    return(
        <form className='place-form' onSubmit={formSubmitHandler}>
            <Input id='title' element='input' label='input' type='Text' errormsg="Enter at least 1 character" validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler}/>
            <Input id='description' element='textarea' label='text area' type='text' errormsg='Enter at least 5 characters' validators={[VALIDATOR_MINLENGTH(5)]} onInput={inputHandler}/>
            <Input id='address' element='input' label='Address' type='text' errormsg='Enter at least 1 character' validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler}/>

            <Button type="submit" disabled={!formState.isValid}>
            Add Place 
        </Button>  
        </form>
    )
}
export default NewPlaces;