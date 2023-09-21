import { createSelector } from "reselect";

const selectContactsState = (state) => state.contacts;

export const selectContacts = createSelector(
  [selectContactsState],
  (contactsState) => contactsState.contacts
);
export const selectEvenContacts = createSelector(
  [selectContactsState],
  (contactsState) => contactsState.evenContacts
);

export const selectLoading = createSelector(
  [selectContactsState],
  (contactsState) => contactsState.loading
);
