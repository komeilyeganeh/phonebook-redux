const userReducer = (listPersons = [], action) => {
  if (action.type === "ADD_USER") {
    const found = listPersons.find(user => user.phone === action.payload.phone);
    if (!found) {
      return [...listPersons, action.payload];
    }
  } else if (action.type === "DELETE_USER") {
    return listPersons.filter((person) => person.phone !== action.payload);
  }
  return listPersons;
};

export default userReducer;
