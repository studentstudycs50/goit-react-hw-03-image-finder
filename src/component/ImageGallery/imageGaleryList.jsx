import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const Images = ({images, modalIsOpen}) => {

    return (
        <ul className="ImageGallery" onClick={modalIsOpen}>
            {images.map(image =>
                <ImageGalleryItem
                key={image.id}
                image={image}
            />)}
        </ul>
    )
}

export default Images;