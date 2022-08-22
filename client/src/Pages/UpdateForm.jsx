import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateForm = ({
  product,
  values,
  errors,
  handleBlur,
  touched,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="form-wrapper">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* Placeholder Contain the former value of product which need to be updated */}
          <Form.Label>ProductName</Form.Label>
          <Form.Control
            name="title"
            type="title"
            placeholder={product.title}
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.title && touched.title ? (
            <Form.Text className="text-danger">{errors.title}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="text"
            placeholder={product.price}
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.price && touched.price ? (
            <Form.Text className=" text-danger">{errors.price}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder={product.description}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && touched.description ? (
            <Form.Text className="text-danger">{errors.description}</Form.Text>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
    </div>
  );
};

export default UpdateForm;
