import React, { useRef, useEffect } from 'react';
import './Map.css';

function Map (props) {
    
    
    const {center, zoom}=props;
    const mapRef=useRef();
    useEffect(()=>{
        
        const map = new window.google.maps.Map(mapRef.current,{center:center,zoom:zoom});

        new window.google.maps.Marker({position:center, map:map})
    }, [center, zoom]);
    
    return(
        <React.Fragment>
        <div ref={mapRef} className={`map ${props.class}`} style={props.style}>

        </div>
        </React.Fragment>
    )
}
export default Map;