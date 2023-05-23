import axios from "axios";
import { useEffect, useState } from "react";

export const useCrud = (path) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/` + path).then((res) => {
      setItems(res.data);
    });
  }, [path]);
  const showErrorToast = (status) => {
    switch (status) {
      case 400:
      case 404:
        showToast("");
        break;
      case 401:
        showToast("");
      case 403:
        showToast("");
      case 500:
        showToast("");
        break;
      default:
        showToast("");
    }
  };

  const deleteItem = (id) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/` + path + "/" + id)
      .then(() => {
        setItems(items.filter((item) => item._id !== id));
        showToast("", "success");
      })
      .catch((err) => {
        showErrorToast(err.status.code);
      });
  };

  const updateItem = (item) => {
    axios
      .patch(`${process.env.NEXT_PUBLIC_API_URL}/` + path, item)
      .then((res) => {
        setItems(items.map((item) => (item._id === id ? res.data : item)));
        showToast("", "success");
      })
      .catch((err) => {
        showErrorToast(err.status.code);
      });
  };

  const createItem = (item) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/` + path, item)
      .then((res) => {
        setItems([...items, res.data]);
        console.log("res and items", [...items, res.data]);
        showToast("", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { createItem, updateItem, deleteItem, items };
};
