import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import UpdateForm from "../Pages/UpdateForm";

const initialValues = {
  title: "",
  price: "",
  description: "",
};

const UpdateProduct = () => {
  const [product, setProduct] = useState({});

  // Fetching the target Product Id from url
  const url_string = window.location.href;
  const url = new URL(url_string);
  let id = url.pathname;

  // gettin specific product data which has to be update
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/products" + id);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const ProductSchema = Yup.object({
    title: Yup.string().min(3).required("Enter valid data"),
    price: Yup.number().required("Enter valid data"),
    description: Yup.string().min(4).required("Enter valid data"),
  });

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      validationSchema: ProductSchema,
      initialValues: initialValues,

      // Making PUT request to update specific product data by using its id
      onSubmit: async (values) => {
        try {
          const updateData = await axios.put(
            "http://localhost:5000/products/updateProduct" + id,
            values
          );
          if (updateData.status === 200) {
            alert("Product successfully updated!");
          }
        } catch (error) {
          alert("Something went wrong" + error);
        }
        values.title = "";
        values.price = "";
        values.description = "";
      },
    });

  return (
    // passing Props to the update Form
    <div>
      <h1 className="display-3 text-white text-center mb-3">
        Update Product Data
      </h1>
      <UpdateForm
        product={product}
        values={values}
        errors={errors}
        handleBlur={handleBlur}
        touched={touched}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default UpdateProduct;
