import Card from '../../share/components/UIElement/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';
import Button from '../../share/components/FormElements/Button';
function PlaceList (props) {
    if(props.items.length === 0){
        return <div className="place-list center">
            <Card>
            <h2>No places found. Maybe create one ?</h2>
            <Button>Share Place</Button>
            </Card>
        </div>
    }
    return(
        <ul className="place-list">
            {props.items.map((place)=>{
               return <PlaceItem 
               key={place.id} 
               id={place.id} 
               image={place.imageUrl} 
               title={place.title} 
               description={place.description} 
               address={place.address} 
               creatorId={place.creator} 
               coordinates={place.location} 
                />
            })}
        </ul>
    )
}
export default PlaceList;