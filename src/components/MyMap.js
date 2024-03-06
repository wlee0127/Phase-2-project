
import { APIProvider, Map, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import React, {useState, useEffect} from "react";

function MyMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMarker, setCurrentMarker] = useState(null); 

  const handleStoreCard = ()=>{

  }

  const handleMarkerHover = (marker) => {
    setIsOpen(true);
    setCurrentMarker(marker);
  };

  const handleMarkerLeave = () => {
    setIsOpen(false);
  };

  useEffect(()=>{
    console.log(`isOpen:${isOpen}`);
  },[isOpen])


  const position = { lat: 40.7120, lng: -73.9968 }; 
  const position02 = {lat: 40.7125 , lng: -73.9969 };
  const position03 = {lat: 40.7129 , lng: -73.9972 };
  const APIkey = ""; 

  return (
    <APIProvider apiKey={APIkey}>
      <Map style= {{ width: '90vw', height: '90vh', display: 'flex', justifyContent: 'center'}} defaultCenter={position} defaultZoom={18}>
        <Marker position={position} onMouseOver={() => {handleMarkerHover("marker 1")}} onMouseOut={handleMarkerLeave} onClick={handleStoreCard}>

        </Marker>
        <Marker style={{ width: 50, height: 50 }} position={position02} />
        <Marker style={{ width: 50, height: 50 }} position={position03} />
      </Map>
    </APIProvider>
  );
}

export default MyMap;
