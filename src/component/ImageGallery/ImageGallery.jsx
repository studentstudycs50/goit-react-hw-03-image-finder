import React, {Component} from 'react';
import Searchbar from '../Searchbar/Searchbar';
import fetchImagesQuery from '../../services/imagesApi'
import Images from '../ImageGallery/imageGaleryList';
import Loader from "react-loader-spinner"
import Modal from '../Modal/Modal'
import Button from '../Button/Button';

class ImageGallery extends Component {
    
    state = {
        query: '',
        page: 1,
        images: [],
        isLoader: false,
        modal: false,
        bigImg: null,
        alt: '',
    }

    onHandleChange = (event) => {   
    this.setState({query: event.target.value})
    }

    getImages = (event) => {
        event.preventDefault()
        this.setState ({isLoader: true});
        fetchImagesQuery(this.state.query)
        .then((data)=> this.setState({images: [...data], page: 2}))
        .finally(() => this.setState({ isLoader: false }));
    }
    componentDidUpdate() {
    
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
}

      onLoadMore = (event) => {
        event.preventDefault()
        this.setState ({isLoader: true});
        
          fetchImagesQuery(this.state.query, this.state.page)
            
        .then((data) => this.setState(prevState =>({ images: [...prevState.images, ...data], page: prevState.page + 1 })))
        .finally(() => this.setState({ isLoader: false }));
    } 

        
    modalIsOpen = (event) => {
        if (event.target.nodeName !== 'IMG') {
            return
        } else {
            this.setState({ modal: true })
            this.setState({ bigImg: event.target.dataset.largeimg })
        };
        
    }

    closeModal = () => {
        this.setState ({modal: false})
    }
    
    render() {
        const {query, images, isLoader, modal, bigImg} = this.state
        return (
            <>
            <Searchbar
                onHandleChange={this.onHandleChange}
                query={query}
                getImages={this.getImages}
                />
                {isLoader && <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} 
      />}
                <Images images={images} modalIsOpen={this.modalIsOpen}/>
                {modal && <Modal 
                    closeModal={this.closeModal}
                    bigImg={bigImg} />}
                {images.length > 0 && !isLoader && (<Button onLoadMore={this.onLoadMore} />)}
        </>
        )
    }
}
export default ImageGallery;