import React from "react";
import ContactItem from "./ContactItem";

import style from "./ContactList.module.css";

function ContactsList({ contacts, deleteHandler }) {
  return (
    <div className={style.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={style.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={style.message}>No Contacts Yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
