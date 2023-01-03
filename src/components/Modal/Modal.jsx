import { Backdrop, Modal, CloseBtn } from "./Modal.styled"
import {IoIosClose} from 'react-icons/io';
import { memo, useEffect } from "react";



function ModalWindow ({onClose, children}) {
    useEffect(() => {
      window.addEventListener('keydown', handleKeydown)

      return () => {
        window.removeEventListener('keydown', handleKeydown)
      }
    }) 

    const handleKeydown = e => {
                if(e.code === 'Escape') {
                    onClose();
                }
            }
     
    const handleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            onClose();
         }
     }        

    return (
        <Backdrop onClick={handleBackdropClick}>
        <Modal>
        <CloseBtn onClick={onClose}>
        <IoIosClose size='28'/>
        </CloseBtn>
            {children}
         </Modal>
        </Backdrop>
    )
}




// export default class ModalWindow extends PureComponent {
//     componentDidMount () {
//         window.addEventListener('keydown', this.handleKeydown)
//     }

//     componentWillUnmount () {
//         window.removeEventListener('keydown', this.handleKeydown)
//     }

//     handleKeydown = e => {
//         if(e.code === 'Escape') {
//             this.props.onClose();
//         }
//     }

//     handleBackdropClick = e => {
//         if(e.currentTarget === e.target) {
//             this.props.onClose();
//         }
//     }

//     render () {
//         return (
//             <Backdrop onClick={this.handleBackdropClick}>
//         <Modal>
//         <CloseBtn onClick={this.props.onClose}>
//             <IoIosClose size='28'/>
//         </CloseBtn>
//         {this.props.children}
//         </Modal>
//         </Backdrop>

//         )
//     }
// }

export default memo(ModalWindow)