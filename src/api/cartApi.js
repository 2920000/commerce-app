import instance from "./axiosClient";

const addProductToMongodb = async (payload) => {
  const data = await instance.post(`/cart/add`, {
    payload,
  });
  return data.data;
};

const getCartFromDatabase = (userId) => {
  return instance.get(`/cart/get`, {
    params: {
      _id: userId,
    },
  });
};

const removeCartProductFromDatabase = (payload) => {
  return instance.post(`/cart/remove`, {
    payload,
  });
};

const updateCartProductAmountFromDatabase = (payload) => {
  return instance.post(`/cart/update`, {
    payload,
  });
};

export {
  addProductToMongodb,
  getCartFromDatabase,
  removeCartProductFromDatabase,
  updateCartProductAmountFromDatabase,
};
