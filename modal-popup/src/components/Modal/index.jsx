import React, { useState } from "react";
import "./style.css";

function Modal() {
  const [modalShow, setModalShow] = useState(false);
  const handleModal = () => {
    setModalShow(!modalShow);
    console.log(modalShow);
  };
  const closeModal = () => {
    setModalShow(false);
  }
  return (
    <div>
      <button onClick={() => handleModal()}>Open Modal</button>
      {modalShow == true && (
        <div className="modal">
          <div className="overlay" onClick={() => closeModal()}>
            <div className="modal-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quaerat voluptatibus fugit tenetur dolorem excepturi, nemo
                accusamus iure. Id expedita sapiente cum tenetur quia illo autem
                eligendi repellat, mollitia nisi!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
