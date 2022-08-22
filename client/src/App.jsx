// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import from react-router-dom
import { Routes, Route, Link } from "react-router-dom";

import ProductsData from "./components/ProductsData";
import CreateProduct from "./components/CreateProduct";

import UpdateProduct from "./components/UpdateProduct";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* App nav bar */}
        <Navbar bg="secondary" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/"} className="nav-link text-lg">
                Mern Api
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/addProduct"} className="nav-link">
                  Create Products
                </Link>
              </Nav>

              <Nav>
                <Link to={"/"} className="nav-link">
                  Products List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Routes>
                {/* Making Route to different components */}

                {/* this component shows Product table */}
                <Route exact path="/" element={<ProductsData />} />
                {/* this component require to create new product  */}
                <Route path="/addProduct" element={<CreateProduct />} />
                {/* this component require to UpdateProduct */}
                <Route path="/:id" element={<UpdateProduct />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
