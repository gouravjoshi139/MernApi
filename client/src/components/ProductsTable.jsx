import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductTable = ({ data }) => {
  const { _id, title, price, description } = data;

  // Delete specific Product From our database by passing its  _id
  const removeProduct = async () => {
    try {
      const deleteProduct = await axios.delete(
        "http://localhost:5000/products/deleteProduct/" + _id
      );
      if (deleteProduct.status === 200) {
        alert("Product successfully deleted");
        window.location.reload();
      }
    } catch (error) {
      alert("Something went wrong" + error);
    }
  };
  // setProduct(_id);

  return (
    // showing Products table
    <>
      <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{description}</td>
        <td>
          <Link to={"/" + _id}>
            <Button size="lg" variant="warning">
              Update
            </Button>
          </Link>
        </td>
        <td>
          <Button onClick={removeProduct} size="lg" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ProductTable;
