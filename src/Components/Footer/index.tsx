import React from "react";

function index() {
  return (
    <footer className="text-center text-white footer-parent">
      <div className="bg-success pt-4 pb-4">
        <section className="">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1  text-white"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1 text-white"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1 text-white"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1 text-white"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div className="text-center text-dark p-3 child pt-4">
        © 2022 Copyright:
        <a className="text-dark" href="https://fahmiali.netlify.app/">
          FAL
        </a>
      </div>
    </footer>
  );
}

export default index;
