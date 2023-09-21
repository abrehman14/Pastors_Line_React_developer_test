import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";

const DetailModal = ({ show, onClose, contact }) => {
  return (
    <Modal show={show}>
      <ModalHeader>{`${contact?.first_name} ${contact?.last_name}`}</ModalHeader>
      <ModalBody>
        <div>Phone Number: {contact?.full_phone_number}</div>
      </ModalBody>
      <ModalFooter>
        <Button className="button-c" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DetailModal;
