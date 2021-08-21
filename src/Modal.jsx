import React from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import ModalContent from './ModalContent';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '25%',
    transform: 'translate(-50%, -50%)',
  },
};

function MyModal({
    modalTitle, 
    modalSelectName, 
    modalSelectTitle,
    modalButtonName,
    isImagePresent, 
    isSelectPresent,
    isCountPresent
 }) {


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
      <div>
        <Button
         style={{marginLeft:'20px', backgroundColor:'var(--darkGreen)', color:'var(--primaryColor)'}}
          variant="contained"
          className="add-item"
          onClick={openModal}
        >
          {modalButtonName}
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel=" Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
          <ModalContent 
          isImagePresent ={isImagePresent}
          isSelectPresent ={isSelectPresent}
          isCountPresent={isCountPresent}
          modalSelectTitle={modalSelectTitle}
          modalSelectName={modalSelectName}
          modalTitle={modalTitle} 
          closeModal={closeModal} />
        </Modal>
      </div>
    );
}

export default MyModal;
