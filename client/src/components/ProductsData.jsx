import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import ProductsTable from "./ProductsTable";

const ProductsData = () => {
  const [product, setProduct] = useState([]);
  const url = "http://localhost:5000/products";

  useEffect(() => {
    // fetching our products from database
    const fetchProduct = async () => {
      const response = await fetch(url);
      const data = await response.json();

      // Put them into state
      setProduct(data);
    };
    fetchProduct();
  }, []);

  const ProductTable = () => {
    // looping in updated state to show our product
    return product.map((items, i) => {
      return <ProductsTable data={items} key={i} />;
    });
  };

  return (
    <>
      <div className="table-wrapper">
        {/* product table  */}
        <h1 className="display-3 text-white text-center mb-3">
          Products Table
        </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ProductName</th>
              <th>Price</th>
              <th>Description</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{ProductTable()}</tbody>
        </Table>
      </div>
    </>
  );
};

export default ProductsData;
