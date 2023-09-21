import { ActionTypes } from "../constants/action-types";
import { Network, Urls } from "../../config";

const fetchContacts = async (dispatch, actionType, queryString) => {
  try {
    dispatch({ type: ActionTypes.FETCH_CONTACTS_START });

    const response = await Network.get(`${Urls.contacts}?${queryString}`);
    dispatch({ type: ActionTypes.FETCH_CONTACTS_STOP });

    dispatch({
      type: actionType,
      payload: response.data.contacts,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.FETCH_CONTACTS_STOP });

    dispatch({
      type: actionType,
      payload: {},
    });
  }
};

export const getAllContacts = (page) => (dispatch) => {
  const params = {
    companyId: "560",
    page,
  };
  const queryString = new URLSearchParams(params).toString();
  fetchContacts(dispatch, ActionTypes.GET_ALL_CONTACTS, queryString);
};

export const getUSContacts = (page) => (dispatch) => {
  const params = {
    companyId: "560",
    countryId: "226",
    page,
  };
  const queryString = new URLSearchParams(params).toString();
  fetchContacts(dispatch, ActionTypes.GET_US_CONTACTS, queryString);
};

export const searchContact = (modalType, text) => async (dispatch) => {
  const params = {
    companyId: "560",
    query: text,
  };
  if (modalType !== "a") {
    params.countryId = "226";
  }

  const queryString = new URLSearchParams(params).toString();
  const actionType =
    modalType === "a"
      ? ActionTypes.GET_ALL_CONTACTS
      : ActionTypes.GET_US_CONTACTS;
  fetchContacts(dispatch, actionType, queryString);
};

export const filterEvenContacts = (value) => (dispatch) => {
  dispatch({ type: ActionTypes.ONLY_EVEN_CONTACTS, payload: value });
};
