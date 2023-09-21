import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  selectContacts,
  selectEvenContacts,
  selectLoading,
} from "../../redux/selectors/contactsSelectors";
import {
  filterEvenContacts,
  getAllContacts,
  getUSContacts,
  searchContact,
} from "../../redux/actions/contactsAction";
import { debounce } from "../../utils";
import { ContactsList, DetailModal } from "./components";

const ModalPage = () => {
  const [search, setSearch] = useState("");
  const [contact, setContact] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [page, setPage] = useState(1);
  const [showEven, setShowEven] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === "a") dispatch(getAllContacts(page));
    else if (id === "b") dispatch(getUSContacts(page));
  }, [id, page]);

  //Selectors
  const contacts = useSelector(selectContacts);
  const evenContacts = useSelector(selectEvenContacts);
  const loading = useSelector(selectLoading);

  //handler functions
  const handleKeyDown = ({ key }) => {
    if (key === "Enter") {
      dispatch(searchContact(id, search));
    }
  };

  const handleOnChange = ({ target }) => {
    setSearch(target.value);
    debounce(dispatch, searchContact(id, search));
  };

  const handleClickedItem = (contact) => {
    setContact(contact);
    setShowDetailModal(true);
  };

  const handleScroll = ({ target }) => {
    if (target.offsetHeight + target.scrollTop >= target.scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <Modal show={!showDetailModal}>
        <ModalHeader>
          <div className="d-flex justify-content-between align-items-center w-100">
            {id === "a" ? "All Conatcts" : "US Contacts"}
          </div>
        </ModalHeader>
        <ModalBody>
          <input
            className="input"
            placeholder="Search contact..."
            onKeyDown={handleKeyDown}
            value={search}
            onChange={handleOnChange}
          />

          {loading && !Object.keys(contacts).length ? (
            <div className="my-5 d-flex justify-content-center align-items-center">
              Loading...
            </div>
          ) : (
            <Scrollbars
              onScroll={handleScroll}
              className="d-flex flex-column align-items-center justify-content-center w-100"
              style={{ width: 450, height: 300 }}
            >
              <ContactsList
                contacts={showEven ? evenContacts : contacts}
                clickedItem={handleClickedItem}
              />
            </Scrollbars>
          )}
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/modal/a">
              <Button onClick={() => setPage(1)} className="button-a">
                All Contacts
              </Button>
            </Link>
            <Link to="/modal/b">
              <Button className="button-b">US Contacts</Button>
            </Link>
            <Link to="/">
              <Button className="button-c">Close</Button>
            </Link>
          </div>
        </ModalBody>
        <ModalFooter>
          <label className="d-flex align-items-center justify-content-start w-100">
            <input
              type="checkbox"
              checked={showEven}
              onChange={() => {
                setShowEven(!showEven);
                dispatch(filterEvenContacts(!showEven));
              }}
              className="mr-3"
            />
            Only even
          </label>
        </ModalFooter>
      </Modal>

      <DetailModal
        show={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        contact={contact}
      />
    </>
  );
};

export default ModalPage;
