import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-marketplace-2-g51j.onrender.com/api",
});

export const getItems = () => {
  return api.get("/items").then((response) => {
    return response.data.items;
  });
};

export const getCategories = () => {
  return api.get("/categories").then((response) => {
    return response.data.categories || response.data;
  });
};

export const getItemsByCategory = (categoryName) => {
  return api.get(`/items?category_name=${categoryName}`).then((response) => {
    console.log(response.data);
    return response.data.items;
  });
};

export const getUsers = () => {
  return api.get("/users").then((response) => {
    console.log(response.data.users);

    return response.data.users;
  });
};
