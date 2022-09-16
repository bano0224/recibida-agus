import React, { useState } from "react";
import Modal from 'react-modal';
import { data } from '../../data/data';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


export const ModalContainer = ({modalIsOpen}) => {

    function arraySelector () {
        let rand = Math.floor(Math.random()*data.length);
        let rValue = data[rand];
        console.log(rValue)

        return rValue;
    }

    return(


    <div>
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Example Modal"
    >
        <div>
        <h2 style={{textAlign: "center"}}>Gracias por tu mensaje!</h2>
        <img src={`${arraySelector()?.img}`} alt="" />
        </div>
      
    </Modal>
  </div>
    )
}