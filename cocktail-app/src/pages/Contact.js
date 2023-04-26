/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <>
      <Layout>
        <div style={{ backgroundColor: "#d3baba" }}>
          <div className="container contact">
            <div className="row">
              <div className="col-md-3">
                <div className="contact-info">
                  <img
                    src="https://image.ibb.co/kUASdV/contact-image.png"
                    alt="image"
                  />
                  <div className="row ">
                    <h2>Contact Us</h2>
                    <h4>We would love to hear from you !</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="contact-form">
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="fname">
                      First Name:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        placeholder="Enter First Name"
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="lname">
                      Last Name:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="lname"
                        placeholder="Enter Last Name"
                        name="lname"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">
                      Email:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="comment">
                      Comment:
                    </label>
                    <div className="col-sm-10">
                      <textarea
                        className="form-control"
                        rows={5}
                        id="comment"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button
                        type="submit"
                        className="btn btn-default btn-dark"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="img w-100"
            style={{ height: "60rem" }}
            src="https://assets.vogue.in/photos/5fec0c6c921d2894cf08222b/4:3/w_3876,h_2907,c_limit/Woodburns%20Whisky.jpg"
            alt=""
          />
        </div>
      </Layout>
    </>
  );
};

export default Contact;
