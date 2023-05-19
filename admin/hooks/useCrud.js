import axios from "axios";
import { useEffect, useState } from "react";

export const useCrud = (path) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/" + path).then((res) => {
      setItems(res.data);
    });
  }, [path]);

  const deleteItem = (id) => {
    axios
      .delete("http://localhost:8080/" + path + "/" + id)
      .then(() => {
        setItems(items.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateItem = (item) => {
    axios
      .patch("http://localhost:8080/" + path, item)
      .then((res) => {
        setItems(items.map((item) => (item._id === id ? res.data : item)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createItem = (item) => {
    axios
      .post("http://localhost:8080/" + path, item)
      .then((res) => {
        setItems([...items, res.data]);
        console.log("res and items", [...items, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { createItem, updateItem, deleteItem, items };
};
