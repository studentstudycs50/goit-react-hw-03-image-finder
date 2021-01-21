import React from "react";

const ImageGalleryItem = ({ image }) => {
    
    const { webformatURL, tags, largeImageURL} = image
    
    return (
        <li className="ImageGalleryItem">
            <img src={webformatURL} alt={tags} data-largeimg={largeImageURL} className="ImageGalleryItem-image"  />
        </li>
    );
};

export default ImageGalleryItem;