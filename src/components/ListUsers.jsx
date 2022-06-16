import { connect } from "react-redux";
import { deleteUser } from "../actions";
import "./ListUsers.css";

const ListUsers = ({ items, deleteUser }) => {
    console.log(items);
  return (
    <div className="list-container">
      {items.length !== 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.phone}>
              <span>{item.name}</span>
              <span className="phone">{item.phone}</span>
              <button
                className="btn-delete"
                onClick={() => deleteUser(item.phone)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="not-found">کاربری پیدا نشد !</p>
      )}
    </div>
  );
};

export default connect(null, { deleteUser })(ListUsers);
