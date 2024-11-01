import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
function Cart() {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "white" }}>
    
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol className="d-flex justify-content-center" size="13">
            <MDBCard
              className="ipad-card  card-registration card-registration-2"
              style={{ borderRadius: "0px", boxShadow: "none" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          3 items
                        </MDBTypography>
                      </div>
                      <div className="cart_items_contional">
                        <hr className="my-4" />

                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                              fluid
                              className="rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-muted">
                              Shirt
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-black mb-0">
                              Cotton T-shirt
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="3"
                            xl="3"
                            className="d-flex align-items-center"
                          >
                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <MDBInput
                              type="number"
                              min="0"
                              defaultValue={1}
                              size="sm"
                            />

                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              € 44.00
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-muted">
                              <MDBIcon fas icon="times" />
                            </a>
                          </MDBCol>
                        </MDBRow>

                        <hr className="my-4" />

                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                              fluid
                              className="rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-muted">
                              Shirt
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-black mb-0">
                              Cotton T-shirt
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="3"
                            xl="3"
                            className="d-flex align-items-center"
                          >
                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <MDBInput
                              type="number"
                              min="0"
                              defaultValue={1}
                              size="sm"
                            />

                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              € 44.00
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-muted">
                              <MDBIcon fas icon="times" />
                            </a>
                          </MDBCol>
                        </MDBRow>

                        <hr className="my-4" />

                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                              fluid
                              className="rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-muted">
                              Shirt
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-black mb-0">
                              Cotton T-shirt
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="3"
                            xl="3"
                            className="d-flex align-items-center"
                          >
                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <MDBInput
                              type="number"
                              min="0"
                              defaultValue={1}
                              size="sm"
                            />

                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              € 44.00
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-muted">
                              <MDBIcon fas icon="times" />
                            </a>
                          </MDBCol>
                        </MDBRow>

                        <hr className="my-4" />
                        <div className="no_items_inCart">
                          <p className="no_cart_items_msg">
                            There are no items in this cart
                          </p>
                          <Link to="/shop" className="no_cart_Link">
                            CONTINUE SHOPPING
                          </Link>
                        </div>
                      </div>
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <Link to="/shop">
                              <MDBIcon fas icon="long-arrow-alt-left me-2" />
                              Back to shop
                            </Link>
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items 3
                        </MDBTypography>
                        <MDBTypography tag="h5">€ 132.00</MDBTypography>
                      </div>
                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Shipping CHARGES
                        </MDBTypography>
                        <MDBTypography tag="h5">€ 5</MDBTypography>
                      </div>
                      <MDBTypography
                        style={{ fontSize: "1.1rem" }}
                        tag="h5"
                        className="text-uppercase mb-3"
                      >
                        Select Shipping Type
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select
                          className="select p-2 rounded bg-grey"
                          style={{ width: "100%" }}
                        >
                          <option value="1">
                            1 Day Air Cargo Shipping -20$
                          </option>
                          <option value="2">
                            Two Days Standard Shipping -5$
                          </option>
                        </select>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Coupon Code
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">€ 137.00</MDBTypography>
                      </div>

                      <MDBBtn
                      href="/checkout"
                        style={{ backgroundColor: "#4BB497" }}
                        block
                        size="lg"
                      >
                        Register
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default Cart;
