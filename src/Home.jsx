import React from "react";
import { NavLink } from "react-router-dom";
const Home = () =>{
  return (
    <>
      <section >
        <div className="container home">
            <div className="row home">
                <div className="col-lg-6 home flex-column align-items-start">
                    <h3 className="fw-light h1">Grow Your Business With us</h3>
                    <div className="small mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur porro vero nobis deleniti voluptatibus neque nisi provident ut est repudiandae eius harum, tempora placeat deserunt reprehenderit quibusdam id. Facilis, officia!</div>
                    <NavLink className="btn btn-start text-decoration-none px-3 py-2 text-center " to="/">Get Started</NavLink>
                </div>
                <div className="col-lg-6 d-lg-flex d-none">
                    <img src="https://www.atg.world/public/assets/minified/Frontend/img/landing/event-meetup.svg" className="home-img img-fluid vert-move" alt=""/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home;