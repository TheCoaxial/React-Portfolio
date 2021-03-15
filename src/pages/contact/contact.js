import React from "react";
import "./contact.css";

const Contact = () => (
    <div className="container float-left">
        <div className="row">
            <div className="col-sm-6"> 
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Contact Me</h5>
                        <hr />
                        <form>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="First and last name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                        </form>
                        <a href="#" className="btn btn-primary">Submit</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;