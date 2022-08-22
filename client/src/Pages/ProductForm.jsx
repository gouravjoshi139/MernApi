// Product form Component for add new product
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProductForm = ({
  values,
  errors,
  handleBlur,
  touched,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div method="POST" className="form-wrapper">
      <Form method="POST" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ProductName</Form.Label>
          <Form.Control
            name="title"
            type="title"
            placeholder="Realme Narzo 30.."
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
            placeholder="13000"
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
            placeholder="Best mobile in world."
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && touched.description ? (
            <Form.Text className="text-danger">{errors.description}</Form.Text>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
