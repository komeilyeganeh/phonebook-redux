export const addUser = (userInfo) => {
  return {
    type: "ADD_USER",
    payload: userInfo,
  };
};

export const deleteUser = (phone) => {
  return {
    type: "DELETE_USER",
    payload: phone,
  };
};
