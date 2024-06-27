import React, { Component } from 'react';
import Modal from 'react-modal';
import Tudulist from './Tudulist';  // Ensure the path to Tudulist is correct

const customStyles = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class ModalComp extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    if (this.subtitle) {
      this.subtitle.style.color = '#f00';
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(subtitle) => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>
            <Tudulist />  {/* Including the Tudulist component inside the modal */}
          </div>
          <form>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ModalComp;
