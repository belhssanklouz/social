import Card from '../../share/components/UIElement/Card';
import './PlaceItem.css'
import Button from '../../share/components/FormElements/Button'
import React, { useState, useContext } from 'react';
import Modal from '../../share/components/UIElement/Modal';
import Map from '../../share/components/UIElement/Map';
import { AuthContext } from '../../share/context/Auth-context';
function PlaceItem (props) {

    const auth = useContext(AuthContext);

    const [showMap,setShowMap]=useState(false);
    const openMapHandler=()=>setShowMap(true);
    const closeMapHandler=()=>setShowMap(false);

    const [showconfirmDelete,setShowConfirmDelete]=useState(false);
    const confirmDeleteHandler = () => {
        setShowConfirmDelete(true);
    }
    const cancelDelete = () => {
        setShowConfirmDelete(false)
    }
    const confirmationHandler = () => {
        setShowConfirmDelete(false)
        console.log("Deleting...")
    }
    
    return(
        <React.Fragment>
            <Modal show={showMap} 
            onCancel={closeMapHandler} 
            header={props.address} 
            contentClass="place-item__modal-content" 
            footerClass="place-item__modal-actions" 
            footer={<Button onClick={closeMapHandler}>Close</Button>} >
                <div className="map-container">
                   <Map center={props.coordinates} zoom={16}/>
                </div>
            </Modal>
            <Modal show={showconfirmDelete} 
        onCancel={cancelDelete}
        header={"Are u sure ?"}
        footerClass="place-item__modal-actions"
        footer={<React.Fragment>
        <Button inverse onClick={cancelDelete}>Cancel</Button>
        <Button danger onClick={confirmationHandler}>Delete</Button>
        </React.Fragment>} >
            <p>Are you sure ? if a place was deleted then you can't recover it</p>
        </Modal>
        <li className="place-item">
        <Card className="place-item__content">
            <div className="place-item__image">
                <img src={props.image} alt={props.title}/>
            </div>
            <div className="place-item__info">
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className='place-item__actions'>
                <Button inverse onClick={openMapHandler}>View On Map</Button>
                { auth.isLoggedIn && <Button to={`/places/${props.id}`}>Edit</Button>}
                { auth.isLoggedIn && <Button onClick={confirmDeleteHandler}danger>Delete</Button>}
            </div>
        </Card>
        </li>
        </React.Fragment>
    )
}
export default PlaceItem;