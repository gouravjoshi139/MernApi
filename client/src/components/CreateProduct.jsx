// CreateProduct Component for add new product
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import ProductForm from "../Pages/ProductForm";

const initialValues = {
  title: "",
  price: "",
  description: "",
};

const CreateProduct = () => {
  const ProductSchema = Yup.object({
    title: Yup.string().min(3).required("Enter valid data"),
    price: Yup.number().required("Enter valid data"),
    description: Yup.string().min(4).required("Enter valid data"),
  });

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      validationSchema: ProductSchema,
      initialValues: initialValues,

      // onSubmit Handler to transfer data to the database
      onSubmit: async (values) => {
        try {
          const TransferData = await axios.post(
            "http://localhost:5000/products/addProduct",
            values
          );
          if (TransferData.status === 200) {
            alert("Product successfully created");
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
    // passing Props to the Form
    <div>
      <h1 className="display-3 text-white text-center mb-3">Add New Product</h1>
      <ProductForm
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

export default CreateProduct;
