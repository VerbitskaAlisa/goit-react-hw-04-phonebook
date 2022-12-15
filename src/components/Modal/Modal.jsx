import { Backdrop, Modal, CloseBtn } from "./Modal.styled"
import {IoIosClose} from 'react-icons/io';
import { PureComponent } from "react";

export default class ModalWindow extends PureComponent {
    componentDidMount () {
        window.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {
        if(e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render () {
        return (
            <Backdrop onClick={this.handleBackdropClick}>
        <Modal>
        <CloseBtn onClick={this.props.onClose}>
            <IoIosClose size='28'/>
        </CloseBtn>
        {this.props.children}
        </Modal>
        </Backdrop>

        )
    }
}