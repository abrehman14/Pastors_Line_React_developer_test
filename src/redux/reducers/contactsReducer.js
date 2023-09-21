import { ActionTypes } from "../constants/action-types";

const initialState = {
  evenContacts: {},
  contacts: {},
  loading: false,
};

export const contactsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_ALL_CONTACTS: {
      if (!Array.isArray(payload))
        return { ...state, contacts: { ...state.contacts, ...payload } };
      return state;
    }
    case ActionTypes.GET_US_CONTACTS: {
      if (!Array.isArray(payload))
        return { ...state, contacts: { ...state.contacts, ...payload } };
      return state;
    }

    case ActionTypes.FETCH_CONTACTS_START: {
      return { ...state, loading: true };
    }
    case ActionTypes.FETCH_CONTACTS_STOP: {
      return { ...state, loading: false };
    }
    case ActionTypes.GET_EVEN_ID_CONTACTS: {
      let evenContacts = {};
      if (payload)
        Object.keys(state.contacts).map((key) => {
          if (parseInt(key) % 2 === 0) {
            evenConacts[key] = state.contacts[key];
          }
        });
      return { ...state, evenContacts };
    }

    default:
      return state;
  }
};
