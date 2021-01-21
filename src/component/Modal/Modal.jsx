import React, {Component} from 'react'

class Modal extends Component {

    closeModalEsk = (event) => {
        if (event.code === 'Escape') {
            this.props.closeModal()
        }
    }


    componentDidMount() { 
        window.addEventListener('keydown', this.closeModalEsk)
    }
    
     componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModalEsk);
    }

    render() {
        return (
            <div className="Overlay">
            <div className="Modal">
                <img src={this.props.bigImg} alt="" />
            </div>
            </div>
        )
    }
}

export default Modal;