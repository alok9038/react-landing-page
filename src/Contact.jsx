import React from "react";

const Contact = () =>{
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
        <div className="col-lg-7">
                <img src="https://www.atg.world/public/assets/minified/Frontend/img/landing/connect_share.svg" alt="img" className="img-fluid vert-move"/>
            </div>
            <div className="col-lg-5">
                <div className="card border-0 round-25 shadow">
                    <div className="card-body">
                        <h4 className="fw-light mb-4">Contact Us</h4>
                        <hr/>
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="">Fullname</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Email</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Contact</label>
                                <input type="contact" className="form-control"/>
                            </div>
                            <input type="submit" className="btn btn-info float-end"/>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Contact;