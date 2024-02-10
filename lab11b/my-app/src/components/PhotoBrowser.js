import PhotoList from './PhotoList.js'; 
import EditPhotoDetails from './EditPhotoDetails.js'; 
import React, { useEffect, useState } from "react";

const PhotoBrowser = props => { 
    const [currentPhoto, setCurrentPhoto] = React.useState(15);

    const showImageDetails = (id) => {
        setCurrentPhoto(id);
    }

    return ( 
        <section className="container"> 
            <PhotoList  photos={props.photos} showImageDetails={showImageDetails}/> 
            <EditPhotoDetails photos={props.photos} currentPhoto={currentPhoto} updatePhoto={props.updatePhoto}/> 
        </section> 
 ); 
} 
export default PhotoBrowser;