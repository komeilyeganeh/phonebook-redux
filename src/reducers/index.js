import { combineReducers } from "redux";

const addUserReducer = (listPersons = [], action) => {
  if (action.type === "ADD_USER") {
    return [...listPersons, action.payload];
  }
  return listPersons;
};

const deleteUserReducer = (listPersons, action) => {
  if (action.type === "DELETE_USER") {
    return listPersons.filter((person) => person.id !== action.payload);
  }
  return listPersons;
};

export default combineReducers({
    addUser: addUserReducer,
    deleteUser: deleteUserReducer
});
