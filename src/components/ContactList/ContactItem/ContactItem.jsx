import PropTypes from "prop-types";

export default function ContactItem({ contact, onContactDel }) {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={(e) => onContactDel(e.target.id)} id={contact.id}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
