import React from "react";

const ContactsList = ({ contacts, clickedItem }) => {
  return Object.keys(contacts).map((key) => {
    const contact = contacts[key];
    return (
      <div
        className="my-2 cursor-pointer"
        style={{ color: contact.color }}
        onClick={() => clickedItem(contact)}
        key={key}
      >
        {`${contact.first_name} ${contact.last_name} (${contact.country.iso})`}
      </div>
    );
  });
};

export default ContactsList;
