import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { useForm } from "../../share/components/form-hook";
import Button from "../../share/components/FormElements/Button";
import Input from "../../share/components/FormElements/Input";
import Card from "../../share/components/UIElement/Card";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../share/util/validators";

import './PlaceForm.css';


const DUMMY_PLACES = [
    {id:'p1',
    title:'Empire State Building',
    description:'One of the most famous sky scrapers of the world',
    imageUrl:'https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/on_single_feature/public/2019-10/home_banner-min.jpg?itok=OVtUHvyB',
    address:'New York, État de New York 10001, États-Unis',
    location:{
        lat:40.7485452,
        lng:-73.9879522
    },
    creator:'u1'
},
{id:'p2',
    title:'Emp. State Building',
    description:'One of the most famous sky scrapers of the world',
    imageUrl:'https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/on_single_feature/public/2019-10/home_banner-min.jpg?itok=OVtUHvyB',
    address:'New York, État de New York 10001, États-Unis',
    location:{
        lat:40.7485452,
        lng:-73.9879522
    },
    creator:'u2'
}
]

function UpdatePlace () {
    const [isLoading,setIsLoading]=useState(true);

    const [formState,inputHandler,setFormData] = useForm({
        title :{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        }
    
    },false);

    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_PLACES.find(p=> p.id === placeId);
    useEffect(()=>{
        if(identifiedPlace){
            setFormData({
                title :{
                    value:identifiedPlace.title,
                    isValid:true
                },
                description:{
                    value:identifiedPlace.description,
                    isValid:true
                }
             
            },true)
        }
        
    setIsLoading(false);

    },[identifiedPlace,setFormData ])
    

const updateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs)
}
   
if(!identifiedPlace){
   return <div className="center">
       <Card><h2>Could not found place!</h2></Card></div>
}
    if(isLoading){
        return <div className="center"><h2>Loading</h2></div>
    }
    return (
        <form className="place-form" onSubmit={updateSubmitHandler}>
            <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errormsg="Please enter a valid title" onInput={inputHandler} value={formState.inputs.title.value} valid={true}/>
            <Input id="description" element="textarea" type="text" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errormsg="Please enter a valid description" onInput={inputHandler} value={formState.inputs.description.value} valid={formState.inputs.description.isValid}/>
            <Button type='submit' disabled={!formState.isValid}>Update Place</Button>
        </form>
    )
}
export default UpdatePlace;