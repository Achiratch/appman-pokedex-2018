import React from "react";
import Pokemon from "./pokemon";

const CardModal = ({ open, onClose ,addCard,myCard}) => {
  if (!open) return null;

  return (
    <>
      <div
        className="overlay-style"
        onClick={() => {
          onClose();
        }}
      >
        <div
          className="modal-style"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Pokemon addCard={addCard} myCard={myCard}/>
        </div>
      </div>
    </>
  );
};

export default CardModal;
