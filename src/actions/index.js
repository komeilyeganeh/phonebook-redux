export const addUser = (userInfo) => {
  return {
    type: "ADD_USER",
    payload: userInfo,
  };
};

export const deteleUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
