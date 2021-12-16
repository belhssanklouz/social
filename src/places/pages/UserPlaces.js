import PlaceList from "../components/PlaceList";
import { useParams } from "react-router";
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
    title:'Empire State Building',
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

function UserPlaces () {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place=>place.creator===userId)
    return(
       <PlaceList items={loadedPlaces}/>
    )
}
export default UserPlaces;